export default [
  {
    type: 'buff',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'movement speed increase',
    propertyDescription:
      'Increases movement speed, percentage varies depending on the particular skill',
  },
  {
    type: 'buff',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'damage increase',
    propertyDescription:
      'Increases attack damage, percentage varies depending on the particular skill',
  },
  {
    type: 'buff',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'attack speed increase',
    propertyDescription:
      'Increases attack speed, percentage varies depending on the particular skill',
  },
  {
    type: 'buff',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'increase hp',
    propertyDescription: 'Increases the maximum hp pool for a limited time',
  },
  {
    type: 'buff',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'shield',
    propertyDescription: 'grants shield (extra hp) on top of current hp',
  },
  {
    type: 'buff',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'immunity to dmg',
    propertyDescription: 'grants immunity to all damage for a certain time',
  },
  {
    type: 'buff',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'cleanse',
    propertyDescription:
      'cleanse all debuffs and grants magic damage immunity for certain time',
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'slow',
    propertyDescription:
      'Reduces movement speed, percentage varies depending on the particular skill',
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'electrocute',
    propertyDescription: 'Additional lightning damage with attacks',
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'freezing',
    propertyDescription: 'Cannot move or rotate the character',
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'sleep',
    propertyDescription:
      "Forbids foe's action. Debuff is removed prematurely if affected user receives damage",
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'stun',
    propertyDescription:
      "Forbids foe's action and prevents them from using skills",
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'glaciation',
    propertyDescription:
      'Glaciation: cannot perform any action. Targets with the debuff take 20% increased damage from skills with a type of damage [lightning]',
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'root',
    propertyDescription:
      'Immobilizes and prevents from moving or rotating the charater',
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'concussion',
    propertyDescription:
      'Incoming physical damage increase. Upon hit debuff is removed',
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'armor crack',
    propertyDescription:
      'Incoming physical damage is increased by 10% (maximum 3 stacks)',
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'damage per second',
    propertyDescription:
      'Inflicts periodically a certain type of damage to foe e.g bleeding',
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'taunt',
    propertyDescription:
      'Forces affected foes to run towards and auto-attack the source of the taunt',
  },
  {
    type: 'debuff',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets with limited time',
    property: 'increase incoming damage',
    propertyDescription:
      'Target affected by this debuff receives increased incoming damage',
  },
  {
    type: 'control',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets for the purpose of interfering with their line of actions',
    property: 'stagger',
    propertyDescription: 'Interrupts the target',
  },
  {
    type: 'control',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets for the purpose of interfering with their line of actions',
    property: 'airborne',
    propertyDescription: 'launch target into the air',
  },
  {
    type: 'control',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets for the purpose of interfering with their line of actions',
    property: 'knockdown',
    propertyDescription: 'Target is knocked on the ground',
  },
  {
    type: 'control',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets for the purpose of interfering with their line of actions',
    property: 'knockback',
    propertyDescription: 'Target is pushed away',
  },
  {
    type: 'control',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets for the purpose of interfering with their line of actions',
    property: 'pull',
    propertyDescription:
      'Interrupts and pulls the target and towards the caster',
  },
  {
    type: 'control',
    typeDescription:
      'Adverse impact, inflicted on target or group of targets for the purpose of interfering with their line of actions',
    property: 'tether',
    propertyDescription: 'Drags the target towards the caster',
  },
  {
    type: 'effect',
    typeDescription:
      'Beneficial impact acquired by the character and/or their allies during the skillcast',
    property: 'invisibility',
    propertyDescription: 'Makes your character invisible from enemies',
  },
  {
    type: 'effect',
    typeDescription:
      'Beneficial impact acquired by the character and/or their allies during the skillcast',
    property: 'dodge',
    propertyDescription:
      'Character receives dodge effect negating all incoming damage',
  },
  {
    type: 'effect',
    typeDescription:
      'Beneficial impact acquired by the character and/or their allies during the skillcast',
    property: 'damage decrease',
    propertyDescription:
      'Reduces incoming damage, percentage varies depending on the particular skill',
  },
  {
    type: 'effect',
    typeDescription:
      'Beneficial impact acquired by the character and/or their allies during the skillcast',
    property: 'immunity to kst',
    propertyDescription: 'Grants immunity to knockback, stagger, tether',
  },
  {
    type: 'effect',
    typeDescription:
      'Beneficial impact acquired by the character and/or their allies during the skillcast',
    property: 'block',
    propertyDescription: '...',
  },
  {
    type: 'effect',
    typeDescription:
      'Beneficial impact acquired by the character and/or their allies during the skillcast',
    property: 'immunity to debuff and cc',
    propertyDescription:
      'Grants immunity to any negative mechanics like debuffs or any crowd control mechanics',
  },
  {
    type: 'effect',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'berserk',
    propertyDescription:
      'Grants stacks that increases movement and attack speed, percentage varies depending on the particular skill',
  },
  {
    type: 'effect',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'damage proportional to hp',
    propertyDescription:
      'The lower the amount of hp enemy has left the higher damage the skill does, (up to 500% but might depend on skill)',
  },
  {
    type: 'effect',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'life steal',
    propertyDescription: 'does damage to a foe and heals the caster',
  },
  {
    type: 'effect',
    typeDescription:
      'Beneficial impact acquired by character and/or allies with limited time',
    property: 'sacred shield',
    propertyDescription:
      'Output damage, movement speed and attack speed is increased. Immunity to state control mechanics',
  },
];
