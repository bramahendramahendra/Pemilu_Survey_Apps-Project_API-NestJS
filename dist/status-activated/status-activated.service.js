"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusActivatedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const status_activated_entity_1 = require("./entities/status-activated.entity");
const typeorm_2 = require("typeorm");
let StatusActivatedService = class StatusActivatedService {
    constructor(statusActivatedRepository) {
        this.statusActivatedRepository = statusActivatedRepository;
    }
    async findAll() {
        const statusActivated = await this.statusActivatedRepository.find();
        if (!statusActivated || statusActivated.length === 0) {
            throw new common_1.NotFoundException(`Status Activated not found`);
        }
        return statusActivated;
    }
    async findOne(id) {
        const statusActivated = await this.statusActivatedRepository.findOneBy({ id });
        if (!statusActivated) {
            throw new common_1.NotFoundException(`Status Activated with ID "${id}" not found`);
        }
        return statusActivated;
    }
    async findAllBySearch(search) {
        const queryBuilder = this.statusActivatedRepository.createQueryBuilder('statusActivated');
        if (search) {
            queryBuilder.andWhere('statusActivated.status LIKE :search', { search: `%${search}%` });
        }
        const statusActivated = await queryBuilder.getMany();
        if (!statusActivated || statusActivated.length === 0) {
            throw new common_1.NotFoundException(`Status Activated not found`);
        }
        return statusActivated;
    }
    async create(createStatusActivatedDto) {
        const existing = await this.statusActivatedRepository.findOne({
            where: { status: createStatusActivatedDto.status },
        });
        if (existing) {
            throw new Error('Status Activated already exists');
        }
        const statusActivated = this.statusActivatedRepository.create(createStatusActivatedDto);
        await this.statusActivatedRepository.save(statusActivated);
        return statusActivated;
    }
    async update(id, updateStatusActivatedDto) {
        const existing = await this.statusActivatedRepository.findOne({
            where: { status: updateStatusActivatedDto.status },
        });
        if (existing && existing.id !== id) {
            throw new Error('Status Activated already exists');
        }
        const statusActivated = await this.findOne(id);
        Object.assign(statusActivated, updateStatusActivatedDto);
        await this.statusActivatedRepository.save(statusActivated);
        return statusActivated;
    }
    async remove(id) {
        try {
            await this.statusActivatedRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Status Activated as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.StatusActivatedService = StatusActivatedService;
exports.StatusActivatedService = StatusActivatedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(status_activated_entity_1.StatusActivated)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StatusActivatedService);
//# sourceMappingURL=status-activated.service.js.map