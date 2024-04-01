import { Module } from '@nestjs/common';
import { SurveyorsController } from './surveyors.controller';
import { SurveyorsService } from './surveyors.service';
import { Surveyors } from './entities/surveyors.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Surveyors])],
  controllers: [SurveyorsController],
  providers: [SurveyorsService]
})
export class SurveyorsModule {}
