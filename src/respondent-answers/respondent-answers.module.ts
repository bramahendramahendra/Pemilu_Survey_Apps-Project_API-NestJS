import { Module } from '@nestjs/common';
import { RespondentAnswersController } from './respondent-answers.controller';
import { RespondentAnswersService } from './respondent-answers.service';

@Module({
  controllers: [RespondentAnswersController],
  providers: [RespondentAnswersService]
})
export class RespondentAnswersModule {}
