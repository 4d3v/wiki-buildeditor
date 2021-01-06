import mongoose, { Schema, Document } from 'mongoose';
import slugify from 'slugify';
import { RunestoneTraitGroup } from './sharedProps';

export interface IRunetrait extends Document {
  beid: string;
  group: RunestoneTraitGroup;
  name: string;
  description: string;
  categoryTier: number;
  slug: string;
}

export const RunetraitSchema: Schema = new Schema({
  beid: {
    type: String,
    required: [true, 'An archetype must have an beid'],
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
      ],
      message:
        'Runestone group must be either: onslaught, control, destiny, support, defense or awakening',
    },
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryTier: {
    type: Number,
    required: true,
  },
  slug: String,
  mechanics: [{ type: Schema.Types.ObjectId, ref: 'Mechanic' }],
});

RunetraitSchema.pre<IRunetrait>(/^find/, function (next) {
  this.populate({
    path: 'mechanics',
    select: '-__v',
  });
  next();
});

RunetraitSchema.pre<IRunetrait>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

export default mongoose.model<IRunetrait>('Runetrait', RunetraitSchema);
