import { Module } from '@nestjs/common';
import { StatusActivatedController } from './status-activated.controller';
import { StatusActivatedService } from './status-activated.service';

@Module({
  controllers: [StatusActivatedController],
  providers: [StatusActivatedService]
})
export class StatusActivatedModule {}
