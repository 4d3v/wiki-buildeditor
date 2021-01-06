import { NextFunction, Request, Response } from 'express';

/**
 * ! This Decorator allows the usage of class' methods without
 * ! the need to include try{...}catch(err){...} blocks
 */
export const CatchAsync = () => (
  _target: any,
  _name: string,
  descriptor: PropertyDescriptor
) => {
  const fn = descriptor.value;
  descriptor.value = async (...args: Array<any>) => {
    try {
      await fn.apply(this, args);
    } catch (err) {
      console.log('=== Entered Catch ===');
      const [, , next] = args;
      next(err);
    }
  };
};

/**
 * ! This one is for usage on functions (not class methods)
 */
export const CatchAsyncFn = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
