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
import { Branch, SephType, ISephirot } from '../models/Sephirot';

export class CreateSephirotDto {
  @IsDefined()
  @Expose()
  @IsString()
  beid!: ISephirot['beid'];

  @IsDefined()
  @Expose()
  @IsIn([Branch.CHASE, Branch.MIND, Branch.DEXTERITY])
  branch!: ISephirot['branch'];

  @IsDefined()
  @Expose()
  @IsIn([
    SephType.STARTING,
    SephType.MINOR,
    SephType.MAJOR,
    SephType.TRANSCENDENT,
  ])
  sephType!: ISephirot['sephType'];

  @IsDefined()
  @Expose()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  name!: ISephirot['name'];

  @IsDefined()
  @Expose()
  @IsString()
  details!: ISephirot['details'];

  @IsDefined()
  @Expose()
  @IsNumber()
  talentPoints!: ISephirot['talentPoints'];

  @IsOptional()
  @Expose()
  @IsString()
  slug!: ISephirot['slug'];
}

export class UpdateSephirotDto {
  @IsOptional()
  @Expose()
  @IsString()
  beid!: ISephirot['beid'];

  @IsOptional()
  @Expose()
  @IsIn([Branch.CHASE, Branch.MIND, Branch.DEXTERITY])
  branch?: ISephirot['branch'];

  @IsOptional()
  @Expose()
  @IsIn([
    SephType.STARTING,
    SephType.MINOR,
    SephType.MAJOR,
    SephType.TRANSCENDENT,
  ])
  sephType?: ISephirot['sephType'];

  @IsOptional()
  @Expose()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  name?: ISephirot['name'];

  @IsOptional()
  @Expose()
  @IsString()
  details?: ISephirot['details'];

  @IsOptional()
  @Expose()
  @IsNumber()
  talentPoints?: ISephirot['talentPoints'];

  @IsOptional()
  @Expose()
  @IsString()
  slug?: ISephirot['slug'];
}
