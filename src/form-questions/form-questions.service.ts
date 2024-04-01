import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormQuestions } from './entities/form-questions.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateFormQuestionsDto } from './dto/create-form-questions.dto';
import { UpdateFormQuestionsDto } from './dto/update-form-questions.dto';

@Injectable()
export class FormQuestionsService {
    constructor(
        @InjectRepository(FormQuestions)
        private formQuestionsRepository: Repository<FormQuestions>,
    ) {}

    async findAll(): Promise<FormQuestions[]> {
        const formQuestions = await this.formQuestionsRepository.find();
        if (!formQuestions || formQuestions.length === 0) {
            throw new NotFoundException(`Form Questions not found`);
        }
        return formQuestions;
    }

    async findOne(id: number): Promise<FormQuestions> {
        const formQuestions = await this.formQuestionsRepository.findOneBy({ id });
        if (!formQuestions) {
            throw new NotFoundException(`Form Questions with ID "${id}" not found`);
        }
        return formQuestions;
    }

    async findAllBySearch(search?: string): Promise<FormQuestions[]> {
        const queryBuilder = this.formQuestionsRepository.createQueryBuilder('formQuestions');
        if (search) {
            queryBuilder.andWhere('formQuestions.question LIKE :search', { search: `%${search}%` });
        }
        const formQuestions = await queryBuilder.getMany();
        if (!formQuestions || formQuestions.length === 0) {
            throw new NotFoundException(`Form Questions not found`);
        }
        return formQuestions;
    }

    async create(createFormQuestionsDto: CreateFormQuestionsDto): Promise<FormQuestions> {
        const existing = await this.formQuestionsRepository.findOne({
            where: { question: createFormQuestionsDto.question },
        });
        if (existing) {
            throw new Error('Form Questions already exists');
        }
        const formQuestions = this.formQuestionsRepository.create(createFormQuestionsDto);
        await this.formQuestionsRepository.save(formQuestions);
        return formQuestions;
    }

    async update(id: number, updateFormQuestionsDto: UpdateFormQuestionsDto): Promise<FormQuestions> {
        const existing = await this.formQuestionsRepository.findOne({
            where: { question: updateFormQuestionsDto.question },
        });
        if (existing && existing.id !== id) {
            throw new Error('Form Questions already exists');
        }
        const formQuestions = await this.findOne(id);
        Object.assign(formQuestions, updateFormQuestionsDto);
        await this.formQuestionsRepository.save(formQuestions);
        return formQuestions;
    }

    async remove(id: number): Promise<void> {
        try {
            await this.formQuestionsRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Form Questions as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
