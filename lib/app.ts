import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import { UserRouter } from './routes/user.router';
import { ArchetypeRouter } from './routes/archetype.router';
import { SkillsRouter } from './routes/skills.router';
import { MechanicRouter } from './routes/mechanic.router';
import { RunestoneRouter } from './routes/runestone.router';
import { RunetraitRouter } from './routes/runetrait.router';
import { SephirotRouter } from './routes/sephirot.router';
import { EditorRouter } from './routes/editor.router';
import AppError from './utils/AppError';
import GlobalErrorHandler from './controllers/GlobalErrorHandler';
import { IUser } from './models/User';
import { IArchetype } from './models/Archetype';
import { ISkills } from './models/Skills';
import { IMechanic } from './models/Mechanic';
import { IRunestone } from './models/Runestone';
import { IRunetrait } from './models/Runetrait';
// import { ISephirot } from './models/Sephirot';
import { Doc } from './models/sharedProps';

// ! IMPORTANT TODO find how to implement pre middleware for deleting skillIds on
// ! Archetype model when a skill gets deleted
// ! PS needs to delete reference also on Archetype Model "--->automatically<---"
// TODO Check what is Schema.prototype.index() and how to use it properly
// TODO grab and put on an enum all important error codes or maybe on a static base property

dotenv.config({ path: './.env' });

declare global {
  namespace Express {
    interface Request {
      user: IUser;
      archetype: IArchetype;
      skill: ISkills;
      mechanic: IMechanic;
      runestone: IRunestone;
      runetrait: IRunetrait;
      // sephirot: ISephirot;
      doc: Doc;
      dto: any;
    }
  }
}

class App {
  private readonly apiLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes
    max: 1000,
  });

  private readonly websiteEndpoint = 'https://elyondb.net';

  constructor(
    public app: Application = express(),
    private userRouter: UserRouter = new UserRouter(),
    private archetypeRouter: ArchetypeRouter = new ArchetypeRouter(),
    private skillsRouter: SkillsRouter = new SkillsRouter(),
    private mechanicRouter: MechanicRouter = new MechanicRouter(),
    private runestoneRouter: RunestoneRouter = new RunestoneRouter(),
    private runetraitRouter: RunetraitRouter = new RunetraitRouter(),
    private sephirotRouter: SephirotRouter = new SephirotRouter(),
    private editorRouter: EditorRouter = new EditorRouter(),
    private globalErrorHandler: GlobalErrorHandler = new GlobalErrorHandler()
  ) {
    this.config();
    this.initializeRoutes();
  }

  private config(): void {
    if (process.env.NODE_ENV === 'development') this.app.use(cors());
    else this.app.use(cors({ origin: this.websiteEndpoint }));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json({ limit: '100kb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '100kb' }));
    if (process.env.NODE_ENV === 'development')
      this.app.use(express.static('public'));
    this.app.use(hpp());
    this.app.use('/v1', this.apiLimiter);
  }

  private initializeRoutes() {
    this.app.use('/v1/users', this.userRouter.router);
    this.app.use('/v1/archetypes', this.archetypeRouter.router);
    this.app.use('/v1/skills', this.skillsRouter.router);
    this.app.use('/v1/mechanics', this.mechanicRouter.router);
    this.app.use('/v1/runestones', this.runestoneRouter.router);
    this.app.use('/v1/runetraits', this.runetraitRouter.router);
    this.app.use('/v1/sephirots', this.sephirotRouter.router);
    this.app.use('/v1/editor', this.editorRouter.router);
    this.app.get('/', (req: Request, res: Response) =>
      res.status(200).send('ElyonDB API V1')
    );

    this.app.all('*', (req, res, next) =>
      next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
    );
    this.app.use(this.globalErrorHandler.errorHandler);
  }
}

export default new App().app;
