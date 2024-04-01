import { Module } from '@nestjs/common';
import { StatusActivatedController } from './status-activated.controller';
import { StatusActivatedService } from './status-activated.service';
import { StatusActivated } from './entities/status-activated.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StatusActivated])],
  controllers: [StatusActivatedController],
  providers: [StatusActivatedService]
})
export class StatusActivatedModule {}
