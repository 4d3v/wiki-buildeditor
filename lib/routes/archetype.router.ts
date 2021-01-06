import { Router } from 'express';
import { AuthController } from '../controllers/auth';
import { ArchetypeController } from '../controllers/archetype';
import {
  CreateArchetypeDto,
  UpdateArchetypeDto,
} from '../dtos/archetypes.dtos';
import { archetypeValues } from '../constants/filterValues';
import { UserRole } from '../models/User';

export class ArchetypeRouter {
  readonly archFilterValsMap: Map<number, Set<string>> = new Map();

  constructor(
    public router = Router(),
    private authController: AuthController = new AuthController(),
    private archetypeController: ArchetypeController = new ArchetypeController()
  ) {
    this.initializeRoutes();
    this.archetypeController._initializeFilterFieldValues(
      this.archFilterValsMap,
      archetypeValues
    );
  }

  private initializeRoutes() {
    this.router
      .route('/')
      .get(this.archetypeController.getArchetypes)
      .post(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.archetypeController._validateMiddlewareDto(
          CreateArchetypeDto,
          this.archFilterValsMap,
          0
        ),
        this.archetypeController.createArchetype
      );

    this.router
      .route('/:id')
      .get(
        this.archetypeController.getArchetypeBySlug,
        this.archetypeController.getArchetype
      )
      .patch(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.archetypeController._validateMiddlewareDto(
          UpdateArchetypeDto,
          this.archFilterValsMap,
          0
        ),
        this.archetypeController.updateArchetype
      )
      .delete(
        this.authController.protect,
        this.authController.restrictTo(UserRole.OWNER, UserRole.ADMIN),
        this.archetypeController.deleteArchetype
      );
  }
}
