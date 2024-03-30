import { PartialType } from '@nestjs/mapped-types';
import { CreateRespondentsDto } from './create-respondents.dto';

export class UpdateRespondentsDto extends PartialType(CreateRespondentsDto) {}