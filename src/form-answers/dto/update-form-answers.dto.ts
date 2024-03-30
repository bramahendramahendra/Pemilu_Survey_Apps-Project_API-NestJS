import { PartialType } from '@nestjs/mapped-types';
import { CreateFormAnswersDto } from './create-form-answers.dto';

export class UpdateFormAnswersDto extends PartialType(CreateFormAnswersDto) {}