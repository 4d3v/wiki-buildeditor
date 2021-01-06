import { Expose } from 'class-transformer';
import {
  IsDefined,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { IRunestone } from '../models/Runestone';
import { RunestoneTraitGroup } from '../models/sharedProps';

export class CreateRunestoneDto {
  @IsDefined()
  @Expose()
  @IsString()
  beid!: IRunestone['beid'];

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
  group!: IRunestone['group'];

  @IsDefined()
  @Expose()
  @IsString()
  description!: IRunestone['description'];

  @IsDefined()
  @Expose()
  @IsNumber()
  @Min(1, { message: 'Runestone tier must be between 1 and 3' })
  @Max(5, { message: 'Runestone tier must be between 1 and 3' })
  tier!: IRunestone['tier'];

  @IsDefined()
  @Expose()
  stats!: IRunestone['stats'];

  @IsOptional()
  @Expose()
  @IsString()
  slug!: IRunestone['slug'];
}

export class UpdateRunestoneDto {
  @IsOptional()
  @Expose()
  @IsString()
  beid?: IRunestone['beid'];

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
  group!: IRunestone['group'];

  @IsOptional()
  @Expose()
  @IsString()
  description?: IRunestone['description'];

  @IsDefined()
  @Expose()
  @IsNumber()
  @Min(1, { message: 'Runestone tier must be between 1 and 3' })
  @Max(5, { message: 'Runestone tier must be between 1 and 3' })
  tier!: IRunestone['tier'];

  @IsOptional()
  @IsDefined()
  @Expose()
  stats?: IRunestone['stats'];

  @IsOptional()
  @Expose()
  @IsString()
  slug?: IRunestone['slug'];
}
