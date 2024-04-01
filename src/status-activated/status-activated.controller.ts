import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StatusActivatedService } from './status-activated.service';
import { CreateStatusActivatedDto } from './dto/create-status-activated.dto';
import { UpdateStatusActivatedDto } from './dto/update-status-activated.dto';

@ApiTags('status-activated')
@Controller('status-activated')
export class StatusActivatedController {
    constructor(private readonly statusActivatedService: StatusActivatedService) { }

    @Get()
    async findAll() {
        return this.statusActivatedService.findAll().catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('search')
    async search(@Query('search') search: string ) {
        return this.statusActivatedService.findAllBySearch(search).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.statusActivatedService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createStatusActivatedDto: CreateStatusActivatedDto) {
        return this.statusActivatedService.create(createStatusActivatedDto);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Param('id') id: number, @Body() updateStatusActivatedDto: UpdateStatusActivatedDto) {
        return this.statusActivatedService.update(id, updateStatusActivatedDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.statusActivatedService.remove(id);
    }
}
