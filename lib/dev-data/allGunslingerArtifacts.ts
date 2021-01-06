export default [
  // ! Pistol Shot
  [
    {
      name: 'Firing Tactics',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'After 6 rounds of [Pistol Shot] you activate special skill [Withdrawal]',
        '[Withdrawal]: You make a backflip. During the skill you acquire effect Dodge',
      ],
      mechanics: ['dodge'],
    },
    {
      name: 'Adjustment Fire',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Each round of [Pistol Shot] decreases the cooldown of the skill [Main Caliber] for 1 second',
      ],
      mechanics: [],
    },
    {
      name: 'Fast Shooting',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: ['Increases the casting speed by 50%'],
      mechanics: [],
    },
    {
      name: 'Area Of Bullets',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        '[Pistol Shot] becomes the Piercing Projectile Skill. It fires shots in frontal cone at the range of 15m, damaging 5 targets maximum. Increases the casting speed by 50%',
      ],
      mechanics: [],
    },
  ],

  // ! Multishot
  [
    {
      name: 'Explosive Bullets',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'Each 10th round changes to a blast, inflicting 150 physical damage',
        'In this case it is not specified whether the blast produced is actually an AOE.',
      ],
      mechanics: [],
    },
    {
      name: 'Plasma Bullets',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'lightning',
      details: [
        'Damage type is changed to [lightning], skill damage increases by 15%',
        'The skill inflicts 20% more damage to targets with debuff Freezing',
      ],
      mechanics: ['Freezing'],
    },
    {
      name: 'Moving Multishot',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: ['You can move while channeling the skill'],
      mechanics: [],
    },
    {
      name: 'Speed of Shooting',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: ['Casting speed doubles after 1 second of channeling the skill'],
      mechanics: [],
    },
  ],

  // ! Rifle Shot
  [
    {
      name: 'Blasting Round',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'The Skill Type is changed to the Non-Piercing Projectile',
        'Round inflicts physical damage to 5 targets maximum in 2m radius. Skill inflicts 20% more damage',
      ],
      mechanics: [],
    },
    {
      name: 'Explosive Round',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Each 4-th round is changed to an [Explosive Round], inflicting 150 physical damage in 3m radius',
        'In this case it is not specified how much targets are affected with the AOE damage',
      ],
      mechanics: [],
    },
    {
      name: 'Impulse Shotgun',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'Changes skill to a [Impulse Shotgun]: you fire special shells using shotgun. Each shell inflicts 162 physical to 5 targets maximum in frontal cone of 8m. Each shot recovers 20 ammo',
        'Round inflicts physical damage to 5 targets maximum in 2m radius. Skill inflicts 20% more damage',
      ],
      mechanics: ['damage decrease'],
    },
    {
      name: 'Instant Rounds',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'Casting speed doubles, but you cannot move while channeling the skill',
      ],
      mechanics: [],
    },
  ],

  // ! Rocket
  [
    {
      name: 'Thunder Rocket',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Changes skill to a [Thunder Rocket]: inflicts lightning damage. Skill damage increases by 20%',
        'On hit the static field is produced, inflicting 75 lightning damage each second for 4 seconds to 5 targets maximum',
        'The Skill inflicts 20% more damage to targets with debuff Freezing',
      ],
      mechanics: ['freezing'],
    },
    {
      name: 'Cluster Rocket',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Rocket explodes after 1 second, splitting into 5 shells, each inflicting 135 physical damage',
        'Video-Preview shows as if it actually splits into 3 shells',
      ],
      mechanics: [],
    },
    {
      name: 'Rocket Pack',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'After using the skill you fire rockets for 4 seconds with 100 physical damage each for 5 targets maximum each rocket',
        'Skill cast time increases by 1 second, skill cooldown increases by 10 seconds. The skill consumes 60 ammo',
      ],
      mechanics: [],
    },
    {
      name: 'Rocket Launcher',
      grade: 'mythic',
      artifactPower: 45,
      dmgtype: 'physical',
      details: [
        'Skill cast time increases significantly, ammo consumption decreases by 60%. You cannot move while channeling the skill',
      ],
      mechanics: [],
    },
  ],

  // ! Akimbo
  [
    {
      name: 'Berserk Trigger',
      grade: 'uncommon',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Changes skill to a [Berserk Trigger] with 10 seconds cooldown. Skill consumes 80 ammo',
        '[Berserk Trigger]: You spend 40 ammo and fire at 3 points on a distance of 12m. Each shot for each point inflicts 78 physical damage to 7 targets maximum in 3m radius',
        'At the end of cast you spend another 40 ammo and fire special blasting shells, inflicting 300 physical damage and control Airborne to 7 targets maximum in 4m radius',
        'In this case it is not specified the channeling time for the skill',
      ],
      mechanics: ['airbone'],
    },
    {
      name: 'Cryo Akimbo',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        '[Cryo Akimbo]: inflicts cold damage. Skill damage increases by 15%',
        'Skill inflicts stacking debuff Cold. After acquiring 3 stacks the target is inflicted with debuff Freezing for 3 seconds',
        'Freezing: cannot move or turn. Targets with the debuff take 20% increased damage from skills with a type of damage [lightning]',
      ],
      mechanics: ['freezing'],
    },
    {
      name: 'Fan Akimbo',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'Skill consumes 80 ammo. You fire 5-rounded shot in the frontal cone and make a 5m backflip afterwards',
      ],
      mechanics: [],
    },
    {
      name: 'Speedy Trigger',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: ['skill casting speed doubles'],
      mechanics: [],
    },
  ],

  // ! Salto
  [
    {
      name: 'Pirouette',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'You perform whirling about, firing 4 shots in front of you, each shot farther than previous. You can also move while casting the skill',
      ],
      mechanics: [],
    },
    {
      name: 'Dense Fire',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: ['You fire 6 shots during the skill cast'],
      mechanics: [],
    },
    {
      name: 'Salto-Morale',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'The skill becomes a combo with the second skill [Salto-Mortale] that can be using within 3 seconds after the first one',
        '[Salto-Mortale]: you perform a 12m forward roll and then fire 5 shots around yourself, inflicting 50 physical damage each hit on maximum 5 enemy targets within 8m radius around yourself',
      ],
      mechanics: [],
    },
    {
      name: 'Withdrawal Fire',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'At the end of the jump the blast occurs in the starting point, inflicting 200 physical damage to 5 targets maximum',
      ],
      mechanics: [],
    },
  ],

  // ! Summon Drones
  [
    {
      name: 'Summon Cryo Drone',
      grade: 'uncommon',
      artifactPower: 0,
      dmgtype: 'physical',
      details: [
        '[Summon: Cryo Drone]: You summon the drone with cryo weapon and jump towards the designated direction for 15m range',
        'Drone install the linking laser between itself and you. The laser periodically inflicts 60 cold damage to and debuff Freezing for 3 seconds to 5 targets maximum',
      ],
      mechanics: ['freezing'],
    },
    {
      name: 'Summoning Portal',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Changes the skill to a [Summon: Random Drone], skill cooldown is 15 seconds, skill has 3 charges',
        'Skill summons random drone at the designated location',
      ],
      mechanics: [],
    },
    {
      name: 'Summon Thunder Sphere',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        '[Summon: Thunder Sphere]: You summon the drone with 7m AOE attack, periodically inflicting 100 lightning damage to 5 target maximum. Each 5th hit inflicts the target with debuff Stun for 3 seconds',
      ],
      mechanics: ['stun'],
    },
    {
      name: 'Army of Drones',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: ['You summon 4 drones'],
      mechanics: [],
    },
  ],

  // ! Summon Turret
  [
    {
      name: 'Summon Marching Turret',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        '[Summon: Marching Turret] You summon a moving target, which is following you',
      ],
      mechanics: [],
    },
    {
      name: 'Summon Siege Turret',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        '[Summon: Siege Turret]: You summon a special turret, which fires at enemies location with explosive shells. Turret produces 3 shots, after which it moves while recharging. The turret exists for 20 seconds and repeats its cycle',
        'Each shell inflicts 200 physical damage to 5 targets maximum in 3m radius',
      ],
      mechanics: [],
    },
    {
      name: 'Spare Turret',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'The skill cooldown increases by 50% but skill now has 2 charges',
      ],
      mechanics: [],
    },
    {
      name: 'Suppression Summoning',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'The blast radius is 6m. Shot fired also inflicts targets in area with control Knockdown',
      ],
      mechanics: ['knockdown'],
    },
  ],

  // ! Landmine
  [
    {
      name: 'Claymore',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'You install Claymore Mine',
        'Skill cooldown decreases by 50%',
        'When Claymore triggers it inflicts 150 lightning damage and debuff Stun for 3 seconds in the frontal cone towards enemies',
        'The Skill inflicts 20% more damage to targets with debuff Freezing',
      ],
      mechanics: ['stun'],
    },
    {
      name: 'Hailstorm Mine',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'You install large mine, which triggers the skill Steel Hailstorm',
      ],
      mechanics: [],
    },
    {
      name: 'Minefield',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: ['The skill now has 2 charges'],
      mechanics: [],
    },
    {
      name: 'Remote Installation',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'The Skill Type is changed to a Target Range Attack. The blast occurs after 0.5 seconds of cast',
      ],
      mechanics: [],
    },
  ],

  // ! Aimed Shot
  [
    {
      name: 'Plasma Shot',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'lightning',
      details: [
        'You fire special plasma shot',
        'Skill inflicts 100 lightning damage, producing static field of 2m radius at each target’s location. Each field inflicts 40 lightning damage each second for 6 seconds to 5 targets maximum (The skill no longer inflicts the debuff Electrocute)',
      ],
      mechanics: [],
    },
    {
      name: 'Soporific Shot',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'lightning',
      details: [
        'You install large mine, which triggers the skill Steel Hailstorm',
        'Sleep is removed prematurely if damage taken',
        'Using the skill while affected by the buff of the skill [Main Caliber] changes the debuff: the Sleep is inflicted for 4 seconds, but the damage taken does not remove debuff prematurely',
      ],
      mechanics: [],
    },
    {
      name: 'Thunger Shot',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'lightning',
      details: [
        'Each time the debuff Electrocute procs there is a 30% chance to additionally inflicts target with 65 lightning damage',
      ],
      mechanics: [],
    },
    {
      name: 'Shock Magazine ',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'lightning',
      details: [
        'Changes the skill to a buff [Shock Magazine]. The cooldown becomes 24 seconds, the resource consumption is removed',
        'You acquire 50 stacks of the skill buff, each is represented as a shock round. Rounds are spent while using any other skills, each round inflicting 30 lightning damage',
        'Each hit with shock round damage has a 5% chance to create another magazine near the target. Each such magazine 20 shock rounds and exists for 5 seconds',
        'You as well as your allies can collect magazines',
        'You can have maximum of 100 rounds in buff stacks',
      ],
      mechanics: [],
    },
  ],

  // ! Homing Missiles
  [
    {
      name: 'Innovative Missiles',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Each critical hit of the skill decreases the skill’s cooldown by 1 second',
      ],
      mechanics: [],
    },
    {
      name: 'Flame Missiles',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Changes skill to a [Fire Missiles], the skill damage is increased by 20%. Each missile inflicts fire damage and stacking debuff Fire Shrapnel to 3 targets in 1.5m radius. Fire Shrapnel inflicts 20 fire damage each 2 seconds for 10 seconds (any target can have maximum 6 stacks of the debuff)',
      ],
      mechanics: ['debuff similar to bleeding, change bleeding'],
    },
    {
      name: 'Suppressive Missiles',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: ['Each hit inflicts target with control Knockback'],
      mechanics: ['knockback'],
    },
    {
      name: 'Arsenal',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'After firing the first wave of 3hit missiles you fire the second wave with 6hit missiles',
      ],
      mechanics: [],
    },
  ],

  // ! Volley
  [
    {
      name: 'Thunder Volley',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Skill damage type is changed to magic [lightning]. Skill damage is increased by 20%, each hit has 5% chance to inflict additional 50 lightning damage in 2m radius',
        'The Skill inflicts 20% more damage to targets with debuff Freezing',
      ],
      mechanics: [],
    },
    {
      name: 'Suppressive Volley',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'Makes combo with second skill, which inflicts 150 physical damage and control Knockdown to 5 targets maximum in 2m radius',
      ],
      mechanics: ['Knockdown'],
    },
    {
      name: 'Concentrated Fire',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: ['You Aim to shoot the skill at 5 targets maximum'],
      mechanics: [],
    },
    {
      name: 'One Last Thing',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'The last shot is changed to microbomb firing',
        'Microbomb: target’s incoming damage is increased by 15% for 3 seconds. After 3 seconds the bomb explodes, inflicting 206 physical damage to 5 targets maximum in 2m radius',
      ],
      mechanics: [],
    },
  ],

  // ! Bomb
  [
    {
      name: 'Cryo Bomb',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'You fire cyro bomb at target, which explodes after 1.5 seconds',
        'The blast inflicts cold damage and debuff Glaciation  for 3 seconds in 2m radius',
        'Glaciation: cannot perform any action. Targets with the debuff take 20% increased damage from skills with a type of damage [lightning]',
      ],
      mechanics: ['glaciation'],
    },
    {
      name: 'Triple Bomb',
      grade: 'rare',
      artifactPower: 20,
      dmgtype: 'physical',
      details: ['You aim 3 targets maximum to fire bombs'],
      mechanics: [],
    },
    {
      name: 'Cross Blast',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'Skill damage is increased by 25%. The blast occurs in cross-shaped area with 2x10m lines (targets in the area of lines crossing take 2 hits of the skill simultaniously',
      ],
      mechanics: [],
    },
    {
      name: 'Contact Detonation',
      grade: 'mythic',
      artifactPower: 45,
      dmgtype: 'physical',
      details: [
        'Skill cooldown is increased by 150%, but the blast occurs upon target contact',
      ],
      mechanics: [],
    },
  ],

  // ! Schorched Lands
  [
    {
      name: 'Lands Of Thunder',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'Damage type is changed to magic [lightning]. Skill damage is increased by 10%. Each hit has 5% chance to inflict additional 50 lightning damage',
        'The Skill inflicts 20% more damage to targets with debuff Freezing',
      ],
      mechanics: [],
    },
    {
      name: 'Explosive Land',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'The second skill in combo is changed: now you spin to throw grenades in circle with 10m radius around yourself',
        'The skill inflicts 150 physical damage and debuff Stun for 2 seconds',
      ],
      mechanics: ['stun'],
    },
    {
      name: 'Land Of Suppression',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'You use only the second skill of the combo, which becomes the spinning shooting',
        'The skill inflicts 8 hits 52 physical damage and control Stagger each in 10m radius to 7 targets maximum',
      ],
      mechanics: ['stagger'],
    },
    {
      name: 'Land Of Fire',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        '1 second after hitting with the second skill of the combo, the fire area is produced',
        'he are inflicts the same skill damage each second for 4 seconds',
      ],
      mechanics: [],
    },
  ],

  // ! Steel Hailstorm
  [
    {
      name: 'Innovative Hailstorm',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'Each time the area critically hits, all character’s cooldowns are decreased by 1 seconds',
      ],
      mechanics: [],
    },
    {
      name: 'Explosive Hailstorm',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Changes the skill to a [Explosive Hailstorm]: Firing an area of blasts in 8m radius around yourself',
        'The Skill inflicts 5 hits 85 physical damage and control Stagger each to 7 targets maximum',
      ],
      mechanics: [],
    },
    {
      name: 'Front Of The Rain',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'The shot produces 2 crossing areas around the point of impact',
      ],
      mechanics: [],
    },
    {
      name: 'Mortar',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'Changes the skill to a [Mortar]: you fire the explosive shell at the designated area, inflicting 224 physical damage and debuff Stun for 3 seconds to 7 targets maximum',
      ],
      mechanics: ['stun'],
    },
  ],

  // ! Explosive Leap
  [
    {
      name: 'Recall',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: [
        'For 10 seconds after the skill use you can perform the second leap, returning you to the initial point',
      ],
      mechanics: [],
    },
    {
      name: 'Evasive Tactics',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'Performing evasion 5 seconds after skill is used decreases the skill cooldown by 50%',
      ],
      mechanics: [],
    },
    {
      name: 'Hailstorm Leap',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: ['he Initial blast produces the skill Steel Hailstorm'],
      mechanics: [],
    },
    {
      name: 'Disengage',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'At the end of the leap you acquire the buff Invisibility for 3 seconds',
      ],
      mechanics: ['invisibility'],
    },
  ],

  // ! Kick
  [
    {
      name: 'Powerful Kick',
      grade: 'common',
      artifactPower: 5,
      dmgtype: 'physical',
      details: [
        'The second skill changes, inflicting single hit of 150 physical damage and control Knockback',
      ],
      mechanics: [],
    },
    {
      name: 'Targeted Kick',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: ['The first skill of the combo becomes Target attack'],
      mechanics: [],
    },
    {
      name: 'Uppercut',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'Within 3 seconds after the second skill you can perform another skill to the combo [Uppercut]: inflicts 100 physical damage and control Airborne to 5 targets maximum',
      ],
      mechanics: ['airborne'],
    },
    {
      name: 'Warm Up',
      grade: 'heroic',
      artifactPower: 30,
      dmgtype: 'physical',
      details: ['Evasion resets skill cooldown'],
      mechanics: [],
    },
  ],

  // ! Grenade
  [
    {
      name: 'Cyrogrenade',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'You throw a cyrogrenade',
        'Skill inflicts 50 cold damage and debuff Glaciation for 3 seconds in 3m radius to 5 targets maximum',
        'Glaciation: Forbids any action. Targets with the debuff take 20% increased damage from skills with a type of damage [lightning]',
      ],
      mechanics: [],
    },
    {
      name: 'Biogrenade',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'nature',
      details: [
        'You throw a biogrenade. Skill does not inflict debuff Stun. The blast inflicts 56 nature damage in 3m radius to 5 targets maximum and creates a Poison Cloud area for 6 seconds',
        'Poison Cloud: inflicts 80 nature damage and debuff, which slows targets for 50% and increasing their damage taken by 20%, in 4m radius to 5 targets maximum',
        'Within 6 seconds of Poison Cloud existence you can perform the second skill [Biochemical Blast]',
        'Biochemical Blast removes the area produced, inflicting 200 nature damage and control Airborne in 4m radius to 5 targets maximum',
      ],
      mechanics: ['dmg per second similar to bleeding', 'airborne'],
    },
    {
      name: 'Grenade Pack',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'You specify 5 targets maximum to throw several grenades at once',
      ],
      mechanics: [],
    },
    {
      name: 'Smoke Grenade',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'You throw a smoke grenade. Skill cooldown is increased by 100%',
        'The grenade does not inflict debuff Stun. Skill inflicts 50 physical damage in 3m radius to 5 targets maximum and creates the Smoke Screen for 3 seconds',
        'While in the Smoke Screen the character acquire effect Dodge',
      ],
      mechanics: [],
    },
  ],

  // ! Lasso
  [
    {
      name: 'Cryolasso',
      grade: 'uncommon',
      artifactPower: 150,
      dmgtype: 'cold',
      details: [
        'Skill damage is increased by 20%. You fire cryolasso, inflicting cold damage and debuff Freezing for 3 seconds in 3m radius to 5 targets maximum',
        'Freezing: cannot move or rotate the character',
      ],
      mechanics: ['freezing'],
    },
    {
      name: 'Thunder Lasso',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'You fire an electric lasso, inflicting lightning damage and debuff Stun for 3 seconds in 3m radius to 5 targets maximum',
        'The Skill inflicts 20% more damage to targets with debuff Freezing',
      ],
      mechanics: ['stun'],
    },
    {
      name: 'Boomerang',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'You throw boomerang. If boomerang hits any target it bounces and hits the ground. Acquiring the boomerang resets the cooldown of the skill',
        'Allies can acquire the boomerang as well to reset the caster’s cooldown of the skill',
      ],
      mechanics: [],
    },
    {
      name: 'Survival Gadgets',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'When evading on shift you fire lasso in opposite direction of the evasion',
        'Evasion lasso inherits skill’s damage and debuff Root',
      ],
      mechanics: [],
    },
  ],

  // ! Surppresive Discharge
  [
    {
      name: 'Flame Discharge',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        'The skill leave a trail of fire in the same area of effect',
        'The trail inflicts 87 fire damage each second for 8 seconds',
      ],
      mechanics: [],
    },
    {
      name: 'Static Discharge',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'lightning',
      details: [
        'Skill type is changed to lightning. Skill inflicts debuff Stun for 4 seconds to 7 targets maximum. Skill damage is increased by 30%',
        'The Skill inflicts 20% more damage to targets with debuff Freezing',
      ],
      mechanics: ['stun'],
    },
    {
      name: 'Triple Discharge',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: ['You fire 3 lines of discharge'],
      mechanics: [],
    },
    {
      name: 'Impulse Discharge',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'You perform 2 consecutive discharges. Second discharge inherits the damage and control Knockdown of the first one, but is casted instantly',
      ],
      mechanics: [],
    },
  ],

  // ! Salvo
  [
    {
      name: 'Fast Salvo',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: ['Decreases the casting time of all 3 skills of the combo'],
      mechanics: [],
    },
    {
      name: 'Offensive Salvo',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: ['Allows to move while casting'],
      mechanics: [],
    },
    {
      name: 'Wide Salvo',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'ou fire 2 salvos at once. The second and the third are wider than previous ones',
      ],
      mechanics: [],
    },
    {
      name: 'Shotgun Salvo',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'Changes the skill to a [Shotgun Salvo], the area of effect becomes a frontal cone, skill damage is increased by 30%',
        'Damage does not disperse while hitting multiple targets',
      ],
      mechanics: [],
    },
  ],

  // ! Plasma Globe
  [
    {
      name: 'Plama Bomb',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'lightning',
      details: [
        'Globe is changed to a shell, which explodes at the designated area. The explosion inflicts 50 lightning damage to 5 targets maximum and also creates an area, which inflicts 50 lightning damage each second for 3 seconds to 5 targets maximum',
      ],
      mechanics: ['lightning damage per second'],
    },
    {
      name: 'Homing Globe',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'lightning',
      details: [
        'The skill type is changed to a Target Projectile, the globe fixes on the particular target, pursuing them and inflicting damage for 6 seconds',
        'The skill does not inflict control Knockback anymore',
      ],
      mechanics: [],
    },
    {
      name: 'Magnetic Globe',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'lightning',
      details: [
        'Tapping the skill again explodes the globe, inflicting control Tether and 150 lightning damage to 5 targets maximum',
      ],
      mechanics: ['tether'],
    },
    {
      name: 'Globular Cluster',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'lightning',
      details: ['You fire 3 globes'],
      mechanics: [],
    },
  ],

  // ! Snipe
  [
    {
      name: 'Suppressive Snipe',
      grade: 'common',
      artifactPower: 10,
      dmgtype: 'physical',
      details: ['The skill inflicts control Knockback'],
      mechanics: ['knockback'],
    },
    {
      name: 'Second Snipe',
      grade: 'uncommon',
      artifactPower: 20,
      dmgtype: 'physical',
      details: [
        'Adds the second skill [Explosive Snipe]',
        '[Explosive Snipe]: You perform a small backflip and fire in frontal cone, inflicting 240 physical damage to 5 targets maximum',
        'While affected by the buff [Main Caliber] you perform additional Explosive Snipe skill',
      ],
      mechanics: [],
    },
    {
      name: 'Caliber Selection',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: [
        'Changes the skill to a [Caliber Selection]. The skill now has 6 seconds of cooldown, but it does not consume ammo anymore',
        'Before sniping you select a bullet',
        'Red Bullet: piercing stat of skill is increased by 20%',
        'Golden Bullet: the skill inflicts debuff Stun for 2 seconds',
        'Blue Bullet: the skill recovers 50 ammo regardless of number of targets affected',
        'While affected by the buff [Main Caliber] you load all three bullets at once',
      ],
      mechanics: ['stun'],
    },
    {
      name: 'Instant Sniping',
      grade: 'heroic',
      artifactPower: 40,
      dmgtype: 'physical',
      details: [
        'The skill cooldown becomes 6 seconds. The skill is casted instantly',
        'The usage of skill [Main Caliber] resets the skill cooldown',
      ],
      mechanics: [],
    },
  ],

  // ! Plama Wave
  [
    {
      name: 'Cyrowave',
      grade: 'uncommon',
      artifactPower: 15,
      dmgtype: 'physical',
      details: [
        '[Cryowave]: You release 3 cold waves',
        'Each wave hitting a target inflicts a debuff Freezing for 3 seconds',
        'Freezing: cannot move or turn. Targets with the debuff take 20% increased damage from skills with a type of damage [lightning]',
        'Targets affected by all 3 waves are inflicted with a debuff Glaciation for 4 seconds',
        'Glaciation: cannot perform any action. Targets with the debuff take 20% increased damage from skills with a type of damage [lightning]',
      ],
      mechanics: ['freezing', 'glaciation'],
    },
    {
      name: 'Wave Impulse',
      grade: 'rare',
      artifactPower: 25,
      dmgtype: 'physical',
      details: [
        'The skill cooldown becomes 24 seconds. After the cast you perform a step back and cast the skill again',
      ],
      mechanics: [],
    },
    {
      name: 'Plasma Sinergy',
      grade: 'rare',
      artifactPower: 30,
      dmgtype: 'physical',
      details: ['During the cast you also cast the skill [Plasma Globe]'],
      mechanics: [],
    },
    {
      name: 'Plasma Overheat',
      grade: 'heroic',
      artifactPower: 35,
      dmgtype: 'physical',
      details: [
        'Changes the skill to a [Plasma Shotgun], the skill performs 5 consecutive shots in one direction. You cannot move or perform other actions during the cast',
        'The usage of skill [Main Caliber] resets the skill cooldown',
      ],
      mechanics: [],
    },
  ],
];
