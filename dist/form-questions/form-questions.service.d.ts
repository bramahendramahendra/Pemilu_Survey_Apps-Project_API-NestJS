import { FormQuestions } from './entities/form-questions.entity';
import { Repository } from 'typeorm';
import { CreateFormQuestionsDto } from './dto/create-form-questions.dto';
import { UpdateFormQuestionsDto } from './dto/update-form-questions.dto';
export declare class FormQuestionsService {
    private formQuestionsRepository;
    constructor(formQuestionsRepository: Repository<FormQuestions>);
    findAll(): Promise<FormQuestions[]>;
    findOne(id: number): Promise<FormQuestions>;
    findAllBySearch(search?: string): Promise<FormQuestions[]>;
    create(createFormQuestionsDto: CreateFormQuestionsDto): Promise<FormQuestions>;
    update(id: number, updateFormQuestionsDto: UpdateFormQuestionsDto): Promise<FormQuestions>;
    remove(id: number): Promise<void>;
}
