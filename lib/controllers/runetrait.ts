import { NextFunction, Request, Response } from 'express';
import Runetrait, { IRunetrait } from '../models/Runetrait';
import {
  CreateRunestraitDto,
  UpdateRunetraitDto,
} from '../dtos/runetrait.dtos';
import { CatchAsync } from '../utils/catchAsync';
import Base from './Base';
import sendJson from './sendJson';
import { runetraitCategoryTiers } from '../constants/filterValues';
import AppError from '../utils/AppError';
import slugify from 'slugify';

export class RunetraitController extends Base {
  constructor() {
    super();
  }

  @CatchAsync()
  public async getRunetraits(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    //
    const runetrait: Array<IRunetrait> = await Runetrait.find();
    sendJson(res, 200, 'success', runetrait, true);
  }

  @CatchAsync()
  public async createRunetrait(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const createRunestraitDto: CreateRunestraitDto = req.dto;
    let isCategoryTierValid: boolean = runetraitCategoryTiers.some(
      el => el === createRunestraitDto.categoryTier
    );
    if (!isCategoryTierValid)
      return next(
        new AppError(
          `Category tier invalid. It must be on of the values ${runetraitCategoryTiers}`,
          400
        )
      );
    const runeTrait: IRunetrait = await Runetrait.create(createRunestraitDto);
    sendJson(res, 200, 'success', runeTrait);
  }

  @CatchAsync()
  public async getRunetraitBySlug(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const runetrait: IRunetrait | null = await Runetrait.findOne({
      slug: req.params.id,
    });
    if (!runetrait) return next(new AppError('No runetrait found', 404));
    req.runetrait = runetrait;
    next();
  }

  @CatchAsync()
  public async getRunetrait(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    sendJson(res, 200, 'success', req.runetrait);
  }

  @CatchAsync()
  public async updateRunetrait(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const updateRunetraitDto: UpdateRunetraitDto = req.dto;

    if (updateRunetraitDto.categoryTier) {
      let isCategoryTierValid: boolean = runetraitCategoryTiers.some(
        el => el === updateRunetraitDto.categoryTier
      );
      if (!isCategoryTierValid)
        return next(
          new AppError(
            `Category tier invalid. It must be on of the values ${runetraitCategoryTiers}`,
            400
          )
        );
    }

    const updatedRunetrait: IRunetrait | null = await Runetrait.findOneAndUpdate(
      {
        slug: req.params.id,
      },
      {
        ...updateRunetraitDto,
        slug: updateRunetraitDto.name
          ? slugify(updateRunetraitDto.name, { lower: true })
          : req.params.id,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedRunetrait) return next(new AppError('No runetrait found', 404));

    sendJson(res, 200, 'success', updatedRunetrait);
  }

  @CatchAsync()
  public async removeRunetrait(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const runetrait: IRunetrait | null = await Runetrait.findOneAndRemove({
      slug: req.params.id,
    });
    if (!runetrait) return next(new AppError('No runetrait found', 404));
    res.status(204).json({ status: 'success', data: null });
  }
}
