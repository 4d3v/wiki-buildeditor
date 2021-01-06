import { Router } from 'express';
import { AuthController } from '../controllers/auth';
import { SephirotController } from '../controllers/sephirot';
import { sephirotValues } from '../constants/filterValues';
import { CreateSephirotDto, UpdateSephirotDto } from '../dtos/sephirot.dto';
import { UserRole } from '../models/User';

export class SephirotRouter {
  readonly sephirotFilterValsMap: Map<number, Set<string>> = new Map();

  constructor(
    public router = Router(),
    private authController: AuthController = new AuthController(),
    private sephirotController: SephirotController = new SephirotController()
  ) {
    this.initializeRoutes();
    this.sephirotController._initializeFilterFieldValues(
      this.sephirotFilterValsMap,
      sephirotValues
    );
  }

  private initializeRoutes() {
    this.router
      .route('/')
      // .get(this.sephirotController.getSephirots)
      .get(this.sephirotController.getSephirots)
      .post(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.sephirotController._validateMiddlewareDto(
          CreateSephirotDto,
          this.sephirotFilterValsMap,
          0
        ),
        this.sephirotController.createSephirot
      );

    this.router
      .route('/:id')
      .get(
        this.sephirotController.getSephirotBySlug,
        this.sephirotController.getSephirot
      )
      .patch(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.sephirotController._validateMiddlewareDto(
          UpdateSephirotDto,
          this.sephirotFilterValsMap,
          0
        ),
        this.sephirotController.updateSephirot
      )
      .delete(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.sephirotController.removeSephirot
      );
  }
}
