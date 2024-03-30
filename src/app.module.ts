import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormAnswersModule } from './form_answers/form_answers.module';
import { FormQuestionsModule } from './form_questions/form_questions.module';
import { RespondentAnswersModule } from './respondent_answers/respondent_answers.module';
import { RespondentsModule } from './respondents/respondents.module';
import { StatusActivatedModule } from './status-activated/status-activated.module';
import { StatusActivatedModule } from './status_activated/status_activated.module';
import { FormQuestionsModule } from './form-questions/form-questions.module';
import { FormAnswersModule } from './form-answers/form-answers.module';
import { RespondentAnswersModule } from './respondent-answers/respondent-answers.module';
import { RespondentsModule } from './respondents/respondents.module';

@Module({
  imports: [FormAnswersModule, FormQuestionsModule, RespondentAnswersModule, RespondentsModule, StatusActivatedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
