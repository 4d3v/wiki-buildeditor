import mongoose, { Document, Schema } from 'mongoose';
import slugify from 'slugify';
import { ISkills } from './Skills';

export enum Role {
  TANK = 'tank',
  DPS = 'dps',
  SUPPORT = 'support',
}

export interface IArchetype extends Document {
  beid: string;
  name: string;
  slug: string;
  description: string;
  role: Role;
  skills: ISkills['_id'];
}

const ArchetypeSchema: Schema = new Schema({
  beid: {
    type: String,
    required: [true, 'An archetype must have a beid'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'An archetype must have a name'],
    unique: true,
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'An archetype must have a description'],
  },
  role: {
    type: String,
    required: [true, 'An archetype must have a role'],
    enum: {
      values: ['tank', 'dps', 'support'],
      message: 'Role must be either: tank, dps or support',
    },
  },
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skills' }],
});

ArchetypeSchema.pre<IArchetype>('findOne', function (next) {
  this.populate({
    path: 'skills',
    select:
      'name slug dps cooldown resource range description dmgtype mechanics',
  });
  next();
});

ArchetypeSchema.pre<IArchetype>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

export default mongoose.model<IArchetype>('Archetype', ArchetypeSchema);
