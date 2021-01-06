import { Router } from 'express';
import { EditorController } from '../controllers/editor';

export class EditorRouter {
  readonly filterValsMap: Map<number, Set<string>> = new Map();

  constructor(
    public router = Router(),
    private editorController: EditorController = new EditorController()
  ) {
    this.initializeRoutes();
    this.editorController._initializeFilterFieldValues(this.filterValsMap);
  }

  private initializeRoutes(): void {
    this.router.get('/', this.editorController.getDtForEditor);
  }
}
