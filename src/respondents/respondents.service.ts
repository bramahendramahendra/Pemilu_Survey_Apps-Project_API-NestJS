import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Respondents } from './entities/respondents.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateRespondentsDto } from './dto/create-respondents.dto';

@Injectable()
export class RespondentsService {
    constructor(
        @InjectRepository(Respondents)
        private respondentsRepository: Repository<Respondents>,
    ) {}

    async findAll(): Promise<Respondents[]> {
        const respondents = await this.respondentsRepository.find();
        if (!respondents || respondents.length === 0) {
            throw new NotFoundException(`Respondents not found`);
        }
        return respondents;
    }

    async findOne(id: number): Promise<Respondents> {
        const respondents = await this.respondentsRepository.findOneBy({ id });
        if (!respondents) {
            throw new NotFoundException(`Respondents with ID "${id}" not found`);
        }
        return respondents;
    }

    async findAllBySearch(search?: string): Promise<Respondents[]> {
        const queryBuilder = this.respondentsRepository.createQueryBuilder('respondents');
        if (search) {
            queryBuilder.andWhere('respondents.question LIKE :search', { search: `%${search}%` });
        }
        const respondents = await queryBuilder.getMany();
        if (!respondents || respondents.length === 0) {
            throw new NotFoundException(`Respondents not found`);
        }
        return respondents;
    }

    async create(createRespondentsDto: CreateRespondentsDto): Promise<Respondents> {
        const respondents = this.respondentsRepository.create(createRespondentsDto);
        await this.respondentsRepository.save(respondents);
        return respondents;
    }

    async remove(id: number): Promise<void> {
        try {
            await this.respondentsRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Respondents as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
