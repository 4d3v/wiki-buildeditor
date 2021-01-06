import { IsDefined, IsIn, IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { IArchetype, Role } from '../models/Archetype';

export class CreateArchetypeDto {
  @IsDefined()
  @Expose()
  @IsString()
  beid!: IArchetype['beid'];

  @IsDefined()
  @Expose()
  @IsString()
  name!: IArchetype['name'];

  @IsOptional()
  @Expose()
  @IsString()
  slug!: IArchetype['slug'];

  @IsDefined()
  @Expose()
  @IsString()
  description!: IArchetype['description'];

  @IsDefined()
  @Expose()
  @IsIn([Role.TANK, Role.DPS, Role.SUPPORT])
  role!: IArchetype['role'];

  @IsOptional()
  @Expose()
  skills!: IArchetype['skills'];
}

export class UpdateArchetypeDto {
  @IsOptional()
  @Expose()
  @IsString()
  beid?: IArchetype['beid'];

  @IsOptional()
  @Expose()
  @IsString()
  name?: IArchetype['name'];

  @IsOptional()
  @Expose()
  @IsString()
  slug?: IArchetype['slug'];

  @IsOptional()
  @Expose()
  @IsString()
  description?: IArchetype['description'];

  @IsOptional()
  @Expose()
  @IsIn([Role.TANK, Role.DPS, Role.SUPPORT])
  role?: IArchetype['role'];

  @IsOptional()
  @Expose()
  skills?: IArchetype['skills'];
}
