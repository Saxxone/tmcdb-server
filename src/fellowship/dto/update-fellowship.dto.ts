import { PartialType } from '@nestjs/mapped-types';
import { CreateFellowshipDto } from './create-fellowship.dto';

export class UpdateFellowshipDto extends PartialType(CreateFellowshipDto) {}
