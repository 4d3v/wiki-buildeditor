import Sephirot from '../models/Sephirot';
import Base from './Base';

export class SephirotController extends Base {
  public readonly getSephirots = this._getAll(Sephirot);
  public readonly createSephirot = this._createOne(Sephirot);
  public readonly getSephirotBySlug = this._getOneBySlug(Sephirot, 'sephirot');
  public readonly getSephirot = this._getOne();
  public readonly updateSephirot = this._updateOne(Sephirot, 'sephirot');
  public readonly removeSephirot = this._removeOne(Sephirot, 'sephirot');

  constructor() {
    super();
  }
}
