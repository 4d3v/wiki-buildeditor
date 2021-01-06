export const signupUserValues: Array<string> = [
  'name',
  'email',
  'password',
  'passwordConfirm',
];

export const loginUserValues: Array<string> = ['email', 'password'];
export const forgotPassValues: Array<string> = ['email'];
export const resetPassValues: Array<string> = ['password', 'passwordConfirm'];
export const updatePassValues: Array<string> = [
  'passwordCurrent',
  'password',
  'passwordConfirm',
];

export const reportBugValues: Array<string> = [
  'name',
  'email',
  'errorType',
  'message',
  'buildEditorLink',
];

export const skillValues: Array<string> = [
  'beid',
  'name',
  'dmgtype',
  'dps',
  'range',
  'cooldown',
  'resource',
  'aoe',
  'description',
  'type',
  'usage',
  'details',
  'archetype',
  'mechanics',
];

export const artifactValues: Array<string> = [
  'name',
  'dmgtype',
  'grade',
  'artifactPower',
  'details',
  'mechanics',
];

export const archetypeValues: Array<string> = [
  'beid',
  'name',
  'description',
  'role',
  'skills',
];

export const mechanicValues: Array<string> = [
  'type',
  'typeDescription',
  'property',
  'propertyDescription',
];

export const runestonesValues: Array<string> = [
  'beid',
  'group',
  'description',
  'tier',
  'stats',
];

export const runetraitValues: Array<string> = [
  'beid',
  'group',
  'name',
  'description',
  'categoryTier',
  'mechanics',
];

export const runetraitCategoryTiers: Array<number> = [4, 8, 16, 28, 44, 64];

export const sephirotValues: Array<string> = [
  'beid',
  'branch',
  'sephType',
  'name',
  'details',
  'talentPoints',
  'edges',
];
