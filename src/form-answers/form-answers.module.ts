import { Module } from '@nestjs/common';
import { FormAnswersController } from './form-answers.controller';
import { FormAnswersService } from './form-answers.service';
import { FormAnswers } from './entities/form-answers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FormAnswers])],
  controllers: [FormAnswersController],
  providers: [FormAnswersService]
})
export class FormAnswersModule {}
