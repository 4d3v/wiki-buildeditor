import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/AppError';

export default class {
  public errorHandler(
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Something went wrong';

    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : null,
    });
  }
}
