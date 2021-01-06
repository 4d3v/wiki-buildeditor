import { Router } from 'express';
import { runetraitValues } from '../constants/filterValues';
import { AuthController } from '../controllers/auth';
import { RunetraitController } from '../controllers/runetrait';
import {
  CreateRunestraitDto,
  UpdateRunetraitDto,
} from '../dtos/runetrait.dtos';
import { UserRole } from '../models/User';

export class RunetraitRouter {
  readonly runetraitFilterValsMap: Map<number, Set<string>> = new Map();

  constructor(
    public router = Router(),
    private authController: AuthController = new AuthController(),
    private runetraitController: RunetraitController = new RunetraitController()
  ) {
    this.initializeRoutes();
    runetraitController._initializeFilterFieldValues(
      this.runetraitFilterValsMap,
      runetraitValues
    );
  }

  private initializeRoutes() {
    this.router
      .route('/')
      .get(this.runetraitController.getRunetraits)
      .post(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.runetraitController._validateMiddlewareDto(
          CreateRunestraitDto,
          this.runetraitFilterValsMap,
          0
        ),
        this.runetraitController.createRunetrait
      );

    this.router
      .route('/:id')
      .get(
        this.runetraitController.getRunetraitBySlug,
        this.runetraitController.getRunetrait
      )
      .patch(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.runetraitController._validateMiddlewareDto(
          UpdateRunetraitDto,
          this.runetraitFilterValsMap,
          0
        ),
        this.runetraitController.updateRunetrait
      )
      .delete(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.runetraitController.removeRunetrait
      );
  }
}
