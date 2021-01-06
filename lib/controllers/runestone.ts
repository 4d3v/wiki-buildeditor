import { Request, Response, NextFunction } from 'express';
import slugify from 'slugify';
import {
  CreateRunestoneDto,
  UpdateRunestoneDto,
} from '../dtos/runestones.dtos';
import Runestone, { IRunestone } from '../models/Runestone';
import AppError from '../utils/AppError';
import { CatchAsync } from '../utils/catchAsync';
import Base from './Base';
import sendJson from './sendJson';

export class RunestoneController extends Base {
  constructor() {
    super();
  }

  @CatchAsync()
  public async createRunestone(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const createRunestoneDto: CreateRunestoneDto = req.dto;
    const runestone: IRunestone = await Runestone.create(createRunestoneDto);
    sendJson(res, 201, 'success', runestone);
  }

  @CatchAsync()
  public async getRunestones(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const runestones: Array<IRunestone> = await Runestone.find();
    sendJson(res, 200, 'success', runestones, true);
  }
  @CatchAsync()
  public async getRunestoneBySlug(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const runestone: IRunestone | null = await Runestone.findOne({
      slug: req.params.id,
    });

    if (!runestone) return next(new AppError('No runestone found', 404));

    req.runestone = runestone;
    next();
  }

  @CatchAsync()
  public async getRunestone(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    sendJson(res, 200, 'success', req.runestone);
  }

  @CatchAsync()
  public async updateRunestone(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const updateRunestoneDto: UpdateRunestoneDto = req.dto;
    if (
      updateRunestoneDto.group === 'void' &&
      updateRunestoneDto.stats &&
      Object.keys(updateRunestoneDto.stats).length > 2
    )
      return next(new AppError('Void runestones can only have 2 stats', 400));
    if (
      updateRunestoneDto.group !== 'void' &&
      updateRunestoneDto.stats &&
      Object.keys(updateRunestoneDto.stats).length > 1
    )
      return next(new AppError('Void runestones can only have 1 stat', 400));

    const updatedRunestone: IRunestone | null = await Runestone.findOneAndUpdate(
      {
        slug: req.params.id,
      },
      {
        ...updateRunestoneDto,
        slug: slugify(updateRunestoneDto.group + updateRunestoneDto.tier, {
          lower: true,
        }),
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedRunestone) return next(new AppError('No runestone found', 404));

    sendJson(res, 200, 'success', updatedRunestone);
  }

  @CatchAsync()
  public async removeRunestone(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const runestone: IRunestone | null = await Runestone.findOneAndRemove({
      slug: req.params.id,
    });
    if (!runestone) return next(new AppError('No runestone found', 404));
    res.status(204).json({ status: 'success', data: null });
  }
}
