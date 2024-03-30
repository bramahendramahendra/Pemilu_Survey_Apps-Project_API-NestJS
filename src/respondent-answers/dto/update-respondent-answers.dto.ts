import { PartialType } from '@nestjs/mapped-types';
import { CreateRespondentAnswersDto } from './create-respondent-answers.dto';

export class UpdateRespondentAnswersDto extends PartialType(CreateRespondentAnswersDto) {}