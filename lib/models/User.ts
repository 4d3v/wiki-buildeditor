import mongoose, { Document, Schema } from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import slugify from 'slugify';

export enum UserRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  USER = 'user',
}

export interface IUser extends Document {
  name: string;
  email: string;
  role: UserRole;
  password: string;
  passwordConfirm: string;
  passwordChangedAt: Date;
  passwordResetToken: string;
  passwordResetExpires: Date;
  active: boolean;
  slug: string;

  correctPassword: (
    candidatePassword: string,
    userPassword: string
  ) => Promise<boolean>;

  createPasswordResetToken: () => string;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'User name is required'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    default: 'user',
    enum: {
      values: ['owner', 'admin', 'user'],
      message: 'Role must be either: owner, admin or user',
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    select: false,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  slug: String,
});

UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  this.passwordConfirm = this.password;
  next();
});

UserSchema.pre<IUser>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// UserSchema.pre<IUser>('save', function (next) {
//   if (!this.isModified('password') || this.isNew) return next();
//   this.passwordChangedAt = Date.now() - 1000;
//   next();
// });

// UserSchema.pre<IUser>(/^find/, function (next) {
//   this.find({ active: { $ne: false } });
//   next();
// });

UserSchema.methods.correctPassword = async function (
  candidatePassword: string,
  userPassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, userPassword);
};

UserSchema.methods.createPasswordResetToken = function (): string {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Working for 10 minutes
  this.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000);

  return resetToken;
};

export default mongoose.model<IUser>('User', UserSchema);
