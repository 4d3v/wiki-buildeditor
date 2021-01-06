import { Expose } from 'class-transformer';
import {
  IsDefined,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Grade, IArtifact } from '../models/Artifact';
import { DmgType } from '../models/sharedProps';

export default class CreateArtifactDto {
  @IsDefined()
  @Expose()
  @IsString()
  name!: IArtifact['name'];

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
  dmgtype!: IArtifact['dmgtype'];

  @IsDefined()
  @Expose()
  @IsIn([Grade.COMMON, Grade.UNCOMMON, Grade.RARE, Grade.HEROIC, Grade.MYTHIC])
  grade!: IArtifact['grade'];

  @IsDefined()
  @Expose()
  @IsNumber()
  artifactPower!: IArtifact['artifactPower'];

  @IsOptional()
  @Expose()
  @IsString({ each: true })
  details!: IArtifact['details'];
}
