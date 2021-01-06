import { IArchetype } from './Archetype';
import { IMechanic } from './Mechanic';
import { IRunestone } from './Runestone';
import { IRunetrait } from './Runetrait';
import { ISephirot } from './Sephirot';
import { ISkills } from './Skills';

export enum DmgType {
  PHYSICAL = 'physical',
  FIRE = 'fire',
  COLD = 'cold',
  LIGHTNING = 'lightning',
  NATURE = 'nature',
  LIGHT = 'light',
  DARKNESS = 'darkness',
}

export enum RunestoneTraitGroup {
  ONSLAUGHT = 'onslaught',
  CONTROL = 'control',
  DESTINY = 'destiny',
  SUPPORT = 'support',
  DEFENSE = 'defense',
  AWAKENING = 'awakening',
  VOID = 'void',
}

export type Doc =
  | IArchetype
  | ISkills
  | IMechanic
  | IRunestone
  | IRunetrait
  | ISephirot;
