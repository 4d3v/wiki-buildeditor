import {
  IsDefined,
  IsIn,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Expose } from 'class-transformer';
import { ISkills } from '../models/Skills';
import { DmgType } from '../models/sharedProps';

export class CreateSkillDto {
  @IsDefined()
  @Expose()
  @IsString()
  beid!: ISkills['beid'];

  @IsDefined()
  @Expose()
  @IsString()
  name!: ISkills['name'];

  @IsOptional()
  @Expose()
  @IsString()
  slug!: ISkills['slug'];

  @IsDefined()
  @Expose()
  @IsIn([
    DmgType.PHYSICAL,
    DmgType.FIRE,
    DmgType.COLD,
    DmgType.LIGHTNING,
    DmgType.NATURE,
    DmgType.LIGHT,
    DmgType.DARKNESS,
  ])
  dmgtype!: ISkills['dmgtype'];

  @IsDefined()
  @Expose()
  @IsNumber({}, { each: true })
  dps!: ISkills['dps'];

  @IsDefined()
  @Expose()
  @IsNumber()
  range!: ISkills['range'];

  @IsDefined()
  @Expose()
  @IsNumber()
  cooldown!: ISkills['cooldown'];

  @IsDefined()
  @Expose()
  @IsNumber()
  resource!: ISkills['resource'];

  @IsOptional()
  @Expose()
  @IsString()
  aoe!: ISkills['aoe'];

  @IsDefined()
  @Expose()
  @IsString()
  description!: ISkills['description'];

  @IsDefined()
  @Expose()
  @IsString()
  type!: ISkills['type'];

  @IsDefined()
  @Expose()
  @IsString()
  usage!: ISkills['usage'];

  @IsOptional()
  @Expose()
  @IsString({ each: true })
  details!: ISkills['details'];

  @IsOptional()
  @Expose()
  @IsMongoId()
  archetype!: ISkills['archetype'];

  @Expose()
  @IsOptional()
  artifacts!: ISkills['artifacts'];

  @Expose()
  @IsOptional()
  @IsMongoId({ each: true })
  mechanics!: ISkills['mechanics'];
}

export class UpdateSkillDto {
  @IsOptional()
  @Expose()
  @IsString()
  beid!: ISkills['beid'];

  @IsOptional()
  @Expose()
  @IsString()
  name!: ISkills['name'];

  @IsOptional()
  @Expose()
  @IsString()
  slug!: ISkills['slug'];

  @IsOptional()
  @Expose()
  @IsIn([
    DmgType.PHYSICAL,
    DmgType.FIRE,
    DmgType.COLD,
    DmgType.LIGHTNING,
    DmgType.NATURE,
    DmgType.LIGHT,
    DmgType.DARKNESS,
  ])
  dmgtype!: ISkills['dmgtype'];

  @IsOptional()
  @Expose()
  @IsNumber({}, { each: true })
  dps!: ISkills['dps'];

  @IsOptional()
  @Expose()
  @IsNumber()
  range!: ISkills['range'];

  @IsOptional()
  @Expose()
  @IsNumber()
  cooldown!: ISkills['cooldown'];

  @IsOptional()
  @Expose()
  @IsNumber()
  resource!: ISkills['resource'];

  @IsOptional()
  @Expose()
  @IsString()
  aoe!: ISkills['aoe'];

  @IsOptional()
  @Expose()
  @IsString()
  description!: ISkills['description'];

  @IsOptional()
  @Expose()
  @IsString()
  type!: ISkills['type'];

  @IsOptional()
  @Expose()
  @IsString()
  usage!: ISkills['usage'];

  @IsOptional()
  @Expose()
  @IsString({ each: true })
  details!: ISkills['details'];

  @IsOptional()
  @Expose()
  @IsMongoId()
  archetype!: ISkills['archetype'];

  @Expose()
  @IsOptional()
  artifacts!: ISkills['artifacts'];

  @Expose()
  @IsOptional()
  @IsMongoId({ each: true })
  mechanics!: ISkills['mechanics'];
}
