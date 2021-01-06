import { Schema, Document } from 'mongoose';
import slugify from 'slugify';
import { DmgType } from './sharedProps';

export enum Grade {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  HEROIC = 'heroic',
  MYTHIC = 'mythic',
}

export interface IArtifact extends Document {
  name: string;
  slug: string;
  dmgtype: DmgType;
  grade: Grade;
  artifactPower: number;
  details: Array<string>;
}

export const ArtifactsSchema: Schema = new Schema({
  name: { type: String, required: [true, 'An artifact must have a name'] },
  slug: String,
  dmgtype: {
    type: String,
    required: [true, 'An archetype must have a role'],
    enum: {
      values: [
        'physical',
        'fire',
        'cold',
        'lightning',
        'nature',
        'light',
        'darkness',
      ],
      message:
        'Damage type must be either: physical, fire, cold, lightning, nature, light, darkness',
    },
  },
  grade: {
    type: String,
    required: [true, 'An artifact must have a grade'],
    enum: {
      values: ['common', 'uncommon', 'rare', 'heroic', 'mythic'],
      message: 'Grade must be either: common, uncommon, rare, heroic or mythic',
    },
  },
  artifactPower: {
    type: Number,
    required: [true, 'An artifact must have an artifactPower'],
  },
  details: { type: [String] },
  mechanics: [{ type: Schema.Types.ObjectId, ref: 'Mechanic' }],
});

ArtifactsSchema.pre<IArtifact>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
