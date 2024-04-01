import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Surveyors } from './entities/surveyors.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateSurveyorsDto } from './dto/create-surveyors.dto';
import { UpdateSurveyorsDto } from './dto/update-surveyors.dto';

@Injectable()
export class SurveyorsService {
    constructor(
        @InjectRepository(Surveyors)
        private surveyorsRepository: Repository<Surveyors>,
    ) {}

    async findAll(): Promise<Surveyors[]> {
        const surveyors = await this.surveyorsRepository.find();
        if (!surveyors || surveyors.length === 0) {
            throw new NotFoundException(`Surveyors not found`);
        }
        return surveyors;
    }

    async findOne(id: number): Promise<Surveyors> {
        const surveyors = await this.surveyorsRepository.findOneBy({ id });
        if (!surveyors) {
            throw new NotFoundException(`Surveyors with ID "${id}" not found`);
        }
        return surveyors;
    }

    async findAllBySearch(search?: string): Promise<Surveyors[]> {
        const queryBuilder = this.surveyorsRepository.createQueryBuilder('surveyors');
        if (search) {
            queryBuilder.andWhere('surveyors.status LIKE :search', { search: `%${search}%` });
        }
        const surveyors = await queryBuilder.getMany();
        if (!surveyors || surveyors.length === 0) {
            throw new NotFoundException(`Surveyors not found`);
        }
        return surveyors;
    }

    async create(createSurveyorsDto: CreateSurveyorsDto): Promise<Surveyors> {
        const existing = await this.surveyorsRepository.findOne({
            where: { 
                nama: createSurveyorsDto.nama,
                referral_code: createSurveyorsDto.referral_code
            },
        });
        if (existing) {
            throw new Error('Surveyors already exists');
        }
        const surveyors = this.surveyorsRepository.create(createSurveyorsDto);
        await this.surveyorsRepository.save(surveyors);
        return surveyors;
    }

    async update(id: number, updateSurveyorsDto: UpdateSurveyorsDto): Promise<Surveyors> {
        const existing = await this.surveyorsRepository.findOne({
            where: { 
                nama: updateSurveyorsDto.nama,
                referral_code: updateSurveyorsDto.referral_code
            },
        });
        if (existing && existing.id !== id) {
            throw new Error('Surveyors already exists');
        }
        const surveyors = await this.findOne(id);
        Object.assign(surveyors, updateSurveyorsDto);
        await this.surveyorsRepository.save(surveyors);
        return surveyors;
    }

    async remove(id: number): Promise<void> {
        try {
            await this.surveyorsRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Surveyors as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
