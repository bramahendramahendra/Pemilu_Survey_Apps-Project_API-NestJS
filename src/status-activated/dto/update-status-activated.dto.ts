import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusActivatedDto } from './create-status-activated.dto';

export class UpdateStatusActivatedDto extends PartialType(CreateStatusActivatedDto) {}