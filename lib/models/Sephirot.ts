import mongoose, { Document, Schema } from 'mongoose';
import slugify from 'slugify';

export enum Branch {
  CHASE = 'chase',
  MIND = 'mind',
  DEXTERITY = 'dexterity',
}

export enum SephType {
  STARTING = 'starting',
  MINOR = 'minor',
  MAJOR = 'major',
  TRANSCENDENT = 'transcendent',
}

export interface ISephirot extends Document {
  beid: string;
  branch: Branch;
  sephType: SephType;
  name: string;
  details: string;
  talentPoints: number;
  slug: string;
}

export const SephirotSchema: Schema = new Schema({
  beid: {
    type: String,
    required: [true, 'A sephirot must have a beid'],
    unique: true,
  },
  branch: {
    type: String,
    required: [true, 'A sephirot talent must belong to a branch'],
    enum: {
      values: ['hunt', 'mind', 'cunning'],
    },
  },
  sephType: {
    type: String,
    required: [true, 'A sephirot talent must have a type'],
    enum: {
      values: ['starting', 'minor', 'major', 'transcendent'],
      message:
        'Sephirot type must be either: starting, minor, major or transcendent',
    },
  },
  name: {
    type: String,
    required: [true, 'A sephirot talent must have a name'],
    unique: true,
    trim: true,
  },
  details: {
    type: String,
    required: [true, 'A sephirot talent must have details'],
    trim: true,
  },
  talentPoints: Number,
  slug: String,
  edges: [{ type: String, unique: true, trim: true }],
});

SephirotSchema.pre<ISephirot>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

export default mongoose.model<ISephirot>('Sephirot', SephirotSchema);
