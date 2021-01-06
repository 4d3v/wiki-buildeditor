import { NextFunction, Request, Response } from 'express';
import slugify from 'slugify';
import { CreateMechanicDto, UpdateMechanicDto } from '../dtos/mechanics.dtos';
import Mechanic, { IMechanic } from '../models/Mechanic';
import AppError from '../utils/AppError';
import { CatchAsync } from '../utils/catchAsync';
import Base from './Base';
import sendJson from './sendJson';

export class MechanicController extends Base {
  constructor() {
    super();
  }

  @CatchAsync()
  public async createMechanic(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const createMechanicDto: CreateMechanicDto = req.dto;
    const mechanic: IMechanic = await Mechanic.create(createMechanicDto);
    sendJson(res, 201, 'success', mechanic);
  }

  @CatchAsync()
  public async getMechanics(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const mechanics: Array<IMechanic> = await Mechanic.find();
    sendJson(res, 200, 'success', mechanics, true);
  }

  @CatchAsync()
  public async getMechanicBySlug(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const mechanic: IMechanic | null = await Mechanic.findOne({
      slug: req.params.id,
    });
    if (!mechanic) return next(new AppError('No mechanic found', 404));
    req.mechanic = mechanic;
    next();
  }

  @CatchAsync()
  public async getMechanic(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    sendJson(res, 200, 'success', req.mechanic);
  }

  @CatchAsync()
  public async updateMechanic(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const updateMechanicDto: UpdateMechanicDto = req.dto;

    const updatedMechanic: IMechanic | null = await Mechanic.findOneAndUpdate(
      {
        slug: req.params.id,
      },
      {
        ...updateMechanicDto,
        slug: updateMechanicDto.property
          ? slugify(updateMechanicDto.property, { lower: true })
          : req.params.id,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedMechanic) return next(new AppError('No mechanic found', 404));

    sendJson(res, 200, 'success', updatedMechanic);
  }

  @CatchAsync()
  public async removeMechanic(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const mechanic: IMechanic | null = await Mechanic.findOneAndRemove({
      slug: req.params.id,
    });

    if (!mechanic) return next(new AppError('No mechanic found', 404));

    res.status(204).json({ status: 'success', data: null });
  }
}
