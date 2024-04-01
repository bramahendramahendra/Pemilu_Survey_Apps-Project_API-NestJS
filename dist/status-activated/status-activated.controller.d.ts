import { StatusActivatedService } from './status-activated.service';
import { CreateStatusActivatedDto } from './dto/create-status-activated.dto';
import { UpdateStatusActivatedDto } from './dto/update-status-activated.dto';
export declare class StatusActivatedController {
    private readonly statusActivatedService;
    constructor(statusActivatedService: StatusActivatedService);
    findAll(): Promise<import("src/status-activated/entities/status-activated.entity").StatusActivated[]>;
    search(search: string): Promise<import("src/status-activated/entities/status-activated.entity").StatusActivated[]>;
    findOne(id: number): Promise<import("src/status-activated/entities/status-activated.entity").StatusActivated>;
    create(createStatusActivatedDto: CreateStatusActivatedDto): Promise<import("src/status-activated/entities/status-activated.entity").StatusActivated>;
    update(id: number, updateStatusActivatedDto: UpdateStatusActivatedDto): Promise<import("src/status-activated/entities/status-activated.entity").StatusActivated>;
    remove(id: number): Promise<void>;
}
