import mongoose, { Schema, Document } from 'mongoose';
import slugify from 'slugify';
import { IArchetype } from './Archetype';
import { ArtifactsSchema, IArtifact } from './Artifact';
import { IMechanic } from './Mechanic';
import { DmgType } from './sharedProps';

export interface ISkills extends Document {
  beid: string;
  name: string;
  slug: string;
  dmgtype: DmgType;
  dps: Array<number>;
  range: number;
  cooldown: number;
  resource: number;
  aoe: string;
  description: string;
  type: string;
  usage: string;
  details: Array<string>;
  archetype: IArchetype['_id'];
  artifacts: Array<IArtifact['_id']>;
  mechanics: Array<IMechanic['_id']>;
}

export const SkillsSchema: Schema = new Schema({
  beid: {
    type: String,
    required: [true, 'A skill must have a beid'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'A skill must have a name'],
    unique: true,
    trim: true,
  },
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
  dps: { type: [Number], required: true },
  range: { type: Number, required: true },
  cooldown: { type: Number, required: true },
  resource: { type: Number, required: true },
  aoe: { type: String, default: '-' },
  description: { type: String, required: true, trim: true },
  type: { type: String, required: true },
  usage: { type: String, required: true },
  details: { type: [String] },
  archetype: { type: Schema.Types.ObjectId, ref: 'Archetype' },
  artifacts: [ArtifactsSchema],
  mechanics: [{ type: Schema.Types.ObjectId, ref: 'Mechanic' }],
});

// SkillsSchema.pre<ISkills>(/^find/, function (next) {
SkillsSchema.pre<ISkills>('findOne', function (next) {
  this.populate({
    path: 'archetype',
    select: '-__v -skills',
  })
    .populate({
      path: 'mechanics',
      select: '-__v',
    })
    .populate({
      path: 'artifacts.mechanics',
      select: '-__v',
    });
  next();
});

// SkillsSchema.pre<ISkills>('findOneAndRemove', function (next) {
//   this.populate({ path: 'archetype' });
//   this.model('Archetype').update(
//     { skills: this.archetype._id },
//     { $pull: { skills: this.archetype._id } },
//     { multi: true },
//     next
//   );
// });

SkillsSchema.pre<ISkills>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

export default mongoose.model<ISkills>('Skills', SkillsSchema);
