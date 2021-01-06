import { NextFunction, Request, Response } from 'express';
import Skills, { ISkills } from '../models/Skills';
import sendJson from './sendJson';
import AppError from '../utils/AppError';
import { CatchAsync } from '../utils/catchAsync';
import Base from './Base';
import { CreateSkillDto, UpdateSkillDto } from '../dtos/skills.dto';
import CreateArtifactDto from '../dtos/artifacts.dtos';
import { IArtifact } from '../models/Artifact';
import slugify from 'slugify';

export class SkillsController extends Base {
  public readonly getSkills = this._getAll(Skills);

  constructor() {
    super();
  }

  @CatchAsync()
  public async createSkill(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const newSkill: CreateSkillDto = req.dto;
    const skill: ISkills = await Skills.create(newSkill);
    sendJson(res, 200, 'success', skill);
  }

  @CatchAsync()
  public async getSkillBySlug(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const skill: ISkills | null = await Skills.findOne({ slug: req.params.id });
    if (!skill) return next(new AppError(`No Skill found!`, 404));
    req.skill = skill;
    next();
  }

  @CatchAsync()
  public async getSkill(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    sendJson(res, 200, 'success', req.skill);
  }

  @CatchAsync()
  public async updateSkill(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const updateSkillDto: UpdateSkillDto = req.dto;
    const skill: ISkills | null = await Skills.findOneAndUpdate(
      { slug: req.params.id },
      {
        ...updateSkillDto,
        slug: updateSkillDto.name
          ? slugify(updateSkillDto.name, { lower: true })
          : req.params.id,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!skill) return next(new AppError('No skill found', 404));

    sendJson(res, 200, 'success', skill);
  }

  @CatchAsync()
  public async removeSkill(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const skill: ISkills | null = await Skills.findOneAndRemove({
      slug: req.params.id,
    });

    if (!skill) return next(new AppError('No skill found', 404));

    res.status(204).json({ status: 'success', data: null });
  }

  @CatchAsync()
  public async getArtifactsForSkill(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const skill: ISkills = req.skill;
    sendJson(res, 200, 'success', skill.artifacts, true);
  }

  @CatchAsync()
  public async createArtifactForSkill(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const skill: ISkills = req.skill,
      createArtifactDto: CreateArtifactDto = req.dto;

    skill.artifacts.push(createArtifactDto);
    await skill.save({ validateBeforeSave: true });

    sendJson(res, 200, 'success', skill.artifacts);
  }

  @CatchAsync()
  public async getArtifactForSkill(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const skill: ISkills = req.skill;
    if (!skill.artifacts.length)
      return next(
        new AppError('This skill does not contain any artifacts', 404)
      );

    const artifact: IArtifact = skill.artifacts.find(
      art => art.slug === req.params.artifactId
    );
    if (!artifact)
      return next(new AppError('No artifact found for that skill', 404));

    sendJson(res, 200, 'success', artifact);
  }

  @CatchAsync()
  public async deleteArtifactForSkill(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const skill: ISkills = req.skill,
      artSize = skill.artifacts.length;
    if (!artSize)
      return next(
        new AppError('This skill does not contain any artifacts', 404)
      );

    skill.artifacts = skill.artifacts.filter(
      art => art.slug !== req.params.artifactId
    );

    if (artSize === skill.artifacts.length)
      return next(new AppError('No artifact found for that skill', 404));

    await skill.save();
    sendJson(res, 200, 'success', skill, true);
  }
  @CatchAsync()
  public async updateArtifactForSkill(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const skill: ISkills = req.skill,
      createArtifactDto: CreateArtifactDto = req.dto,
      artSize = skill.artifacts.length;
    if (!artSize)
      return next(
        new AppError('This skill does not contain any artifacts', 404)
      );

    const artIdx = skill.artifacts.findIndex(
      art => art.slug === req.params.artifactId
    );
    if (artIdx === -1)
      return next(new AppError('No artifact found for that skill', 404));

    skill.artifacts[artIdx] = createArtifactDto;
    await skill.save();

    sendJson(res, 200, 'success', skill, true);
  }
}
