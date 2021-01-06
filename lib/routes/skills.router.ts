import { Router } from 'express';
import { AuthController } from '../controllers/auth';
import { SkillsController } from '../controllers/skills';
import CreateArtifactDto from '../dtos/artifacts.dtos';
import { CreateSkillDto, UpdateSkillDto } from '../dtos/skills.dto';
import { artifactValues, skillValues } from '../constants/filterValues';
import { UserRole } from '../models/User';

export class SkillsRouter {
  readonly filterValsMap: Map<number, Set<string>> = new Map();

  constructor(
    public router = Router({ mergeParams: true }),
    private authController: AuthController = new AuthController(),
    private skillsController: SkillsController = new SkillsController()
  ) {
    this.initializeRoutes();
    this.skillsController._initializeFilterFieldValues(
      this.filterValsMap,
      skillValues,
      artifactValues
    );
  }

  private initializeRoutes(): void {
    this.router
      .route('/')
      .get(this.skillsController.getSkills)
      .post(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.skillsController._validateMiddlewareDto(
          CreateSkillDto,
          this.filterValsMap,
          0
        ),
        this.skillsController.createSkill
      );

    this.router
      .route('/:id')
      .get(this.skillsController.getSkillBySlug, this.skillsController.getSkill)
      .patch(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.skillsController.getSkillBySlug,
        this.skillsController._validateMiddlewareDto(
          UpdateSkillDto,
          this.filterValsMap,
          0
        ),
        this.skillsController.updateSkill
      )
      .delete(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.skillsController.removeSkill
      );

    this.router
      .route('/:id/artifacts')
      .get(
        this.skillsController.getSkillBySlug,
        this.skillsController.getArtifactsForSkill
      )
      .post(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.skillsController.getSkillBySlug,
        this.skillsController._validateMiddlewareDto(
          CreateArtifactDto,
          this.filterValsMap,
          1
        ),
        this.skillsController.createArtifactForSkill
      );

    this.router
      .route('/:id/artifacts/:artifactId')
      .get(
        this.skillsController.getSkillBySlug,
        this.skillsController.getArtifactForSkill
      )
      .patch(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.skillsController.getSkillBySlug,
        this.skillsController._validateMiddlewareDto(
          CreateArtifactDto,
          this.filterValsMap,
          1
        ),
        this.skillsController.updateArtifactForSkill
      )
      .delete(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.skillsController.getSkillBySlug,
        this.skillsController.deleteArtifactForSkill
      );
  }
}
