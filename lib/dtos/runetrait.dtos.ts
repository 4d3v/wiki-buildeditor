import { Expose } from 'class-transformer';
import {
  IsDefined,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IRunetrait } from '../models/Runetrait';
import { RunestoneTraitGroup } from '../models/sharedProps';

export class CreateRunestraitDto {
  @IsDefined()
  @Expose()
  @IsString()
  beid!: IRunetrait['beid'];

  @IsDefined()
  @Expose()
  @IsIn([
    RunestoneTraitGroup.ONSLAUGHT,
    RunestoneTraitGroup.CONTROL,
    RunestoneTraitGroup.DESTINY,
    RunestoneTraitGroup.SUPPORT,
    RunestoneTraitGroup.DEFENSE,
    RunestoneTraitGroup.AWAKENING,
    RunestoneTraitGroup.VOID,
  ])
  group!: IRunetrait['group'];

  @IsDefined()
  @Expose()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  name!: IRunetrait['name'];

  @IsDefined()
  @Expose()
  @IsString()
  description!: IRunetrait['description'];

  @IsDefined()
  @Expose()
  @IsNumber()
  categoryTier!: IRunetrait['categoryTier'];

  @IsOptional()
  @Expose()
  @IsString()
  slug!: IRunetrait['slug'];
}

export class UpdateRunetraitDto {
  @IsOptional()
  @Expose()
  @IsString()
  beid?: IRunetrait['beid'];

  @IsOptional()
  @Expose()
  @IsIn([
    RunestoneTraitGroup.ONSLAUGHT,
    RunestoneTraitGroup.CONTROL,
    RunestoneTraitGroup.DESTINY,
    RunestoneTraitGroup.SUPPORT,
    RunestoneTraitGroup.DEFENSE,
    RunestoneTraitGroup.AWAKENING,
    RunestoneTraitGroup.VOID,
  ])
  group?: IRunetrait['group'];

  @IsOptional()
  @Expose()
  @IsString()
  name?: IRunetrait['name'];

  @IsOptional()
  @Expose()
  @IsString()
  description?: IRunetrait['description'];

  @IsOptional()
  @Expose()
  @IsNumber()
  categoryTier?: IRunetrait['categoryTier'];

  @IsOptional()
  @Expose()
  @IsString()
  slug?: IRunetrait['slug'];
}
