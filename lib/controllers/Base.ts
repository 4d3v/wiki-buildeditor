import { NextFunction, Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Model } from 'mongoose';
import sendJson from './sendJson';
import { CatchAsyncFn } from '../utils/catchAsync';
import AppError from '../utils/AppError';
import APIFeatures from '../utils/APIFeatures';
import { CreateDocDto, UpdateDocDto } from '../dtos/doc.dto';
import { Doc } from '../models/sharedProps';
import slugify from 'slugify';

export default class {
  protected constructor() {}

  private _filterKeys(
    obj: any,
    keys: Map<number, Set<string>>,
    filterValsIdx: number
  ): void {
    Object.keys(obj).forEach(el => {
      if (!keys.get(filterValsIdx)?.has(el)) delete obj[el];
      else if (obj[el] === undefined || obj[el] === null) delete obj[el];
    });
  }

  public _validateMiddlewareDto(
    DtoClass: any,
    keys: Map<number, Set<string>>,
    filterValsIdx: number
  ) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const output: any = plainToClass(DtoClass, req.body);
        const errors = await validate(output, {
          skipMissingProperties: true,
          forbidUnknownValues: true,
        });

        let errorTxt: Array<any> = Array();
        if (errors.length > 0) {
          for (const err of errors) errorTxt = errorTxt.concat(err.constraints);
          res.status(400).json({ status: 'fail', errors: errorTxt });
          // TODO personalise AppError for this. return next(new AppError(String(errorTxt), 400));
        } else {
          this._filterKeys(output as object, keys, filterValsIdx);
          req.dto = output;
          next();
        }
      } catch (err) {
        console.error(err);
      }
    };
  }

  public _initializeFilterFieldValues(
    m: Map<number, Set<string>>,
    ...args: Array<Array<string>>
  ): void {
    args.forEach((arg, i) => {
      m.set(i, new Set(arg));
    });
  }

  protected _getAll(Model: Model<any>) {
    return CatchAsyncFn(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        const features = new APIFeatures(Model.find(), req.query)
          .filter()
          .sort()
          .limitFields()
          .paginate();

        const docs: Array<Doc> = await features.query;
        sendJson(res, 200, 'success', docs, true);
      }
    );
  }

  protected _createOne(Model: Model<any>) {
    return CatchAsyncFn(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        const dto: CreateDocDto = req.dto;
        const doc = await Model.create(dto);
        sendJson(res, 200, 'success', doc);
      }
    );
  }

  protected _getOneBySlug(Model: Model<any>, docType: string) {
    return CatchAsyncFn(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        const doc: Doc = await Model.findOne({
          slug: req.params.id,
        });

        if (!doc) return next(new AppError(`No ${docType} found`, 404));

        req.doc = doc;
        next();
      }
    );
  }

  protected _getOne() {
    return CatchAsyncFn(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        sendJson(res, 200, 'success', req.doc);
      }
    );
  }

  protected _updateOne(Model: Model<any>, docType: string) {
    return CatchAsyncFn(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        const dto: UpdateDocDto = req.dto;

        const updatedDto: Doc | null = await Model.findOneAndUpdate(
          {
            slug: req.params.id,
          },
          {
            ...dto,
            slug: dto.name ? slugify(dto.name, { lower: true }) : req.params.id,
          },
          {
            new: true,
            runValidators: true,
          }
        );

        if (!updatedDto) return next(new AppError(`No ${docType} found`, 404));

        sendJson(res, 200, 'success', updatedDto);
      }
    );
  }

  protected _removeOne(Model: Model<any>, docType: string) {
    return CatchAsyncFn(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        const doc: Doc | null = await Model.findOneAndRemove({
          slug: req.params.id,
        });
        if (!doc) return next(new AppError(`No ${docType} found`, 404));
        res.status(204).json({ status: 'success', data: null });
      }
    );
  }
}
