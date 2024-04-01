import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RespondentsModule } from './respondents/respondents.module';
import { SurveyorsModule } from './surveyors/surveyors.module';
import { StatusActivatedModule } from './status-activated/status-activated.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormAnswersModule } from './form-answers/form-answers.module';
import { FormQuestionsModule } from './form-questions/form-questions.module';
import { RespondentAnswersModule } from './respondent-answers/respondent-answers.module';

@Module({
  imports: [
    // Config 
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    // databse 
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
    }), 

    // Module 
    FormAnswersModule, FormQuestionsModule, RespondentAnswersModule, RespondentsModule, StatusActivatedModule, SurveyorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
