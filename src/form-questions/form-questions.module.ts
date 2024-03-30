import { Module } from '@nestjs/common';
import { FormQuestionsController } from './form-questions.controller';
import { FormQuestionsService } from './form-questions.service';

@Module({
  controllers: [FormQuestionsController],
  providers: [FormQuestionsService]
})
export class FormQuestionsModule {}
