import { StatusActivated } from './entities/status-activated.entity';
import { Repository } from 'typeorm';
import { CreateStatusActivatedDto } from './dto/create-status-activated.dto';
import { UpdateStatusActivatedDto } from './dto/update-status-activated.dto';
export declare class StatusActivatedService {
    private statusActivatedRepository;
    constructor(statusActivatedRepository: Repository<StatusActivated>);
    findAll(): Promise<StatusActivated[]>;
    findAllBySearch(search?: string): Promise<StatusActivated[]>;
    findOne(id: number): Promise<StatusActivated>;
    create(createStatusActivatedDto: CreateStatusActivatedDto): Promise<StatusActivated>;
    update(id: number, updateStatusActivatedDto: UpdateStatusActivatedDto): Promise<StatusActivated>;
    remove(id: number): Promise<void>;
}
