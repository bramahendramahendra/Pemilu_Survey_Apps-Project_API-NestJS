import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormAnswers } from './entities/form-answers.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateFormAnswersDto } from './dto/create-form-answers.dto';
import { UpdateFormAnswersDto } from './dto/update-form-answers.dto';

@Injectable()
export class FormAnswersService {
    constructor(
        @InjectRepository(FormAnswers)
        private formAnswersRepository: Repository<FormAnswers>,
    ) {}

    async findAll(): Promise<FormAnswers[]> {
        const formAnswers = await this.formAnswersRepository.find();
        if (!formAnswers || formAnswers.length === 0) {
            throw new NotFoundException(`Form Answers not found`);
        }
        return formAnswers;
    }

    async findOne(id: number): Promise<FormAnswers> {
        const formAnswers = await this.formAnswersRepository.findOneBy({ id });
        if (!formAnswers) {
            throw new NotFoundException(`Form Answers with ID "${id}" not found`);
        }
        return formAnswers;
    }

    async findAllByFormQuestion(id_form_questions: number): Promise<FormAnswers[]> {
        const formAnswers = await this.formAnswersRepository.find({ 
            where: { id_form_questions } 
        });
        if (!formAnswers || formAnswers.length === 0) {
            throw new NotFoundException(`Form Answers with Form Question ID "${id_form_questions}" not found`);
        }
        return formAnswers;
    }

    async findAllBySearch(search?: string): Promise<FormAnswers[]> {
        const queryBuilder = this.formAnswersRepository.createQueryBuilder('formAnswers');
        if (search) {
            queryBuilder.andWhere('formAnswers.answer LIKE :search', { search: `%${search}%` });
        }
        const formAnswers = await queryBuilder.getMany();
        if (!formAnswers || formAnswers.length === 0) {
            throw new NotFoundException(`Form Answers not found`);
        }
        return formAnswers;
    }

    async create(createFormAnswersDto: CreateFormAnswersDto): Promise<FormAnswers> {
        const existing = await this.formAnswersRepository.findOne({
            where: { answer: createFormAnswersDto.answer },
        });
        if (existing) {
            throw new Error('Form Answers already exists');
        }
        const formAnswers = this.formAnswersRepository.create(createFormAnswersDto);
        await this.formAnswersRepository.save(formAnswers);
        return formAnswers;
    }

    async update(id: number, updateFormAnswersDto: UpdateFormAnswersDto): Promise<FormAnswers> {
        const existing = await this.formAnswersRepository.findOne({
            where: { answer: updateFormAnswersDto.answer },
        });
        if (existing && existing.id !== id) {
            throw new Error('Form Answers already exists');
        }
        const formAnswers = await this.findOne(id);
        Object.assign(formAnswers, updateFormAnswersDto);
        await this.formAnswersRepository.save(formAnswers);
        return formAnswers;
    }

    async remove(id: number): Promise<void> {
        try {
            await this.formAnswersRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Form Answers as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
