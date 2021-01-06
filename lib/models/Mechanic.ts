import mongoose, { Schema, Document } from 'mongoose';
import slugify from 'slugify';

export enum MechanicType {
  BUFF = 'buff',
  DEBUFF = 'debuff',
  CONTROL = 'control',
  EFFECT = 'effect',
}

export enum MechanicProperty {
  // Buffs
  MOVEMENT_SPEED_INCREASE = 'movement speed increase',
  DAMAGE_INCREASE = 'damage increase',
  ATTACK_SPEED_INCREASE = 'attack speed increase',
  INCREASE_HP_POOL = 'increase hp pool',
  INCREASE_CRITICAL_CHANCE = 'increase critical chance',
  FRENZY = 'frenzy',
  SHIELD = 'shield',
  IMMUNITY_TO_DMG = 'immunity to dmg',
  CLEANSE = 'cleanse',

  // Debuffs
  SLOW = 'slow',
  ELECTROCUTE = 'electrocute',
  FREEZING = 'freezing',
  SLEEP = 'sleep',
  STUN = 'stun',
  GLACIATION = 'glaciation',
  ROOT = 'root',
  CONCUSSION = 'concussion',
  ARMOR_CRACK = 'armor crack',
  DAMAGE_PER_SECOND = 'damage per second',
  TAUNT = 'taunt',
  INCREASE_INCOMING_DMG = 'increase incoming dmg',
  FEAR = 'fear',

  // Controls
  STAGGER = 'stagger',
  AIRBORNE = 'airborne',
  KNOCKDOWN = 'knockdown',
  KNOCKBACK = 'knockback',
  PULL = 'pull',
  TETHER = 'tether',

  // Effects
  BLESSING_OF_THE_FIRE = 'blessing of the fire',
  INVISIBILITY = 'invisibility',
  DODGE = 'dodge',
  DAMAGE_DECREASE = 'damage decrease',
  IMMUNITY_TO_KST = 'immunity to kst',
  BLOCK = 'block',
  IMMUNITY_TO_DEBUFF_CC = 'immunity to debuff cc',
  BERSERK = 'berserk',
  DAMAGE_TO_HP = 'damage to hp',
  LIFE_STEAL = 'life steal',
  INVULNERABILITY = 'invulnerability',
  SACRED_SHIELD = 'sacred shield',
}

export interface IMechanic extends Document {
  type: MechanicType;
  typeDescription: string;
  property: MechanicProperty;
  propertyDescription: string;
  slug: string;
}

const MechanicSchema: Schema = new Schema({
  type: {
    type: String,
    required: [true, 'A mechanic must have a mechanic type'],
    enum: {
      values: ['buff', 'debuff', 'control', 'effect'],
      message: 'Mechanic type must be either: buff, debuff, control or effect',
    },
  },
  typeDescription: String,
  property: {
    type: String,
    required: [true, 'A mechanic must have a property'],
    enum: {
      values: [
        'movement speed increase',
        'damage increase',
        'attack speed increase',
        'increase hp pool',
        'increase critical chance',
        'frenzy',
        'shield',
        'immunity to dmg',
        'cleanse',
        'slow',
        'electrocute',
        'freezing',
        'sleep',
        'stun',
        'glaciation',
        'root',
        'concussion',
        'armor crack',
        'damage per second',
        'taunt',
        'increase incoming dmg',
        'fear',
        'stagger',
        'airborne',
        'knockdown',
        'knockback',
        'pull',
        'tether',
        'blessing of the fire',
        'invisibility',
        'dodge',
        'damage decrease',
        'immunity to kst',
        'block',
        'immunity to debuff cc',
        'berserk',
        'damage to hp',
        'life steal',
        'invulnerability',
        'sacred shield',
      ],
      // message: `Mechanic property must be either: `,
    },
  },
  propertyDescription: String,
  slug: { type: String, unique: true },
});

MechanicSchema.pre<IMechanic>('save', function (next) {
  this.slug = slugify(this.property, { lower: true });
  next();
});

export default mongoose.model<IMechanic>('Mechanic', MechanicSchema);
