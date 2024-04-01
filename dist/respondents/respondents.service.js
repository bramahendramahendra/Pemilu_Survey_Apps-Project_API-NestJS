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
exports.RespondentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const respondents_entity_1 = require("./entities/respondents.entity");
const typeorm_2 = require("typeorm");
let RespondentsService = class RespondentsService {
    constructor(respondentsRepository) {
        this.respondentsRepository = respondentsRepository;
    }
    async findAll() {
        const respondents = await this.respondentsRepository.find();
        if (!respondents || respondents.length === 0) {
            throw new common_1.NotFoundException(`Respondents not found`);
        }
        return respondents;
    }
    async findOne(id) {
        const respondents = await this.respondentsRepository.findOneBy({ id });
        if (!respondents) {
            throw new common_1.NotFoundException(`Respondents with ID "${id}" not found`);
        }
        return respondents;
    }
    async findAllBySearch(search) {
        const queryBuilder = this.respondentsRepository.createQueryBuilder('respondents');
        if (search) {
            queryBuilder.andWhere('respondents.question LIKE :search', { search: `%${search}%` });
        }
        const respondents = await queryBuilder.getMany();
        if (!respondents || respondents.length === 0) {
            throw new common_1.NotFoundException(`Respondents not found`);
        }
        return respondents;
    }
    async create(createRespondentsDto) {
        const respondents = this.respondentsRepository.create(createRespondentsDto);
        await this.respondentsRepository.save(respondents);
        return respondents;
    }
    async remove(id) {
        try {
            await this.respondentsRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Respondents as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.RespondentsService = RespondentsService;
exports.RespondentsService = RespondentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(respondents_entity_1.Respondents)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RespondentsService);
//# sourceMappingURL=respondents.service.js.map