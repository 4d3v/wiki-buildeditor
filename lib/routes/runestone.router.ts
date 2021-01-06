import { Router } from 'express';
import { runestonesValues } from '../constants/filterValues';
import { AuthController } from '../controllers/auth';
import { RunestoneController } from '../controllers/runestone';
import {
  CreateRunestoneDto,
  UpdateRunestoneDto,
} from '../dtos/runestones.dtos';
import { UserRole } from '../models/User';

export class RunestoneRouter {
  readonly runestoneFilterValsMap: Map<number, Set<string>> = new Map();

  constructor(
    public router = Router(),
    private authController: AuthController = new AuthController(),
    private runestoneController: RunestoneController = new RunestoneController()
  ) {
    this.initializeRoutes();
    runestoneController._initializeFilterFieldValues(
      this.runestoneFilterValsMap,
      runestonesValues
    );
  }

  private initializeRoutes() {
    this.router
      .route('/')
      .get(this.runestoneController.getRunestones)
      .post(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.runestoneController._validateMiddlewareDto(
          CreateRunestoneDto,
          this.runestoneFilterValsMap,
          0
        ),
        this.runestoneController.createRunestone
      );

    this.router
      .route('/:id')
      .get(
        this.runestoneController.getRunestoneBySlug,
        this.runestoneController.getRunestone
      )
      .patch(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.runestoneController._validateMiddlewareDto(
          UpdateRunestoneDto,
          this.runestoneFilterValsMap,
          0
        ),
        this.runestoneController.updateRunestone
      )
      .delete(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.runestoneController.getRunestoneBySlug,
        this.runestoneController.removeRunestone
      );
  }
}
