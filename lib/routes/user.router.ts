import { Router } from 'express';
import { AuthController } from '../controllers/auth';
import {
  signupUserValues,
  loginUserValues,
  forgotPassValues,
  resetPassValues,
  updatePassValues,
  reportBugValues,
} from '../constants/filterValues';
import {
  ForgotPassDto,
  LoginUserDto,
  ReportBugDto,
  ResetPassDto,
  SignUpUserDto,
  UpdatePassDto,
} from '../dtos/auth.dtos';
import { UserRole } from '../models/User';

export class UserRouter {
  readonly userFilterValsMap: Map<number, Set<string>> = new Map();

  constructor(
    public router = Router(),
    private authController: AuthController = new AuthController()
  ) {
    this.initializeRoutes();
    this.authController._initializeFilterFieldValues(
      this.userFilterValsMap,
      signupUserValues,
      loginUserValues,
      forgotPassValues,
      resetPassValues,
      updatePassValues,
      reportBugValues
    );
  }

  private initializeRoutes() {
    // TODO move it to the appropiate route
    this.router.post(
      '/reportbug',
      this.authController._validateMiddlewareDto(
        ReportBugDto,
        this.userFilterValsMap,
        5
      ),
      this.authController.reportBug
    );

    this.router.post(
      '/signup',
      this.authController.protect,
      this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
      this.authController._validateMiddlewareDto(
        SignUpUserDto,
        this.userFilterValsMap,
        0
      ),
      this.authController.signUp
    );

    this.router.post(
      '/login',
      this.authController._validateMiddlewareDto(
        LoginUserDto,
        this.userFilterValsMap,
        1
      ),
      this.authController.login
    );

    this.router.use(this.authController.protect);
    this.router.use(
      this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN)
    );

    this.router
      .route('/forgotpassword')
      .post(
        this.authController._validateMiddlewareDto(
          ForgotPassDto,
          this.userFilterValsMap,
          2
        ),
        this.authController.forgotPassword
      );

    this.router
      .route('/resetpassword/:token')
      .patch(
        this.authController._validateMiddlewareDto(
          ResetPassDto,
          this.userFilterValsMap,
          3
        ),
        this.authController.resetPassword
      );

    this.router.patch(
      '/updatemypassword',
      this.authController._validateMiddlewareDto(
        UpdatePassDto,
        this.userFilterValsMap,
        4
      ),
      this.authController.updatePassword
    );

    this.router.route('/').get(this.authController.getUsers);
  }
}
