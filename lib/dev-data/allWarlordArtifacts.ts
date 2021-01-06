export default [
  // ! Hammer Flurry
  [
    {
      name: 'Sanguine Hammer',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: ['50% damage heals the caster'],
      mechanics: [],
    },
    {
      name: 'Lightning Flurry',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'Each hit has a 30% chance to additionally summon a lightning strike at the target',
        'Each lightning strike inflicts 30 lightning magic damage',
      ],
      mechanics: [],
    },
    {
      name: 'Rejuvenating Flurry',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Each hit decreases cooldowns of all other skills with type of damage [Physical] by 0.5 seconds',
      ],
      mechanics: [],
    },
    {
      name: 'Flurry of Fire',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Once every 15 seconds each hit of each skill in the combo additionally launches a piercing projectile',
        'Such projectile flies 18m distance, inflicting 70 fire magic damage and control Stagger on maximum 7 enemy targets on its path',
      ],
      mechanics: [],
    },
  ],

  // ! Shield Block
  [
    {
      name: 'Shield Allies',
      grade: 'common',
      artifactPower: 5,
      dmgtype: 'physical',
      details: [
        'Upon skill activation you create an area of 5m radius around yourself',
        'Allies in the are are granted with an effect, decreasing their incoming damage by 50%',
      ],
      mechanics: [],
    },
    {
      name: 'Charge Counter',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Shield Counter skill is modified',
        'Upon skill activation you perform a charge towards the target on a maximum 12m distance',
        'Damage and mechanics of the skill are inherited of the original skill tooltip',
      ],
      mechanics: [],
    },
    {
      name: 'Shield of Thorns',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'Upon a successful block the attacking enemy is inflicted with 50 physical damage',
      ],
      mechanics: [],
    },
    {
      name: 'Shield of Fire',
      grade: 'mythic',
      artifactPower: 45,
      dmgtype: 'physical',
      details: [
        'Upon activation you summon flame shields around yourself',
        'Enemy targets in 3m radius around you are inflicted with 150 fire magic damage each 0.5 seconds',
      ],
      mechanics: [],
    },
  ],

  // ! Whirlwind
  [
    {
      name: 'Offensive Whirlwind',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: ['During the cast you can move and use sprint'],
      mechanics: [],
    },
    {
      name: 'Hammer Whirl',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'During the cast you launch Non-Piercing Projectiles in front of you',
        'Each such projectile inflicts 40 physical damage',
      ],
      mechanics: [],
    },
    {
      name: 'Gravity Whirl',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'Skill radius is increased by 2m',
        'The skill inflicts control Tether on enemy targets',
      ],
      mechanics: ['tether'],
    },
    {
      name: 'Whirlwind of Frenzy',
      grade: 'mythic',
      artifactPower: 45,
      dmgtype: 'physical',
      details: [
        'The skill radius is increased by 1m and the skill damage is increased by 20 for each 0.7 seconds of the cast (maximum 4 times)',
        'The skill duration is increased by 2 seconds. The skill consumes up to 150 willpower if cast for full duration',
      ],
      mechanics: [],
    },
  ],

  // ! Stomp
  [
    {
      name: 'Eathquake',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Upon activation you create an Earthquake area for 5 seconds',
        'Earthquake: inflicts control Tether on enemy targets for each second',
      ],
      mechanics: ['tether'],
    },
    {
      name: 'Hammer and Anvil',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Adds second skill to the combo',
        'The second skill inflicts 300 physical damage and a control Airborne on enemy targets. Damage does not disperse while hitting multiple targets',
      ],
      mechanics: ['airbone'],
    },
    {
      name: 'Severe Concussion',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'The debuff Concussion is no longer removed upon target being hit. the target suffers the effect of the debuff for the whole duration of 5 seconds',
      ],
      mechanics: [],
    },
    {
      name: 'Ground Break',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'The skill now additionally inflicts control Airborne on enemy targets',
      ],
      mechanics: ['airbone'],
    },
  ],

  // ! Battering Shield
  [
    {
      name: 'Battering Charge',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'The 3rd skill now allows to perform a charge',
        'You charge to a target on a maximum 18m distance',
      ],
      mechanics: [],
    },
    {
      name: 'Battering Block',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: ['During the cast you are granted with an effect Block'],
      mechanics: ['block'],
    },
    {
      name: 'Battering Force',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Skill damage is increased by 100%, the skill no longer has cooldown ',
        'The 3rd skill inflicts control Stagger instead of control Knockdown',
      ],
      mechanics: ['stagger'],
    },
    {
      name: 'Battering Frenzy',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'After using the 3rd skill you can repeat it 3 times with accelerated speed within 3 seconds',
      ],
      mechanics: ['attack speed increase'],
    },
  ],

  // ! Shield Slam
  [
    {
      name: 'Tactical Slam',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Upon successful block and/or evasion you are granted with a buff for 3 seconds that modifies the Shield Slam skill',
        'The buff decreases the cast time of the Shield Slam skill by 50% while increasing its damage by 20%',
      ],
      mechanics: [],
    },
    {
      name: 'Blocking Slam',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'Upon successful blocking with a Shield Block skill you are granted with a stack of a buff that modifies the Shield Slam skill',
        'Each stack increases the damage dealt by the Shield Slam skill by 30% (maximum 5 stacks)',
      ],
      mechanics: [],
    },
    {
      name: 'Explosive Slam',
      grade: 'rare',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'An additional explosion with a circular area occurs after the skill is used',
        'This explosion inflicts 153 physical damage and control Airborne',
      ],
      mechanics: ['airborne'],
    },
    {
      name: 'Grand Slam',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'The skill inflicts damage in areas on a maximum 12m distance, dealing additional damage',
      ],
      mechanics: [],
    },
  ],

  // ! Shield Charge
  [
    {
      name: 'Take Cover',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'The skill cooldown is now 8 seconds, the skill is now used on allied targets',
        'Upon being used target receives a buff Take Cover',
        'Upon being used enemies within 2m radius around the target are inflicted with a control Knockdown',
        'Take Cover: grants 150 points of shield effect',
      ],
      mechanics: ['knockdown', 'new effect (take cover)'],
    },
    {
      name: 'Charge Critical',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Upon activation the character receives a buff for 3 seconds, granting 100% critical hit chance for any skills used',
      ],
      mechanics: ['new buff (100% critical chance)'],
    },
    {
      name: 'Double Charge',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'The skill receives +1 additional charge',
        'Skill cooldown is increased by 50%',
      ],
      mechanics: [],
    },
    {
      name: 'Charge Up',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'The skill damage increases by maximum 10 times dependant on the distance charged',
      ],
      mechanics: [],
    },
  ],

  // ! Leap Slam
  [
    {
      name: 'Leap Distance',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'The skill no longer inflicts debuff Stun, the skill no longer has cooldown. The skill damage increases by maximum 2 times depending on a distance traveled',
      ],
      mechanics: [],
    },
    {
      name: 'Explosive Leap Slam',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'The skill damage is increased by 20%',
        'An additional explosion occurs after the leap within certain cross-shaped area',
        'The damage and mechanics of this explosion are inherited of the initial leap slam tooltip',
      ],
      mechanics: [],
    },
    {
      name: 'Unending Chase',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'You no longer designate an area of leap. Instead, you perform a leap for 15m forward',
        'Upon inflicting damage with the skill its cooldown is reset',
        'The skill willpower consumption is decreased by 100%',
      ],
      mechanics: [],
    },
    {
      name: 'Powerful Leap Slam',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'The radius for skill AOE is increased by 2m, the duration of the debuff Stun is increased by 1.5 seconds',
      ],
      mechanics: [],
    },
  ],

  // ! Earth Splitter
  [
    {
      name: 'Split the Fallen',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'fire',
      details: [
        'The skill cooldown is reset whenever the skill inflicts damage on enemy targets in states of control mechanics Knockdown or Airborne',
      ],
      mechanics: [],
    },
    {
      name: 'Flame Spear',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'fire',
      details: [
        'You launch a flame spear that inflicts continuous damage and control Knockback',
        'Skill damage is reduced by 35%',
      ],
      mechanics: ['knockback'],
    },
    {
      name: 'Explosive Splitter',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'fire',
      details: [
        'Additionally the explosion occurs within the area of the skill used',
        'After 2 seconds of skill cast the explosion inflicts 220 fire magic damage and control Airborne on enemy targets',
      ],
      mechanics: ['airborne'],
    },
    {
      name: 'Flame Splitter',
      grade: 'Mythic',
      artifactPower: 45,
      dmgtype: 'fire',
      details: [
        'Adds second skill to the combo',
        '2nd skill can be cast within the period of the projectile flight',
        'Upon activation the fire wave splits into 4 lesser ones, flying for different directions',
        'Each such lesser projectile inflicts 110 fire magic damage on its path ',
      ],
      mechanics: [],
    },
  ],

  // ! Shield Throw
  [
    {
      name: 'Shield of Enhancement',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Upon hit the shield flies to a random location. It can be picked up by character or ally party member',
        'Upon picking up the shield the character or party member is granted with a stack of a buff for 10 seconds, increasing their physical damage by 10% (maximum 3 stacks)',
      ],
      mechanics: [],
    },
    {
      name: 'Gravity Shield',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Upon hit the shield is installed in place, inflicting damage and control Tether each second for 2 seconds, and then returns to the caster (the installed shield can be affected by any modifiers for the skill type Summon)',
      ],
      mechanics: ['tether'],
    },
    {
      name: 'Tornado Shield',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'The skill becomes a channeling melee attack',
        'Upon activation you create a tornado in an area within 15m range of the caster. The tornado consumes 20 willpower each 0.4 seconds, inflicting 114 physical damage and control Stagger on enemy targets within radius',
      ],
      mechanics: ['stagger'],
    },
    {
      name: 'Bouncing Shield',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'The shield now does additional flying cycle',
        'Upon returning to the caster the shield bounces back, flying the path specified by the reticule and then returns to the caster (maximum 2 times of flying cycles)',
      ],
      mechanics: [],
    },
  ],

  // ! Pain Absortion
  [
    {
      name: 'Anger Management',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'The explosion of the Anger Release skill occurs 2 seconds after the end of the cast or cast being canceled',
      ],
      mechanics: [],
    },
    {
      name: 'Pain Extasy',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'The character movmente speed is increased while channeling the skill',
      ],
      mechanics: ['movement speed increase'],
    },
    {
      name: 'Excessive Anger',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Increases the maximum number of stacks of Anger effect by 2',
        '6 stacks: inflicts 534 physical damage and control Airborne on maximum 7 enemy targets within 15m radius',
        '7 stacks: inflicts 611 physical damage and control Airborne on maximum 7 enemy targets within 18m radius',
      ],
      mechanics: [],
    },
    {
      name: 'Uncontrolled Anger',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'while channeling the skill you automatically receive 1 stack of Anger effect for each 0.5 seconds',
      ],
      mechanics: [],
    },
  ],

  // ! Shield Rush
  [
    {
      name: 'Shields Up',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Additional shields at left and right sides are summoned during the skill cast',
        'The damage and mechanics of those shields are inherited of the original skill tooltip',
      ],
      mechanics: [],
    },
    {
      name: 'Rush of Power',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'Each hit of the skill grants the caster with a stack of a buff for 10 seconds, increasing their ouput damage by 3% (maximum 10 stacks)',
      ],
      mechanics: ['damage increase'],
    },
    {
      name: 'Instant Rush',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'The skill damage is increased by 100%',
        'You instantly inflict all 11 hits of the skill',
      ],
      mechanics: [],
    },
    {
      name: 'Rushing Strike',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'In 5 seconds after the skill cast you can use a second skill Rushing Strike',
        'Rushing Strike inflicts 150 physical damage and control Knockdown',
      ],
      mechanics: ['knockdown'],
    },
  ],

  // ! Hammer Throw
  [
    {
      name: 'Sure Throw',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'You throw the hammer using a curved trajectory',
        'the skill cooldown is reset whenever it hits an enemy target 10m far or more of the caster',
      ],
      mechanics: [],
    },
    {
      name: 'Piercing Throw',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'The skill type is changed to being Piercing Projectile and inflicts damage several times',
      ],
      mechanics: [],
    },
    {
      name: 'Prepare to Throw',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'the skill now has 4 stages of preparation before cast',
        'Skill damage, distance and hammer size increases by 50% for each stage prepared',
      ],
      mechanics: [],
    },
    {
      name: 'Explosive Hammer',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'Upon collision the hammer soar above and then fall on point',
        'Upon falling the explosion occurs, inflicting 380 physical damage and control Knockdown on enemy targets within 5m radius',
      ],
      mechanics: ['knockdown'],
    },
  ],

  // ! Hammer Crush
  [
    {
      name: 'Lava Fissures',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Upon casting any of 5 skills areas of lava erupt in the same locations',
        'Each area exists for 3 seconds, each second inflicting 65 fire magic damage and debuff Slow by 50%',
      ],
      mechanics: ['slow'],
    },
    {
      name: 'Time of the Berserker',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'The interval to use skills of the combo is increased by 3 seconds',
        '',
      ],
      mechanics: [],
    },
    {
      name: 'Staggering Crush',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: ['Each skill in the combo inflicts control Stagger', ''],
      mechanics: ['stagger'],
    },
    {
      name: 'Infinite Crush',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'Adds 3 more skill to the combo that are the same as skills 1-4',
      ],
      mechanics: [],
    },
  ],

  // ! Execution
  [
    {
      name: 'Triple Execution',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: ['The skill becomes a series of 3 consecutive strikes'],
      mechanics: [],
    },
    {
      name: 'Execution Yard',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'The skill damage is increased by 50%',
        'You perform 3 simultaneous strikes in circular areas on a straight line in front of you. Targets inflicted with damage of the furthest area are also inflicted with a control Airborne',
      ],
      mechanics: ['airbone'],
    },
    {
      name: 'Death Extasy',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'Killing an enemy with the skill resets cooldowns for all skills with type of damage [physical]',
      ],
      mechanics: [],
    },
    {
      name: 'Target of the Judgement',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'The skill type is changed to being a leap attack, allowing to perform a leap to a designated area',
      ],
      mechanics: [],
    },
  ],

  // ! Chain Hook
  [
    {
      name: 'Mass Hook',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'The skill becomes an AOE attack with a charge time',
        'After 1 second of charging you perform an attack with the skill on maximum 7 enemy targets within 18m radius of the character',
      ],
      mechanics: [],
    },
    {
      name: 'Range of Chains',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'The skill can now be cast while moving',
        'The maximum range of the skill is increased by 6m',
      ],
      mechanics: [],
    },
    {
      name: 'Chain Reaction',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Upon cast the character is drawn to the target of the skill. At the same time additional chains pull up to 5 enemies in certain radius around the target of the skill',
      ],
      mechanics: [],
    },
    {
      name: 'Double Hook',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: ['The skill gains +1 additional charge'],
      mechanics: [],
    },
  ],

  // ! Defensive Strikes
  [
    {
      name: 'Defensive Blow',
      grade: 'common',
      artifactPower: 5,
      dmgtype: 'physical',
      details: ['Damage of the second skill doubles'],
      mechanics: [],
    },
    {
      name: 'Stun Explosion',
      grade: 'common',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'The skill performs additional explosion when used on enemy targets with a debuff Stun',
        'The explosion inflicts 100 physical damage',
      ],
      mechanics: ['stun'],
    },
    {
      name: 'Defensive Control',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'The first skill in the combo inflicts control Airborne on enemy targets in states of control Knockdown',
      ],
      mechanics: ['airbone'],
    },
    {
      name: 'Defence Strategy',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Within 5 seconds after the second skill used any skill gains reduced cooldown by 25% upon cast',
      ],
      mechanics: [],
    },
  ],

  // ! Charging Blitz
  [
    {
      name: 'Additional Charge',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Adds the 4rd stage of charging the skill',
        '4th stage: You perform a forward charge, inflicting 475 physical damage and control Airborne',
      ],
      mechanics: [],
    },
    {
      name: 'Charging Splitter',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Upon cast you additionally launch a fire wave of the skill Earth Splitter',
      ],
      mechanics: [],
    },
    {
      name: 'Charging Strikes',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'Adds a skill to the combo that can be used within 3 seconds after the first skill cast',
        'Charging Strike: consuming 80 willpower you inflict 200 physical damage and control Airborne on enemy targets in range',
        'The skill Charging Strike can be used once again upon successful cast',
      ],
      mechanics: [],
    },
    {
      name: 'Instant Blitz',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'The skill is cast instantly without charging stages',
        'You charge through enemies with the skill',
      ],
      mechanics: [],
    },
  ],

  // ! Shred
  [
    {
      name: 'Mortal Wounds Synergy',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'The lower HP the caster has the more damage skill inflicts, up to 6 times more damage',
      ],
      mechanics: [],
    },
    {
      name: 'Blood Burst',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'The skill cooldown is reduced by 40%. With 3 stacks of the debuff on target the explosion occurs',
        'The explosion removes stacks of the buff and inflicts 350 physical damage, 100% of damage heals the caster',
      ],
      mechanics: [],
    },
    {
      name: 'Excessive Bleeding',
      grade: 'heroic',
      artifactPower: 30,
      dmgtype: 'physical',
      details: ['The debuff inflicts damage each second'],
      mechanics: [],
    },
    {
      name: 'Multiple Wounds',
      grade: 'heroic',
      artifactPower: 25,
      dmgtype: 'physical',
      details: ['The skill inflicts 3 stacks of the debuff at once'],
      mechanics: [],
    },
  ],

  // ! Taunt
  [
    {
      name: 'Frenzy',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Upon cast you receives a buff Frenzy for 5 seconds',
        'Frenzy: Incoming damage is increased by 25%. Output damage and attack speed is increased by 25%. Upon killing enemies with direct hit you gain 25% HP',
      ],
      mechanics: ['new buff frenzy'],
    },
    {
      name: 'Weaking Shout',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'Enemies affected by the skill debuff are also inflicted with a debuff for the same duration, decreasing their output damage by 20%',
      ],
      mechanics: [],
    },
    {
      name: 'Defensive Shout',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Upon cast you are granted with a buff for 5 seconds, reflecting enemy attacks by inflicting 65 physical damage',
      ],
      mechanics: [],
    },
    {
      name: 'Wail of Horror',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'The skill radius is reduced by 8m, upon cast you inflict a debuff Fear for 5 seconds on enemy targets within radius',
        'Fear: The target is in the state of control, moving around randomly and incapable of performing any actions. Upon taking total damage more than 5% of the maximum HP the debuff is removed',
      ],
      mechanics: ['new debuff fear'],
    },
  ],

  // ! Warcry
  [
    {
      name: 'Inspiring Warcry',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'You also grant allies in 18m radius with the same buff. The buff can be gained by maximum 5 targets including yourself',
      ],
      mechanics: [],
    },
    {
      name: 'Cry for Release',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'The skill can be used in state of control mechanics that allows you to cancel their effects',
        '',
      ],
      mechanics: [],
    },
    {
      name: 'Rejuvenating Warcry',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: ['Decreases the cooldown for all other skills by 50% upon cast'],
      mechanics: [],
    },
    {
      name: 'Cry of Willpower',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'During the duration of the buff all other skills can be used without willpower consumption',
      ],
      mechanics: [],
    },
  ],

  // ! Hammer Frenzy
  [
    {
      name: 'Frenzy Burst',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'Upon casting the skill for 3 seconds the skill is changed to a melee attack with charging stages that inflicts damage and control Airborne',
        'This skill has 3 stages of charging with physical damage variations: 350 / 450 / 550',
      ],
      mechanics: ['airbone'],
    },
    {
      name: 'Tethering Frenzy',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Skill radius doubles',
        'The skill inflicts control Tether on enemy targets',
      ],
      mechanics: ['tether'],
    },
    {
      name: 'Frenzied Approach',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: ['The skill can be used while moving'],
      mechanics: [],
    },
    {
      name: 'Swift Frenzy',
      grade: 'mythic',
      artifactPower: 45,
      dmgtype: 'physical',
      details: ['The skill always hits with the maximum possible attack speed'],
      mechanics: [],
    },
  ],

  // ! Sacred Shield
  [
    {
      name: 'Sacred Approach',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'light',
      details: [
        'The skill now allows you to perform a jump to a designated location within 21m range. The first hit of the skill now inflicts control Airborne',
      ],
      mechanics: [],
    },
    {
      name: 'Sacred Outburst',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'light',
      details: [
        'Adds second skill that can be used within the duration of the Sacred Shield buff',
        'Upon cast the buff is removed and an explosion occurs',
        'The explosion inflicts 400 physical damage and control Airborne',
      ],
      mechanics: [],
    },
    {
      name: 'Sacred Shroud',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'light',
      details: [
        'While casting you are granted with an effect Invulnerability. The skill damage doubles',
      ],
      mechanics: ['new effect invulnerability'],
    },
    {
      name: 'Sacred Land',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'light',
      details: [
        'You can now install the area of the skill within 21m range in front of you',
      ],
      mechanics: [],
    },
  ],

  // ! Shield Bash
  [
    {
      name: 'Forceful Bash',
      grade: 'common',
      artifactPower: 5,
      dmgtype: 'physical',
      details: [
        'Upon cast you inflict control Knockback on enemy targets',
        'Upon cast you are granted with a buff for 5 seconds, increasing attack speed by 30%',
      ],
      mechanics: ['knockback', 'attack speed increase'],
    },
    {
      name: 'Armor Destruction',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Upon cast you inflict 3 stacks of the debuff Armor Crack at once',
      ],
      mechanics: [],
    },
    {
      name: 'Bash Critical',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'The skill cooldown is reset whenever the skill inflicts critical damage',
      ],
      mechanics: [],
    },
    {
      name: 'Bashing Wave',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'The skill type is changed to being Piercing Projectile. Upon cast you launch a shock wave in front of you.',
        'The wave flies for the maximum 18m distance, inflicting damage on enemy targets on its path',
        'The skill damage is increased by 30%',
      ],
      mechanics: [],
    },
  ],
];
