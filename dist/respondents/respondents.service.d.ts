import { Respondents } from './entities/respondents.entity';
import { Repository } from 'typeorm';
import { CreateRespondentsDto } from './dto/create-respondents.dto';
export declare class RespondentsService {
    private respondentsRepository;
    constructor(respondentsRepository: Repository<Respondents>);
    findAll(): Promise<Respondents[]>;
    findOne(id: number): Promise<Respondents>;
    findAllBySearch(search?: string): Promise<Respondents[]>;
    create(createRespondentsDto: CreateRespondentsDto): Promise<Respondents>;
    remove(id: number): Promise<void>;
}
