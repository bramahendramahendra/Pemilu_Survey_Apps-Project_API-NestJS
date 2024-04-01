import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusActivated } from './entities/status-activated.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateStatusActivatedDto } from './dto/create-status-activated.dto';
import { UpdateStatusActivatedDto } from './dto/update-status-activated.dto';

@Injectable()
export class StatusActivatedService {
    constructor(
        @InjectRepository(StatusActivated)
        private statusActivatedRepository: Repository<StatusActivated>,
    ) {}

    async findAll(): Promise<StatusActivated[]> {
        const statusActivated = await this.statusActivatedRepository.find();
        if (!statusActivated || statusActivated.length === 0) {
            throw new NotFoundException(`Status Activated not found`);
        }
        return statusActivated;
    }

    async findOne(id: number): Promise<StatusActivated> {
        const statusActivated = await this.statusActivatedRepository.findOneBy({ id });
        if (!statusActivated) {
            throw new NotFoundException(`Status Activated with ID "${id}" not found`);
        }
        return statusActivated;
    }

    async findAllBySearch(search?: string): Promise<StatusActivated[]> {
        const queryBuilder = this.statusActivatedRepository.createQueryBuilder('statusActivated');
        if (search) {
            queryBuilder.andWhere('statusActivated.status LIKE :search', { search: `%${search}%` });
        }
        const statusActivated = await queryBuilder.getMany();
        if (!statusActivated || statusActivated.length === 0) {
            throw new NotFoundException(`Status Activated not found`);
        }
        return statusActivated;
    }

    async create(createStatusActivatedDto: CreateStatusActivatedDto): Promise<StatusActivated> {
        const existing = await this.statusActivatedRepository.findOne({
            where: { status: createStatusActivatedDto.status },
        });
        if (existing) {
            throw new Error('Status Activated already exists');
        }
        const statusActivated = this.statusActivatedRepository.create(createStatusActivatedDto);
        await this.statusActivatedRepository.save(statusActivated);
        return statusActivated;
    }

    async update(id: number, updateStatusActivatedDto: UpdateStatusActivatedDto): Promise<StatusActivated> {
        const existing = await this.statusActivatedRepository.findOne({
            where: { status: updateStatusActivatedDto.status },
        });
        if (existing && existing.id !== id) {
            throw new Error('Status Activated already exists');
        }
        const statusActivated = await this.findOne(id);
        Object.assign(statusActivated, updateStatusActivatedDto);
        await this.statusActivatedRepository.save(statusActivated);
        return statusActivated;
    }

    async remove(id: number): Promise<void> {
        try {
            await this.statusActivatedRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Status Activated as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
