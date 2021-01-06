import { Expose } from 'class-transformer';
import { IsDefined, IsIn, IsOptional, IsString } from 'class-validator';
import { IMechanic, MechanicProperty, MechanicType } from '../models/Mechanic';

export class CreateMechanicDto {
  @IsDefined()
  @Expose()
  @IsIn([
    MechanicType.BUFF,
    MechanicType.DEBUFF,
    MechanicType.CONTROL,
    MechanicType.EFFECT,
  ])
  type!: IMechanic['type'];

  @IsOptional()
  @Expose()
  @IsString()
  typeDescription!: IMechanic['typeDescription'];

  @IsDefined()
  @Expose()
  @IsIn([
    MechanicProperty.MOVEMENT_SPEED_INCREASE,
    MechanicProperty.DAMAGE_INCREASE,
    MechanicProperty.ATTACK_SPEED_INCREASE,
    MechanicProperty.INCREASE_HP_POOL,
    MechanicProperty.INCREASE_CRITICAL_CHANCE,
    MechanicProperty.FRENZY,
    MechanicProperty.SHIELD,
    MechanicProperty.IMMUNITY_TO_DMG,
    MechanicProperty.CLEANSE,
    MechanicProperty.SLOW,
    MechanicProperty.ELECTROCUTE,
    MechanicProperty.FREEZING,
    MechanicProperty.SLEEP,
    MechanicProperty.STUN,
    MechanicProperty.GLACIATION,
    MechanicProperty.ROOT,
    MechanicProperty.INCREASE_INCOMING_DMG,
    MechanicProperty.FEAR,
    MechanicProperty.CONCUSSION,
    MechanicProperty.ARMOR_CRACK,
    MechanicProperty.DAMAGE_PER_SECOND,
    MechanicProperty.TAUNT,
    MechanicProperty.STAGGER,
    MechanicProperty.AIRBORNE,
    MechanicProperty.KNOCKDOWN,
    MechanicProperty.KNOCKBACK,
    MechanicProperty.PULL,
    MechanicProperty.TETHER,
    MechanicProperty.BLESSING_OF_THE_FIRE,
    MechanicProperty.INVISIBILITY,
    MechanicProperty.DODGE,
    MechanicProperty.DAMAGE_DECREASE,
    MechanicProperty.IMMUNITY_TO_KST,
    MechanicProperty.BLOCK,
    MechanicProperty.IMMUNITY_TO_DEBUFF_CC,
    MechanicProperty.BERSERK,
    MechanicProperty.DAMAGE_TO_HP,
    MechanicProperty.LIFE_STEAL,
    MechanicProperty.INVULNERABILITY,
    MechanicProperty.SACRED_SHIELD,
  ])
  property!: IMechanic['property'];

  @IsOptional()
  @Expose()
  @IsString()
  propertyDescription!: IMechanic['propertyDescription'];

  @IsOptional()
  @Expose()
  @IsString()
  slug!: IMechanic['propertyDescription'];
}

export class UpdateMechanicDto {
  @IsOptional()
  @Expose()
  @IsIn([
    MechanicType.BUFF,
    MechanicType.DEBUFF,
    MechanicType.CONTROL,
    MechanicType.EFFECT,
  ])
  type?: IMechanic['type'];

  @IsOptional()
  @Expose()
  @IsString()
  typeDescription?: IMechanic['typeDescription'];

  @IsOptional()
  @Expose()
  @IsIn([
    MechanicProperty.MOVEMENT_SPEED_INCREASE,
    MechanicProperty.DAMAGE_INCREASE,
    MechanicProperty.ATTACK_SPEED_INCREASE,
    MechanicProperty.INCREASE_HP_POOL,
    MechanicProperty.INCREASE_CRITICAL_CHANCE,
    MechanicProperty.FRENZY,
    MechanicProperty.SHIELD,
    MechanicProperty.IMMUNITY_TO_DMG,
    MechanicProperty.CLEANSE,
    MechanicProperty.SLOW,
    MechanicProperty.ELECTROCUTE,
    MechanicProperty.FREEZING,
    MechanicProperty.SLEEP,
    MechanicProperty.STUN,
    MechanicProperty.GLACIATION,
    MechanicProperty.ROOT,
    MechanicProperty.INCREASE_INCOMING_DMG,
    MechanicProperty.FEAR,
    MechanicProperty.CONCUSSION,
    MechanicProperty.ARMOR_CRACK,
    MechanicProperty.DAMAGE_PER_SECOND,
    MechanicProperty.TAUNT,
    MechanicProperty.STAGGER,
    MechanicProperty.AIRBORNE,
    MechanicProperty.KNOCKDOWN,
    MechanicProperty.KNOCKBACK,
    MechanicProperty.PULL,
    MechanicProperty.TETHER,
    MechanicProperty.BLESSING_OF_THE_FIRE,
    MechanicProperty.INVISIBILITY,
    MechanicProperty.DODGE,
    MechanicProperty.DAMAGE_DECREASE,
    MechanicProperty.IMMUNITY_TO_KST,
    MechanicProperty.BLOCK,
    MechanicProperty.IMMUNITY_TO_DEBUFF_CC,
    MechanicProperty.BERSERK,
    MechanicProperty.DAMAGE_TO_HP,
    MechanicProperty.LIFE_STEAL,
    MechanicProperty.INVULNERABILITY,
    MechanicProperty.SACRED_SHIELD,
  ])
  property?: IMechanic['property'];

  @IsOptional()
  @Expose()
  @IsString()
  propertyDescription?: IMechanic['propertyDescription'];

  @IsOptional()
  @Expose()
  @IsString()
  slug?: IMechanic['propertyDescription'];
}
