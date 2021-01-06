import mongoose, { Schema, Document } from 'mongoose';
import slugify from 'slugify';
import { RunestoneTraitGroup } from './sharedProps';

export interface IRunestone extends Document {
  beid: string;
  group: RunestoneTraitGroup;
  description: string;
  tier: number;
  stats: {
    health: number;
    artifactPower: number;
    accuracy: number;
    evasion: number;
  };
  slug: string;
}

export const RunestoneSchema: Schema = new Schema(
  {
    beid: {
      type: String,
      required: [true, 'A Runestone must have a beid'],
      unique: true,
    },
    group: {
      type: String,
      required: [true, 'A runestone must have a group'],
      enum: {
        values: [
          'onslaught',
          'control',
          'destiny',
          'support',
          'defense',
          'awakening',
          'void',
        ],
        message:
          'Runestone group must be either: onslaught, control, destiny, support, defense, awakening or void',
      },
    },
    description: {
      type: String,
      required: true,
    },
    tier: {
      type: Number,
      required: [true, 'A runestone must have a tier'],
      min: 1,
      max: 5,
    },
    stats: {
      health: Number,
      artifactPower: Number,
      accuracy: Number,
      evasion: Number,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

RunestoneSchema.virtual('amountOfPoints').get(function (this: {
  tier: number;
}): number {
  return this.tier * 1;
});

RunestoneSchema.pre<IRunestone>('save', function (next) {
  this.slug = slugify(this.group + this.tier, { lower: true });
  next();
});

export default mongoose.model<IRunestone>('Runestone', RunestoneSchema);
