import { Request, Response, NextFunction } from 'express';
import Base from './Base';
import Archetype, { IArchetype } from '../models/Archetype';
import { CatchAsync } from '../utils/catchAsync';
import AppError from '../utils/AppError';
import {
  CreateArchetypeDto,
  UpdateArchetypeDto,
} from '../dtos/archetypes.dtos';
import sendJson from './sendJson';
import slugify from 'slugify';

export class ArchetypeController extends Base {
  constructor() {
    super();
  }

  @CatchAsync()
  public async getArchetypes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const archetypes: Array<IArchetype> = await Archetype.find();
    sendJson(res, 200, 'success', archetypes, true);
  }

  @CatchAsync()
  public async getArchetypeById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const archetype: IArchetype | null = await Archetype.findById(
      req.params.id
    );

    if (!archetype)
      return next(
        new AppError(`No Archetype found with id: ${req.params.id}`, 404)
      );

    req.archetype = archetype;
    next();
  }

  @CatchAsync()
  public async getArchetypeBySlug(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const archetype: IArchetype | null = await Archetype.findOne({
      slug: req.params.id,
    });

    if (!archetype) return next(new AppError('No Archetype found', 404));

    req.archetype = archetype;
    next();
  }

  @CatchAsync()
  public async getArchetype(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    sendJson(res, 200, 'success', req.archetype);
  }

  @CatchAsync()
  public async createArchetype(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const createArchetypeDto: CreateArchetypeDto = req.dto;
    const archetype: IArchetype = await Archetype.create(createArchetypeDto);
    sendJson(res, 201, 'success', archetype);
  }

  @CatchAsync()
  public async updateArchetype(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const updateArchetypeDto: UpdateArchetypeDto = req.dto;
    const updatedArchetype: IArchetype | null = await Archetype.findOneAndUpdate(
      { slug: req.params.id },
      {
        ...updateArchetypeDto,
        slug: updateArchetypeDto.name
          ? slugify(updateArchetypeDto.name, { lower: true })
          : req.params.id,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedArchetype)
      return next(new AppError('No archetype found with that ID', 404));

    sendJson(res, 200, 'success', updatedArchetype);
  }

  @CatchAsync()
  public async deleteArchetype(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const archetype: IArchetype | null = await Archetype.findByIdAndDelete(
      req.params.id
    );

    if (!archetype)
      return next(new AppError('No archetype found with that ID', 404));

    res.status(204).json({ status: 'success', data: null });
  }
}
