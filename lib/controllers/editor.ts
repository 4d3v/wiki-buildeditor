import { NextFunction, Request, Response } from 'express';
import Base from './Base';
import Skills, { ISkills } from '../models/Skills';
import Runestone, { IRunestone } from '../models/Runestone';
import Runetrait, { IRunetrait } from '../models/Runetrait';
import Sephirot, { ISephirot } from '../models/Sephirot';
import { CatchAsync } from '../utils/catchAsync';
// import sendJson from './sendJson';
// import AppError from '../utils/AppError';

export class EditorController extends Base {
  constructor() {
    super();
  }

  @CatchAsync()
  public async getDtForEditor(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const skills: Array<ISkills> = await Skills.find()
      .populate({
        path: 'archetype',
        select: '-__v -skills',
      })
      .populate({
        path: 'mechanics',
        select: '-__v',
      })
      .populate({
        path: 'artifacts.mechanics',
        select: '-__v',
      });

    const runestones: Array<IRunestone> = await Runestone.find();
    const runetraits: Array<IRunetrait> = await Runetrait.find();
    const sephirots: Array<ISephirot> = await Sephirot.find();

    res.status(200).json({
      status: 'success',
      skills,
      runestones,
      runetraits,
      sephirots,
    });
  }
}
