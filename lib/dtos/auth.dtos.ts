import {
  IsDefined,
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Expose } from 'class-transformer';
import { IUser, UserRole } from '../models/User';
import { IsEqualTo } from '../utils/classvalidatorDecorators';

export class SignUpUserDto {
  @IsDefined()
  @Expose()
  @IsString()
  name!: IUser['name'];

  @IsDefined()
  @Expose()
  @IsString()
  email!: IUser['email'];

  @IsOptional()
  @Expose()
  role!: IUser['role'];

  @IsDefined()
  @Expose()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/, {
    message:
      'Password too weak, must have at least 1 uppercase character, 1 lowercase character and 1 special character',
  })
  password!: IUser['password'];

  @IsDefined()
  @Expose()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @IsEqualTo('password')
  passwordConfirm!: IUser['passwordConfirm'];

  @IsOptional()
  @Expose()
  @IsString()
  passwordChangedAt!: IUser['passwordChangedAt'];

  @IsOptional()
  @Expose()
  @IsString()
  passwordResetToken!: IUser['passwordResetToken'];

  @IsOptional()
  @Expose()
  @IsString()
  passwordResetExpires!: IUser['passwordResetExpires'];

  @IsOptional()
  @Expose()
  @IsString()
  active!: IUser['active'];

  @IsOptional()
  @Expose()
  @IsString()
  slug!: IUser['slug'];
}

export class LoginUserDto {
  @IsDefined()
  @Expose()
  @IsEmail()
  email!: IUser['email'];

  @IsDefined()
  @Expose()
  @IsString()
  password!: IUser['password'];
}

export class ForgotPassDto {
  @IsDefined()
  @Expose()
  @IsEmail()
  email!: IUser['email'];
}

export class ResetPassDto {
  @IsDefined()
  @Expose()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/, {
    message:
      'Password too weak, must have at least 1 uppercase character, 1 lowercase character and 1 special character',
  })
  password!: IUser['password'];

  @IsDefined()
  @Expose()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @IsEqualTo('password')
  passwordConfirm!: IUser['passwordConfirm'];
}

export class UpdatePassDto {
  @IsDefined()
  @Expose()
  @IsString()
  passwordCurrent!: string;

  @IsDefined()
  @Expose()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/, {
    message:
      'Password too weak, must have at least 1 uppercase character, 1 lowercase character and 1 special character',
  })
  password!: IUser['password'];

  @IsDefined()
  @Expose()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @IsEqualTo('password')
  passwordConfirm!: IUser['passwordConfirm'];
}

export class ReportBugDto {
  @IsDefined()
  @Expose()
  @MinLength(1, { message: 'Name must not be empty' })
  @IsString()
  name!: string;

  @IsDefined()
  @Expose()
  @IsEmail({}, { message: 'Invalid email' })
  @IsString()
  email!: string;

  @IsDefined()
  @Expose()
  @MinLength(1, { message: 'Error type must not be empty' })
  @IsString()
  errorType!: string;

  @IsDefined()
  @Expose()
  @MinLength(1, { message: 'Message must not be empty' })
  @IsString()
  message!: string;

  @IsOptional()
  @Expose()
  @IsString()
  buildEditorLink?: string;
}
