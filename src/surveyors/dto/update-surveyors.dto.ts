import { PartialType } from '@nestjs/mapped-types';
import { CreateSurveyorsDto } from './create-surveyors.dto';

export class UpdateSurveyorsDto extends PartialType(CreateSurveyorsDto) {}