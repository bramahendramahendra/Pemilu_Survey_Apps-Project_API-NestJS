import { PartialType } from '@nestjs/mapped-types';
import { CreateFormQuestionsDto } from './create-form-questions.dto';

export class UpdateFormQuestionsDto extends PartialType(CreateFormQuestionsDto) {}