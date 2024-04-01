import { Module } from '@nestjs/common';
import { SurveyorsController } from './surveyors.controller';
import { SurveyorsService } from './surveyors.service';

@Module({
  controllers: [SurveyorsController],
  providers: [SurveyorsService]
})
export class SurveyorsModule {}
