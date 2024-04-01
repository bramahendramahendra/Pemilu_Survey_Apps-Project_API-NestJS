import { Surveyors } from './entities/surveyors.entity';
import { Repository } from 'typeorm';
import { CreateSurveyorsDto } from './dto/create-surveyors.dto';
import { UpdateSurveyorsDto } from './dto/update-surveyors.dto';
export declare class SurveyorsService {
    private surveyorsRepository;
    constructor(surveyorsRepository: Repository<Surveyors>);
    findAll(): Promise<Surveyors[]>;
    findOne(id: number): Promise<Surveyors>;
    findAllBySearch(search?: string): Promise<Surveyors[]>;
    create(createSurveyorsDto: CreateSurveyorsDto): Promise<Surveyors>;
    update(id: number, updateSurveyorsDto: UpdateSurveyorsDto): Promise<Surveyors>;
    remove(id: number): Promise<void>;
}
