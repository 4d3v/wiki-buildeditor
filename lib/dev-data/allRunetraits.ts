export default [
  // ! onslaught
  {
    group: 'onslaught',
    name: 'mercilessness',
    description:
      'upon killing the enemy you acquire a buff, increasing your output damage/healing by 8% for 8 seconds',
    categorytier: 4,
    mechanics: ['attack damage'],
  },
  {
    group: 'onslaught',
    name: 'Mortal Wounds',
    description:
      'Upon critical hit with back attack you acquire a buff, increasing your output damage/healing by 8% for 8 seconds',
    categoryTier: 4,
    mechanics: ['attack damage'],
  },
  {
    group: 'onslaught',
    name: 'Finishing Blows',
    description:
      'Upon attacking the enemy in the control states of Knockdown and Airborne you acquire a buff, increasing your output damage/healing by 8% for 8 seconds',
    categoryTier: 4,
    mechanics: ['attack damage'],
  },
  {
    group: 'onslaught',
    name: 'Onslaught Enhancement',
    description:
      'The trait effects of set (4) of the Onslaught group: Mercilessness, Mortal Wounds, Finishing Blows, are increased by 50%',
    categorytier: 12,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Extended Onslaught',
    description:
      'The trait effects durations of set (4) of the Onslaught group: Mercilessness, Mortal Wounds, Finishing Blows, are increased by 100%',
    categoryTier: 12,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Tracing Strikes',
    description:
      'Each hit with back attack additionally summons a lightning strike, inflicting 50 lightning magic damage to the target (trait cooldown 0.5 seconds)',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Seizure Strikes',
    description:
      'Each hit of targets in the control state of Knockdown and Airborne additionally summons a lightning strike, inflicting 40 lightning magic damage to the target (trait cooldown 0.5 seconds)',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Judgemental Strikes',
    description:
      'Each critical hit additionally summons a lightning strike, inflicting 50 lightning magic damage to the target (trait cooldown 0.5 seconds)',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Lightning Onslaught',
    description:
      'The damage of traits of the set (24) of the Onslaught group: Tracing Strikes, Seizure Strikes, Judgemental Strikes, doubles',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Onslaught Recharge',
    description:
      'The damage of traits of the set (24) of the Onslaught group: Tracing Strikes, Seizure Strikes, Judgemental Strikes, is decreased by 20%, but traits do not have cooldowns anymore',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Mass Onslaught',
    description:
      'The damage of traits of the set (24) of the Onslaught group: Tracing Strikes, Seizure Strikes, Judgemental Strikes, becomes AOE, inflicting damage to additional targets in 2m radius of the original target for lightning strike',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Slaughter House',
    description:
      'Upon entering the combat state and each 4 seconds while in combat a blast around the character occurs, inflicting 100 physical damage to 5 targets maximum in 4m radius. Damage of the trait does not disperse while hitting multiple targets',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Extreme Measures',
    description:
      'If character has 50% or less HP, each attack additionally deals a blast around the target, inflicting 100 physical damage to 5 targets maximum in 4m radius. Damage of the trait does not disperse while hitting multiple targets (trait cooldown 1 second)',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Restrictive Strikes',
    description:
      'Attacks from the distance of 12m or more additionally create a blast, inflicting 100 physical damage to 5 targets maximum in 4m radius. Damage of the trait does not disperse while hitting multiple targets (trait cooldown 1 second)',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Sweeping Onslaught',
    description:
      'Increases the power of all skills by 5. The trait effect scales based on the character’s attack speed',
    categoryTier: 84,
    mechanics: [],
  },

  {
    group: 'onslaught',
    name: 'The First Blow',
    description:
      'The damage/healing of the first hit of any skill increases by 20% (trait cooldown 1 second)',
    categoryTier: 84,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'Blade Sharpening',
    description:
      'Each time you inflict non-critical hit you acquire an indefinite buff, increasing your critical hit chance by 5% (maximum 10 stacks). The buff is removed upon inflicting a critical hit',
    categoryTier: 84,
    mechanics: [],
  },
  {
    group: 'onslaught',
    name: 'The Return of The King',
    description:
      'Each time you kill an enemy player you acquire a buff, increasing output damage by 2% for 1 hour (maximum 50 stacks)',
    categoryTier: 84,
    mechanics: [],
  },

  // ! control
  {
    group: 'control',
    name: 'Jagged Blades',
    description:
      'Inflicting damage has a 2% chance to additionally inflict control Stagger (trait cooldown 3 seconds)',
    categoryTier: 4,
    mechanics: ['stagger'],
  },
  {
    group: 'control',
    name: 'Armor of Thorns',
    description:
      'Taking damage has a 5% chance to respond with inflicting control Stagger (trait cooldown 3 seconds)',
    categoryTier: 4,
    mechanics: ['stagger'],
  },
  {
    group: 'control',
    name: 'Trap Installation',
    description:
      'AOE attacks have a 10% chance to additionally inflict control Stagger (trait cooldown 3 seconds)',
    categoryTier: 4,
    mechanics: ['stagger'],
  },
  {
    group: 'control',
    name: 'Foot Control',
    description:
      'Upon Shift evasion you acquire a buff, granting a 50% chance to inflict control Stagger with next attack (trait cooldown 3 seconds)',
    categoryTier: 4,
    mechanics: ['stagger'],
  },
  {
    group: 'control',
    name: 'Concussion of Control',
    description:
      'Upon inflicting damage with the control Stagger of traits of the set (4) of the Control group: Jagged Blades, Armor of Thorns, Trap Installation, Foot Control, you also inflict targets with debuff Stun for 2 seconds',
    categoryTier: 12,
    mechanics: ['stun'],
  },
  {
    group: 'control',
    name: 'Rebound of Control',
    description:
      'Upon inflicting damage with the control Stagger of traits of the set (4) of the Control group: Jagged Blades, Armor of Thorns, Trap Installation, Foot Control, you also inflict 100 physical damage',
    categoryTier: 12,
    mechanics: [],
  },
  {
    group: 'control',
    name: 'Accuracy of Control',
    description:
      'The chance to inflict control Stagger of traits of the set (4) of the Control group: Jagged Blades, Armor of Thorns, Trap Installation, Foot Control, doubles',
    categoryTier: 12,
    mechanics: [],
  },
  {
    group: 'control',
    name: 'Stunning Strikes',
    description:
      'Upon critical hit there is a 5% chance to additionally inflict target with debuff Stun for 2 seconds (trait cooldown 3 seconds)',
    categoryTier: 24,
    mechanics: ['stun'],
  },
  {
    group: 'control',
    name: 'Stunning Craft',
    description:
      'Upon inflicting damage with back attacks there is a 5% chance to additionally inflict target with debuff Stun for 2 seconds (trait cooldown 3 seconds)',
    categoryTier: 24,
    mechanics: ['stun'],
  },
  {
    group: 'control',
    name: 'Stunning Distance',
    description:
      'Upon inflicting damage on distance of 15 or more meters there is a 5% chance to additionally inflict target with debuff Stun for 2 seconds (trait cooldown 3 seconds)',
    categoryTier: 24,
    mechanics: ['stun'],
  },
  {
    group: 'control',
    name: 'Lands of Stun',
    description:
      'AOE attacks has a 10% chance to additionally inflict targets with debuff Stun for 2 seconds (trait cooldown 3 seconds)',
    categoryTier: 24,
    mechanics: ['stun'],
  },
  {
    group: 'control',
    name: 'Defence Control',
    description:
      'Upon usage of the skill Shock Release you inflict 160 physical damage and control Knockdown to maximum 7 targets in 6m radius',
    categoryTier: 40,
    mechanics: ['Knockdown'],
  },
  {
    group: 'control',
    name: 'Offense Control',
    description:
      'Upon attacking targets within 5m radius you inflict 160 physical damage and control Knockdown to maximum 7 targets in 6m radius. (trait cooldown 15 seconds)',
    categoryTier: 40,
    mechanics: ['Knockdown'],
  },
  {
    group: 'control',
    name: 'Life Control',
    description:
      'Upon taking damage with 30% or less HP you inflict 160 physical damage and control Knockdown to maximum 7 targets in 6m radius. (trait cooldown 8 seconds)',
    categoryTier: 40,
    mechanics: ['Knockdown'],
  },
  {
    group: 'control',
    name: 'Powerful Stun',
    description:
      'The duration of debuff Stun of the trait of the set (12) of the Control group: Concussion of Control, as well as traits of the set (24) of the Control group: Stunning Strikes, Stunning Craft, Stunning Distance, Lands of Stun, doubles',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'control',
    name: 'Explosive Stun',
    description:
      'The debuff Stun of the trait of the set (12) of the Control group: Concussion of Control, as well as traits of the set (24) of the Control group: Stunning Strikes, Stunning Craft, Stunning Distance, Lands of Stun, is replaced with the explosion, inflicting 160 physical damage and control Knockdown to maximum 7 targets in 6m radius',
    categoryTier: 60,
    mechanics: ['Knockdown'],
  },
  {
    group: 'control',
    name: 'Damage Control',
    description:
      'Upon inflicting damage of the effects of traits of the set (40) of the Control Group: Defence Control, Offence Control, Life Control, you additionally inflict targets with debuff, increasing their incoming damage by 30% for 3 seconds',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'control',
    name: 'The Curse of Silence',
    description:
      'You acquire additional skill to your skillbar [The Curse of Silence]: You are cursing your target, inflicting debuff Silence to maximum 5 targets in 4m radius, forbidding their skill usage for 3 seconds (skill cooldown 60 seconds)',
    categoryTier: 84,
    mechanics: [
      'new debuff silence (forbids skills usage for certain seconds (3 seconds)',
    ],
  },
  {
    group: 'control',
    name: 'The Sphere of Control',
    description:
      'You acquire additional skill to your skillbar [The Sphere of Control]: You summon the sphere around yourself. For 5 seconds, any attack inflicted to you makes sphere to respond, inflicting 150 returning damage to the attacker and inflicting them with debuff Stun for 2 seconds (skill cooldown 60 seconds)',
    categoryTier: 84,
    mechanics: ['stun'],
  },
  {
    group: 'control',
    name: 'The Squall of Control',
    description:
      'You acquire additional skill to your skillbar [The Squall of Control]: You instantly inflict targets within 10m radius with control Knockdown (skill cooldown 60 seconds)',
    categoryTier: 84,
    mechanics: ['knockdown'],
  },

  // ! destiny
  {
    group: 'destiny',
    name: 'New Opportunities',
    description:
      'Upon killing an enemy there is a 2% chance to reset all skill cooldowns(trait cooldown 60 seconds)',
    categoryTier: 4,
    mechanics: [],
  },
  {
    group: 'destiny',
    name: 'Skyfall',
    description:
      'Upon killing an enemy there is a 2% chance to summon the meteor strike, inflicting 700 damage in wide radius around the character (trait cooldown 30 seconds)',
    categoryTier: 4,
    mechanics: [],
  },
  {
    group: 'destiny',
    name: 'Spoils of Rapture',
    description:
      'Upon killing an enemy there is a 2% chance to acquire a buff, increasing experience gain and droprate by 10% for 30 seconds',
    categoryTier: 4,
    mechanics: ['new buff increase experience gain and droprate by 10%'],
  },
  {
    group: 'destiny',
    name: 'Constant Luck',
    description:
      'The chance of traits of the set (4) of the Destiny group: New Opportunities, Skyfall, Spoils of Rapture, doubles',
    categoryTier: 12,
    mechanics: [],
  },
  {
    group: 'destiny',
    name: 'Adventurer Destiny',
    description:
      'Output damage decreases by 5%, but the experience gain and droprate increases by 10%',
    categoryTier: 12,
    mechanics: [],
  },
  {
    group: 'destiny',
    name: 'The Boon of Hunting Grounds',
    description:
      'While hunting monsters in the hunting ground you acquire a buff, increasing the maximum possible hunt rating for 40 minutes. Ratings increases experience gain and droprate by certain percent as follows: S: 8%, SS: 12%, SSS: 16%. You lose the buff upon death',
    categoryTier: 24,
    mechanics: ['new buff increase max hunt rating'],
  },
  {
    group: 'destiny',
    name: 'The Boon of Murderer',
    description:
      'Upon killing an enemy player you acquire a buff, increasing the experience gain and droprate for 40 minutes. The buff is further enhanced according to the number of kills performed by certain percent as follows: 3 kills: 8%, 4 kills: 12%, 5 kills: 16%. You lose the buff upon death',
    categoryTier: 24,
    mechanics: ['new buff increase max hunt rating'],
  },
  {
    group: 'destiny',
    name: 'The Boon of War',
    description:
      'Upon killing monsters you acquire an indefinite buff stacks. Upon acquiring certain amount of stacks you acquire a buff, increasing experience gain and droprate for 40 minutes. The buff is further enhanced accordning to the number of monsters slain by certain percent as follows: 20 monsters: 8%, 30 monsters: 12%, 40 monsters: 16%. You lose the buff upon death',
    categoryTier: 24,
    mechanics: ['new buff increase max hunt rating'],
  },
  {
    group: 'destiny',
    name: 'The Power of Destiny',
    description:
      'The effects of experience gain and droprate of traits of the set (24) of the Destiny group: The Boon of Hunting Ground, The Boon of Murderer, The Boon of War, increase by 1.5 times',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'destiny',
    name: 'The Time of Destiny',
    description:
      'The duration of effects of traits of the set (24) of the Destiny group: The Boon of Hunting Ground, The Boon of Murderer, The Boon of War, doubles',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'destiny',
    name: 'Comprehension of Destiny',
    description: 'The Artifact Power parameter increases by 40',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'destiny',
    name: 'Runic Destiny',
    description: 'All rune groups gain additional 12 points of characteristics',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'destiny',
    name: 'Tarot',
    description:
      'You acquire additional skill to your skillbar [Tarot]: You draw a tarot card, acquiring one of 2 following effects (skill cooldown 10 seconds): 1) You acquire a debuff, decreasing the 1 next attack damage by 50% for 5 seconds. 2) You acquire a buff, increasing the critical hit chance of the 1 next attack by 100% for 5 seconds',
    categoryTier: 84,
    mechanics: ['decrease damage', 'increase critical strike chance'],
  },
  {
    group: 'destiny',
    name: 'Roll for Destiny',
    description:
      'You acquire additional skill to your skillbar [Roll for Destiny]: You roll a dice, acquiring one of 6 following effects (skill cooldown 60 seconds): 1) You acquire a buff, increasing output damage by 50% for 10 seconds. 2) You acquire a debuff, increasing incoming damage by 50% for 10 seconds. 3) In radius around the character the explosion occurs, inflicting 600 physical damage and control Knockdown. The character is also inflicted with control Knockdown. The damage of the trait is not dispersed while hitting multiple targets. 4)You acquire a debuff Silence for 4 seconds. 5) You restore 100% of stamina and resource. 6) All skills cooldowns with cooldown less than 1 minutes are reset',
    categoryTier: 84,
    mechanics: [
      'damage increase',
      'debuff incoming damage increase',
      'knockdown',
      'debuff silence',
    ],
  },
  {
    group: 'destiny',
    name: 'The Wheel of Fate',
    description:
      'You acquire additional skill to your skillbar [The Wheel of Fate]: You turn the wheel, acquiring one of 2 following effects (skill cooldown 60 seconds): 1) All skills cooldowns with cooldown less than 1 minutes are reset. 2) All skills with ongoing cooldowns have their current cooldowns increased by 20%',
    categoryTier: 84,
    mechanics: [],
  },

  // ! support
  {
    group: 'support',
    name: 'Splash of Attack',
    description:
      'Upon attacking the splash occurs around the target, healing you and your allies in 10m radius around the target by 50 (trait cooldown 5 seconds)',
    categoryTier: 4,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'Splash of Weakness',
    description:
      'Upon the attacking the target the splash occurs, inflicting a debuff to 5 targets maximum in 5m radius. The debuff increases target incoming damage by 5% for 10 seconds (trait cooldown 5 seconds)',
    categoryTier: 4,
    mechanics: ['debuff incoming damage increase'],
  },
  {
    group: 'support',
    name: 'Splash of Healing',
    description:
      'Upon casting any ability the splash occurs, healing you and your allies in 10m radius around yourself by 50 (trait cooldown 5 seconds)',
    categoryTier: 4,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'Mending Bond',
    description: 'You acquire 30% of the output healing done to allies',
    categoryTier: 12,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'Purification',
    description:
      'Upon healing, including yourself, you cleanse 1 debuff of the target (trait cooldown 2 seconds, the trait works only with direct healing done)',
    categoryTier: 12,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'Inspiration',
    description:
      'Upon any positive action done to allies you acquire a buff, increasing your critical hit chance by 2% for 10 seconds (maximum 10 stacks, trait cooldown 1 second)',
    categoryTier: 12,
    mechanics: ['critical chance increase'],
  },
  {
    group: 'support',
    name: 'Sphere of Offence',
    description:
      'Upon the attack there is a 2% chance to spawn a sphere, which can be acquired by you or your allies. The sphere acquisition grants a buff, increasing output damage/healing by 10% for 10 seconds',
    categoryTier: 24,
    mechanics: ['buff damage increase'],
  },
  {
    group: 'support',
    name: 'Sphere of Defence',
    description:
      'Upon the attack there is a 2% chance to spawn a sphere, which can be acquired by you or your allies. The sphere acquisition grants a buff in form of 150 points of shield for 10 seconds (trait cooldown 1 seconds)',
    categoryTier: 24,
    mechanics: ['buff shield'],
  },
  {
    group: 'support',
    name: 'Sphere of Resolve',
    description:
      'Upon the attack there is a 2% chance to spawn a sphere, which can be acquired by you or your allies. The sphere acquisition grants a buff, gaining immunity to any control mechanics for 3 seconds (trait cooldown 3 seconds)',
    categoryTier: 24,
    mechanics: ['immunity to any control mechanics'],
  },
  {
    group: 'support',
    name: 'Sphere of Recovery',
    description:
      'Upon the attack there is a 2% chance to spawn a sphere, which can be acquired by you or your allies. The sphere acquisition heals a character by 100 (trait cooldown 1 second)',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'Sphere Enhancement',
    description:
      'The effects of spheres of traits of the set (24) of the Support group: Sphere of Offence, Sphere of Defence, Sphere of Resolve, Sphere of Recovery, are enhanced as follows: 1) Sphere of Offence: additional damage/healing increase by 5%. 2) Sphere of Defence: shield effect is increased by 50%. 3) Sphere of Resolve: buff duration is increased by 1.5 seconds. 4) Sphere of Recovery: The healing done becomes AOE, affecting maximum of 5 targets in 10m radius of acquisition',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'Sphere Generation',
    description:
      'The spawning chance of spheres of traits of the set (24) of the Support group: Sphere of Offence, Sphere of Defence, Sphere of Resolve, Sphere of Recovery, doubles',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'Sphere Conflux',
    description:
      'Upon entering the combat all sphere effects of traits of the set (24) of the Support group: Sphere of Offence, Sphere of Defence, Sphere of Resolve, Sphere of Recovery, occur for you and your party members in 24m radius around yourself',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'The Boon of Flesh',
    description:
      'The parameters of strength, intellect, agility and health for you and your party members in 24m radius around yourself increase by 8%',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'The Boon of Spirit',
    description:
      'Each 10 seconds you and your party member in 24m radius around yourself restore 100 of the resource',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'The Boon of Sense',
    description:
      'You and your allies in 24m radius around yourself can detect targets with the buff Invisibility in 30m radius',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'The Shield of Magic',
    description:
      'You acquire additional skill to your skillbar [The Shield of Magic]: You install the field of magic protection with 8m effective radius. For 6 seconds maximum 5 targets including yourself and your party members acquire an effect, granting immunity to any magic damage (skill cooldown 60 seconds)',
    categoryTier: 84,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'The Shield of Impact',
    description:
      'You acquire additional skill to your skillbar [The Shield of Impact]: You install the field of impact protection with 8m effective radius. For 6 seconds maximum 5 targets including yourself and your party members acquire an effect, granting immunity to any physical damage (skill cooldown 60 seconds)',
    categoryTier: 84,
    mechanics: [],
  },
  {
    group: 'support',
    name: 'Ressurection',
    description:
      'You acquire additional skill to your skillbar [Ressurection]: you ressurect your ally on distance of 18m with 50% HP and 0% resource (skill cooldown 60 seconds)',
    categoryTier: 84,
    mechanics: [],
  },

  // ! defense
  {
    group: 'defense',
    name: 'Titan Protection',
    description: 'You take 10% less damage of monster type “Boss”',
    categoryTier: 4,
    mechanics: ['buff damage decrease'],
  },
  {
    group: 'defense',
    name: 'Magic Shield',
    description: 'All damage taken to the shield is decreased by 10%',
    categoryTier: 4,
    mechanics: ['buff damage decrease'],
  },
  {
    group: 'defense',
    name: 'Determination',
    description:
      'All damage taken while in the state of control mechanics is decreased by 10%',
    categoryTier: 4,
    mechanics: ['buff damage decrease'],
  },
  {
    group: 'defense',
    name: 'Critical Shield',
    description: 'All critical damage taken is decreased by 10%',
    categoryTier: 4,
    mechanics: ['buff damage decrease'],
  },
  {
    group: 'defense',
    name: 'Shield of Battle',
    description:
      'Each time inflicting critical hit you acquire an indefinite buff, granting the shield effect of 15 (maximum 10 stacks, trait cooldown 1 second)',
    categoryTier: 12,
    mechanics: ['buff shield'],
  },
  {
    group: 'defense',
    name: 'Shield of Cunning',
    description:
      'Each time inflicting damage with back attacks you acquire an indefinite buff, granting the shield effect of 15 (maximum 10 stacks, trait cooldown 1 second)',
    categoryTier: 12,
    mechanics: ['buff shield'],
  },
  {
    group: 'defense',
    name: 'Shield of Restraint',
    description:
      'Each time inflicting damage on distance of 12m or more you acquire an indefinite buff, granting the shield effect of 15 (maximum 10 stacks, trait cooldown 1 second)',
    categoryTier: 12,
    mechanics: ['buff shield'],
  },
  {
    group: 'defense',
    name: 'Shield of Evasion',
    description:
      'Upon taking damage in shield or successful evasion you acquire an indefinite buff, granting the shield effect of 15',
    categoryTier: 12,
    mechanics: ['buff shield'],
  },
  {
    group: 'defense',
    name: 'Life Consumption',
    description:
      'Each time inflicting damage to a target you restore 10 HP (trait cooldown 1 second, trait works only with direct damage)',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'defense',
    name: 'Battle Mending',
    description:
      'Each time taking damage you restore 20 HP (trait cooldown 1 second, trait works only with direct damage)',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'defense',
    name: 'Evasive Recovery',
    description:
      'Upon taking damage in shield or successful evasion, you restore 15 HP (trait cooldown 1 second)',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'defense',
    name: 'Meditation',
    description:
      'While standing still, you acquire an indefinite buff,  restoring 30 HP each second. Movement removes the buff',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'defense',
    name: 'Critical Evasion',
    description:
      'Upon taking critical hit you acquire a buff, increasing your critical hit evasion by 10% for 10 seconds (maximum 5 stacks)',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'defense',
    name: 'Shield of Projectile',
    description:
      'Upon taking damage of Projectile attacks you acquire a buff, decreasing incoming Projectile damage by 10% for 10 seconds (maximum 5 stacks)',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'defense',
    name: 'Trap Shield',
    description:
      'Upon taking damage of AOE attacks you acquire a buff, decreasing incoming AOE damage by 10% for 10 seconds (maximum 5 stacks)',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'defense',
    name: 'Instant Protection',
    description:
      'Upon taking any damage you acquire a buff, decreasing incoming damage by 5% for 1 second (maximum 10 stacks)',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'defense',
    name: 'Counterprotection',
    description:
      'Each time an enemy shields the attack they take 150 physical damage. The damage taken cannot be shielded (trait cooldown 3 seconds)',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'defense',
    name: 'Counterevasion',
    description:
      'Each time evading an enemy’s attack you fire a Target Projectile, inflicting 150 physical damage (trait cooldown 3 seconds). The damage done by the projectile cannot be evaded by the enemy',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'defense',
    name: 'Ice Shield',
    description:
      'Upon taking damage there is a 1% chance to fire a Target Projectile, inflicting target with a debuff Glaciation for 3 seconds',
    categoryTier: 60,
    mechanics: ['debuff glaciation'],
  },
  {
    group: 'defense',
    name: 'The Boon of Guardian',
    description:
      'Upon taking damage there is a 10% chance to acquire a buff, decreasing incoming damage by 20% and granting the shield effect of 350 (trait cooldown 30 seconds)',
    categoryTier: 84,
    mechanics: ['buff decrease damage', 'buff shield effect'],
  },
  {
    group: 'defense',
    name: 'The Boon of Immortality',
    description:
      'Upon taking damage while having 10% or less HP you acquire a buff, granting immunity to all damage for 10 seconds (trait cooldown 60 seconds)',
    categoryTier: 84,
    mechanics: ['buff immunity to all damage'],
  },
  {
    group: 'defense',
    name: 'The Veil of Protection',
    description:
      'Upon taking magic damage there is a 2% chance to acquire a buff, cleansing all debuffs and granting magic damage immunity for 5 seconds (trait cooldown 10 seconds)',
    categoryTier: 84,
    mechanics: [
      'new buff cleanse all debuff, and grants magic damage immunity',
    ],
  },
  {
    group: 'defense',
    name: 'The Boon of Resolve',
    description:
      'You acquire an effect, granting all control mechanics immunity while casting any ability with cooldown 5 seconds or more',
    categoryTier: 84,
    mechanics: ['new effect grants control mechanics immunity while casting'],
  },

  // ! awakening
  // ? Atention check mechanics for all those traits since they are kind different from other groups
  {
    group: 'awakening',
    name: 'Glass Cannon',
    description:
      'Increases output damage/healing by 8%, but increases incoming damage by 4%',
    categoryTier: 4,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'Speed of Light',
    description:
      'Increases the movement speed by 16, but decreases the attack speed by 4%',
    categoryTier: 4,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'Diamond Skin',
    description:
      'Decreases incoming damage by 8%, but increases incoming critical damage by 12%',
    categoryTier: 4,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'Insight',
    description:
      'Decreases cooldowns for all skills by 8%, but decreases the Artifact Power by 12',
    categoryTier: 4,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'True Awakening',
    description:
      'Traits of the set (4) of the Awakening group: Glass Cannon, Speed of Light, Diamond Skin, Insight, no longer have negatives effects to them',
    categoryTier: 12,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'Enhanced Awakening',
    description:
      'Positive effects of traits of the set (4) of the Awakening group: Glass Cannon, Speed of Light, Diamond Skin, Insight, increase by 1.5 times',
    categoryTier: 12,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'Dual Awakening',
    description:
      'Both positive and negative effects of traits of the set (4) of the Awakening group: Glass Cannon, Speed of Light, Diamond Skin, Insight, increase by 2 times',
    categoryTier: 12,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'First Step',
    description:
      'Upon entering a combat you acquire buff/debuff, granting immunity to all control mechanics, but restricting the usage of Shift evasion for 4 seconds',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'First Blood',
    description:
      'Upon entering a combat you acquire buff/debuff, increasing output damage/healing by 15%, but restricting the usage of Shift evasion for 4 seconds',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'First Impulse',
    description:
      'Upon entering a combat you acquire buff/debuff, removing resource consumption, but restricting the usage of Shift evasion for 4 seconds',
    categoryTier: 24,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'The Point of Awakening',
    description:
      'While standing still as you inflict damage you acquire a buff, increasing output damage/healing by 2% for 10 seconds (maximum 10 stacks). The buff is removed upon movement',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'Harmony of Elements',
    description:
      'Upon the attack you acquire an indefinite buff, increasing output damage/healing for all skills of other elements by 20%, while the damage/healing for skills with the same element as the initial attack have their ouput damage/healing decreased by 10%',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'The Fury of Awakening',
    description:
      'Upon taking damage you acquire a buff “The Fury of Awakening” for 10 seconds. “The Fury of Awakening”: upon reaching 10 stacks of the buff an explosion occurs, inflicting 300 damage and control Knockdown to maximum 7 targets in 8m radius. Damage of the trait does not disperse while hitting multiple targets (damage of the trait also ignores any shield effect). After the explosion the character cannot acquire stacks of the buff for 15 seconds',
    categoryTier: 40,
    mechanics: ['knockdown'],
  },
  {
    group: 'awakening',
    name: 'The Moment of Awakening',
    description:
      'Upon entering a combat and each 5 seconds since you acquire a buff, increasing output damage/healing by 2% for 10 seconds (maximum 10 stacks). Each time you take damage you lose 1 stack of the buff',
    categoryTier: 40,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'Shock Awakening',
    description: 'Your skill Shock Release gains +1 charge',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'Unstable Awakening',
    description:
      'Decreases the cooldown for the skill Shock Release by 50%, but the skill no longer grants the immunity for any control mechanics',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'The Blood of Awakening',
    description:
      'Decreases the cooldown for the skill Shock Release by 100%, but decreases the maximum HP of the character by 50%',
    categoryTier: 60,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'The Veil of Darkness',
    description:
      'You acquire additional skill to your skillbar [The Veil of Darkness]: your attack speed as well as output damage/healing increases by 20%. Each 2 seconds you lose 3% HP. The skill works as a toggle ability, like an aura.',
    categoryTier: 84,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'The Burst of Darkness',
    description:
      'You acquire additional skill to your skillbar [The Burst of Darkness]: Each 2 seconds you release a wave of dark energy in front of you, inflicting 100 damage to maximum 5 targets. Each 2 seconds you lose 3% HP. The skill works as a toggle ability, like an aura. The damage type of the skill is not specified.',
    categoryTier: 84,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'Dark Wraith',
    description:
      'You acquire additional skill to your skillbar [Dark Wraith]: You transform into wraith, gaining immunity to any damage as well as any control mechanics for 10 seconds. The skill can be used even in the state of control mechanics (skill cooldown 30 seconds). Each 2 seconds while transformed you lose 3% HP (you can stop the ability and transform back prematurely). Upon transforming back you acquire a debuff Fear for 2 seconds (in this particular case the debuff cannot denied by any immunity mechanic). You can sprint while transformed into wraith',
    categoryTier: 84,
    mechanics: [],
  },
  {
    group: 'awakening',
    name: 'Dark Pact',
    description:
      'You acquire additional skill to your skillbar [Dark Pact]: you establish a bond between yourself and target ally, decreasing cooldowns for both of you by 1 second each 0.5 seconds (skill cooldown 25 seconds)',
    categoryTier: 84,
    mechanics: [],
  },
];
