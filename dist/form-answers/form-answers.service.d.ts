import { FormAnswers } from './entities/form-answers.entity';
import { Repository } from 'typeorm';
import { CreateFormAnswersDto } from './dto/create-form-answers.dto';
import { UpdateFormAnswersDto } from './dto/update-form-answers.dto';
export declare class FormAnswersService {
    private formAnswersRepository;
    constructor(formAnswersRepository: Repository<FormAnswers>);
    findAll(): Promise<FormAnswers[]>;
    findOne(id: number): Promise<FormAnswers>;
    findAllByFormQuestion(id_form_questions: number): Promise<FormAnswers[]>;
    findAllBySearch(search?: string): Promise<FormAnswers[]>;
    create(createFormAnswersDto: CreateFormAnswersDto): Promise<FormAnswers>;
    update(id: number, updateFormAnswersDto: UpdateFormAnswersDto): Promise<FormAnswers>;
    remove(id: number): Promise<void>;
}
