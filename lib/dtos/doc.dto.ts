import { CreateArchetypeDto, UpdateArchetypeDto } from './archetypes.dtos';
import CreateArtifactDto from './artifacts.dtos';
import { CreateMechanicDto, UpdateMechanicDto } from './mechanics.dtos';
import { CreateRunestoneDto, UpdateRunestoneDto } from './runestones.dtos';
import { CreateRunestraitDto, UpdateRunetraitDto } from './runetrait.dtos';
import { CreateSephirotDto, UpdateSephirotDto } from './sephirot.dto';
import { CreateSkillDto, UpdateSkillDto } from './skills.dto';

export type CreateDocDto =
  | CreateArchetypeDto
  | CreateSkillDto
  | CreateArtifactDto
  | CreateMechanicDto
  | CreateRunestoneDto
  | CreateRunestraitDto
  | CreateSephirotDto;

export type UpdateDocDto =
  // | UpdateArchetypeDto
  // | UpdateSkillDto
  // | UpdateMechanicDto
  // | UpdateRunestoneDto
  // | UpdateRunetraitDto
  UpdateSephirotDto;
