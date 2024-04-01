import { Module } from '@nestjs/common';
import { RespondentsController } from './respondents.controller';
import { RespondentsService } from './respondents.service';
import { Respondents } from './entities/respondents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Respondents])],
  controllers: [RespondentsController],
  providers: [RespondentsService]
})
export class RespondentsModule {}
