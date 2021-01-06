const skills = [
  {
    // ! Warlord
    archetype: '5f9f616c6ff4c0271c0f8885',
    name: 'Hammer Flurry',
    slug: 'hammer-flurry',
    dmgtype: 'physical',
    dps: [],
    range: 3,
    cooldown: 0,
    resource: 15,
    aoe: '3m frontal cone',
    description:
      'You perform a series of strikes with you hammer, damaging foes in front of you',
    type: 'Melee attack',
    usage: 'Melee distance approach → Skill tap (3 skills in combo)',
    details: [
      '1st skill: You inflict 50 physical damage on maximum 5 enemy targets in front of you',
      '2nd skill: You inflict 50 physical damage on maximum 5 enemy targets in front of you',
      '3rd skill: You inflict 2 hits 30 and 100 physical damage and a debuff Slow by 30% for 5 seconds on maximum 5 enemy targets in front of you',
      'The skill can be cast while moving',
    ],
    mechanics: ['5f9f3adcd706d724a4ecc093'],
  },
  {
    archetype: '5f9f616c6ff4c0271c0f8885',
    name: 'Shield Block',
    slug: 'shield-block',
    dmgtype: 'physical',
    dps: [190],
    range: 0,
    cooldown: 0.5,
    resource: -10,
    aoe: 'character',
    description: 'You cover yourself using shield to block enemy attacks',
    type: 'Buff / Melee attack',
    usage:
      'Block: Skill hold (moment of enemy attack) Shield Counter: (Successful block) C key tap',
    details: [
      'Each successful block additionally consumes 10 willpower (willpower is consumed only once per 0.2 seconds)',
      'While blocking you are inflicted with a negative effect, decreasing your movement speed by 50%',
      'While blocking you are granted with an effect, decreasing incoming damage by 20% additionally to the main blocking effect',
      'While blocking you are granted with an effect, giving immunity to any negative mechanics like debuffs or any crowd control mechanics',
      'Upon successful block you can perform an additional skill Shield Counter within 5 seconds (skill cooldown 8 seconds)',
      'Shield Counter: you inflict 228 physical damage and debuff Stun for 2.5 seconds on maximum 5 enemy targets in front of you',
      'Upon inflicting damage with Shield Counter you restore 100 willpower',
    ],
    mechanics: [],
  },
  {
    archetype: '5f9f616c6ff4c0271c0f8885',
    name: 'Whirlwind',
    slug: 'whirlwind',
    dmgtype: 'physical',
    dps: [271],
    range: 4,
    cooldown: 10,
    resource: -135,
    aoe: '3m radius around the caster',
    description:
      'You perform a whirl attack, damaging foes around you with your hammer',
    type: 'Melee attack',
    usage: 'Melee distance approach → Skill tap',
    details: [
      'You inflict 95 physical damage for each 0.35 seconds for 3.5 seconds on maximum 7 enemy targets in radius',
      'While casting you are granted with an effect, giving immunity to control mechanics Knockback, Stagger and Tether',
    ],
    mechanics: ['5f9f3f2cd337f509b0b44dec'],
  },
  {
    archetype: '5f9f616c6ff4c0271c0f8885',
    name: 'Stomp',
    slug: 'stomp',
    dmgtype: 'physical',
    dps: [82],
    range: 6,
    cooldown: 21,
    resource: 100,
    aoe: '2m radius around the caster',
    description:
      'You stomp the ground with your feet, damaging and pulling enemies around you',
    type: 'Melee attack',
    usage: 'Melee distance approach → Skill tap',
    details: [
      'You inflict 74 physical damage, a debuff Concussion for 5 seconds and a control Tether on maximum 7 enemy targets in the radius',
      'Concussion: incoming physical damage is increased by 40%. Upon hit the debuff is removed',
      'While casting you are granted with an effect, giving immunity to control mechanics Knockback, Stagger and Tether',
    ],
    mechanics: ['5f9f3bbbaeed841f349dacee', '5f9f3ed29b092903302dbb8f'],
  },
  {
    archetype: '5f9f616c6ff4c0271c0f8885',
    name: 'Battering Shield',
    slug: 'stomp',
    dmgtype: 'physical',
    dps: [164, 164, 164],
    range: 3,
    cooldown: 8,
    resource: -60,
    aoe: '3x4m',
    description: 'You perform a series of shield strikes',
    type: 'Melee attack',
    usage: 'Melee distance approach → Skill tap (3 skills in combo)',
    details: [
      'The skill is represented by a series of consecutive shield strikes',
      '1st skill: You strike using your shield, inflicting 66 physical damage and control Stagger on maximum 5 enemy target within 3m range ahead',
      '2nd skill: You strike using your shield, inflicting 82 physical damage and control Stagger on maximum 5 enemy target within 3m range ahead',
      '3rd skill: You strike using your shield, inflicting 164 physical damage and control Knockdown on maximum 5 enemy target within 6m range ahead',
      'The skill ignores mechanics such as Dodge, Block, Invulnerability (though does not ignore effect Shield)',
    ],
    mechanics: ['5f9f3ebf9b092903302dbb8c'],
  },
  {
    archetype: '5f9f616c6ff4c0271c0f8885',
    name: 'Shield Slam',
    slug: 'stomp',
    dmgtype: 'physical',
    dps: [130, -230],
    range: 6,
    cooldown: 15,
    resource: -60,
    aoe: '4x6m',
    description:
      'You slam your shield to the ground, creating ground explosions in front of you',
    type: 'Melee attack',
    usage: 'Melee distance approach → Skill tap',
    details: [
      'You perform a ground slam using your shield, creating two explosions, each inflicting 173 physical damage and control Airborne on maximum 7 enemy targets within maximum 6m range of the character',
      'If enemy is standing in the area of explosions overlapping they suffer both explosion hits',
      'While casting you are granted with an effect, giving immunity to control mechanics Knockback, Stagger and Tether',
    ],
    mechanics: ['5f9f3eb39b092903302dbb8b'],
  },
  {
    archetype: '5f9f616c6ff4c0271c0f8885',
    name: 'Shield Charge',
    slug: 'stomp',
    dmgtype: 'physical',
    dps: [48],
    range: 12,
    cooldown: 12,
    resource: 100,
    aoe: '1m radius around the target',
    description:
      'You perform a charge to a designated target, attacking them with your shield',
    type: 'Melee attack',
    usage: 'Crosshair aiming → Aim maintaining → Skill tap',
    details: [
      'You perform a charge with your shield, inflicting 43 physical damage and debuff Stun for 1 second on maximum 3 enemies within 1m radius around the skill target',
      'The skill cannot be used while in states of mechanics, preventing character movement',
      'The character is granted with an effect, giving immunity to mechanics of character control while casting the skill',
    ],
    mechanics: ['5f9f3575bac32b2e006a65d6', '5f9f3affd706d724a4ecc097'],
  },
  {
    archetype: '5f9f616c6ff4c0271c0f8885',
    name: 'Leap Slam',
    slug: 'stomp',
    dmgtype: 'physical',
    dps: [146],
    range: 21,
    cooldown: 18,
    resource: -60,
    aoe: '4m radius',
    description: 'You perform a leap, slamming the ground with your hammer',
    type: 'AOE attack',
    usage: 'Skill tap → Area designation → Skill tap (or LMB tap)',
    details: [
      'You perform a leap to a designated area, inflicting 176 physical damage and debuff Stun for 3 seconds on maximum 7 enemy targets within radius',
      'The skill cannot be used while in states of mechanics, preventing character movement',
      'The character is granted with an effect, giving immunity to mechanics of character immobility while casting the skill',
    ],
    mechanics: ['5f9f3affd706d724a4ecc097'],
  },
  {
    archetype: '5f9f616c6ff4c0271c0f8885',
    name: 'Earth Splitter',
    slug: 'stomp',
    dmgtype: 'fire',
    dps: [220],
    range: 18,
    cooldown: 18,
    resource: -60,
    aoe: '1x18m',
    description:
      'You launch a fire wave with your hammer on enemies in front of you',
    type: 'Piercing Projectile',
    usage: 'Crosshair aiming → Skill tap',
    details: [
      'You launch a fire wave that flies through, inflicting 296 fire magic damage on maximum 7 enemy targets on its path',
      'The skill has 100% critical hit chance so it always deals critical damage',
    ],
    mechanics: [],
  },
];
export default skills;
