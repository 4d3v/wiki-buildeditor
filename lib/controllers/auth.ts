import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import Base from './Base';
import User, { IUser, UserRole } from '../models/User';
import { CatchAsync } from '../utils/catchAsync';
import AppError from '../utils/AppError';
import {
  ForgotPassDto,
  LoginUserDto,
  ReportBugDto,
  ResetPassDto,
  SignUpUserDto,
  UpdatePassDto,
} from '../dtos/auth.dtos';
import Email from '../utils/email';
import sendJson from './sendJson';

const signToken = (slug: string, role: UserRole) =>
  jwt.sign({ slug, role }, <string>process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const sendJwtToken = (
  req: Request,
  res: Response,
  statusCode: number,
  status: string,
  user: IUser
) => {
  const token = signToken(user.slug, user.role);

  // !! Implement later
  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() +
        Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000 // Converting to miliseconds
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  user.password = '';
  user.passwordConfirm = '';

  res.status(statusCode).json({
    status: status,
    token,
    data: {
      user,
    },
  });
};

export class AuthController extends Base {
  // TODO those factory functions should belong on user
  public readonly getUsers = this._getAll(User);

  constructor() {
    super();
  }

  @CatchAsync()
  public async signUp(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const signUpUserDto: SignUpUserDto = req.dto;
    const user: IUser = await User.create(signUpUserDto);
    sendJwtToken(req, res, 201, 'success', user);
  }

  @CatchAsync()
  public async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { email, password }: LoginUserDto = req.dto,
      user: IUser | null = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password)))
      return next(new AppError('Incorrect email or password', 401));

    sendJwtToken(req, res, 200, 'success', user);
  }

  @CatchAsync()
  public async logout(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.cookie('jwt', 'loggedout', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });
    res.status(200).json({ status: 'success' });
  }

  @CatchAsync()
  public async protect(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    // Checking if there is a token on the header and assigning to token var
    let token: string | undefined;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    )
      token = req.headers.authorization.split(' ')[1];
    // else if (req.cookies.jwt) token = req.cookies.jwt;

    if (!token)
      return next(
        new AppError('You are not logged in! Please log in to get access.', 401)
      );

    /*
     *  making the code cleaner with promisify, if it succeeds decoded returns the payload with
     *  user slug and role. If it fails it enters catch block from @CatchAsync()
     */
    const decoded = jwt.verify(
        token,
        <string>process.env.JWT_SECRET,
        (err, decoded) => {
          if (err) return next(new AppError(JSON.stringify(err), 400));
          return decoded;
        }
      ),
      curUser: IUser | null = await User.findOne({
        slug: (<any>decoded).slug,
      });

    if (!curUser)
      return next(
        new AppError(
          'The user belonging to this token does no longer exist.',
          401
        )
      );

    // ! Check if user changed password after the token was issued
    // if (currentUser.changedPasswordAfter(decoded.iat)) {
    //   return next(
    //     new AppError('User recently changed password! Please log in again.', 401)
    //   );
    // }

    req.user = curUser;
    next();
  }

  public restrictTo(...roles: Array<UserRole>) {
    return (req: Request, res: Response, next: NextFunction): void => {
      if (!roles.includes(req.user.role)) {
        return next(
          new AppError('You do not have permission to perform this action', 404)
        );
      }
      next();
    };
  }

  // ! block below still needs to be implemented
  @CatchAsync()
  public async forgotPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { email }: ForgotPassDto = req.dto,
      user: IUser | null = await User.findOne({ email });

    if (!user)
      return next(
        new AppError('There is no user with that email address', 404)
      );

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${req.protocol}://${req.get(
        'host'
      )}/v1/resetpassword/${resetToken}`,
      subject = 'Your password reset token (valid for 10 min)',
      message = `Forgot your password? Submit a patch request to: ${resetUrl}.\nIf you didn't forget your password, please ignore this email!`;

    try {
      const dt = {
        from: process.env.EMAIL_PROJ,
        to: user.email,
        subject,
        message,
      };
      await new Email(dt).sendPasswordReset();
      sendJson(res, 200, 'success', { msg: 'Token sent to email!' });
    } catch (err) {
      user.passwordResetToken = '';
      user.passwordResetExpires = new Date(Date.now());
      await user.save({ validateBeforeSave: false });
      return next(
        new AppError(
          'There was an error sending the email, please try again later!',
          500
        )
      );
    }
  }

  @CatchAsync()
  public async resetPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { password, passwordConfirm }: ResetPassDto = req.dto,
      hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

    const user: IUser | null = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: new Date(Date.now()) },
    });

    if (!user)
      return next(new AppError('Token is invalid or has expired', 400));

    user.password = password;
    user.passwordConfirm = passwordConfirm;
    user.passwordResetToken = '';
    user.passwordResetExpires = new Date(Date.now());
    await user.save();

    sendJwtToken(req, res, 200, 'success', user);
  }

  @CatchAsync()
  public async updatePassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const {
        passwordCurrent,
        password,
        passwordConfirm,
      }: UpdatePassDto = req.dto,
      user: IUser | null = await User.findById(req.user.id).select('+password');

    if (!user)
      return next(new AppError('Error: User not found or not logged in', 404));

    if (!(await user.correctPassword(passwordCurrent, user.password)))
      return next(new AppError('Your current password is wrong.', 401));

    user.password = password;
    user.passwordConfirm = passwordConfirm;
    await user.save();

    sendJwtToken(req, res, 200, 'success', user);
  }

  @CatchAsync()
  public async reportBug(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const reportBugDto: ReportBugDto = req.dto;

    try {
      const dt = {
        from: reportBugDto.email,
        to: process.env.EMAIL_PROJ,
        subject: reportBugDto.name + ' ' + reportBugDto.errorType,
        name: reportBugDto.name,
        message: reportBugDto.message,
        errorType: reportBugDto.errorType,
        buildEditorLink: reportBugDto.buildEditorLink || null,
      };
      await new Email(dt).sendReportBug();
      sendJson(res, 200, 'success', { msg: 'Email sent' });
    } catch (err) {
      return next(
        new AppError(
          'There was an error sending the email, please try again later!',
          500
        )
      );
    }
  }
}
