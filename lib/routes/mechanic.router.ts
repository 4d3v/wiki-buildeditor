import { Router } from 'express';
import { AuthController } from '../controllers/auth';
import { MechanicController } from '../controllers/mechanic';
import { mechanicValues } from '../constants/filterValues';
import { CreateMechanicDto, UpdateMechanicDto } from '../dtos/mechanics.dtos';
import { UserRole } from '../models/User';

export class MechanicRouter {
  readonly mechFilterValsMap: Map<number, Set<string>> = new Map();

  constructor(
    public router = Router(),
    private authController: AuthController = new AuthController(),
    private mechanicController: MechanicController = new MechanicController()
  ) {
    this.initializeRoutes();
    this.mechanicController._initializeFilterFieldValues(
      this.mechFilterValsMap,
      mechanicValues
    );
  }

  private initializeRoutes() {
    this.router
      .route('/')
      .get(this.mechanicController.getMechanics)
      .post(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.mechanicController._validateMiddlewareDto(
          CreateMechanicDto,
          this.mechFilterValsMap,
          0
        ),
        this.mechanicController.createMechanic
      );

    this.router
      .route('/:id')
      .get(
        this.mechanicController.getMechanicBySlug,
        this.mechanicController.getMechanic
      )
      .patch(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.mechanicController._validateMiddlewareDto(
          UpdateMechanicDto,
          this.mechFilterValsMap,
          0
        ),
        this.mechanicController.updateMechanic
      )
      .delete(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.mechanicController.removeMechanic
      );
  }
}
