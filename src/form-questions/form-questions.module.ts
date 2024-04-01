import { Module } from '@nestjs/common';
import { FormQuestionsController } from './form-questions.controller';
import { FormQuestionsService } from './form-questions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormQuestions } from './entities/form-questions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormQuestions])],
  controllers: [FormQuestionsController],
  providers: [FormQuestionsService]
})
export class FormQuestionsModule {}
