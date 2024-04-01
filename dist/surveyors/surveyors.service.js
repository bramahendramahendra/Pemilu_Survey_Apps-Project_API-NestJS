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
exports.SurveyorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const surveyors_entity_1 = require("./entities/surveyors.entity");
const typeorm_2 = require("typeorm");
let SurveyorsService = class SurveyorsService {
    constructor(surveyorsRepository) {
        this.surveyorsRepository = surveyorsRepository;
    }
    async findAll() {
        const surveyors = await this.surveyorsRepository.find();
        if (!surveyors || surveyors.length === 0) {
            throw new common_1.NotFoundException(`Surveyors not found`);
        }
        return surveyors;
    }
    async findOne(id) {
        const surveyors = await this.surveyorsRepository.findOneBy({ id });
        if (!surveyors) {
            throw new common_1.NotFoundException(`Surveyors with ID "${id}" not found`);
        }
        return surveyors;
    }
    async findAllBySearch(search) {
        const queryBuilder = this.surveyorsRepository.createQueryBuilder('surveyors');
        if (search) {
            queryBuilder.andWhere('surveyors.status LIKE :search', { search: `%${search}%` });
        }
        const surveyors = await queryBuilder.getMany();
        if (!surveyors || surveyors.length === 0) {
            throw new common_1.NotFoundException(`Surveyors not found`);
        }
        return surveyors;
    }
    async create(createSurveyorsDto) {
        const existing = await this.surveyorsRepository.findOne({
            where: {
                nama: createSurveyorsDto.nama,
                referral_code: createSurveyorsDto.referral_code
            },
        });
        if (existing) {
            throw new Error('Surveyors already exists');
        }
        const surveyors = this.surveyorsRepository.create(createSurveyorsDto);
        await this.surveyorsRepository.save(surveyors);
        return surveyors;
    }
    async update(id, updateSurveyorsDto) {
        const existing = await this.surveyorsRepository.findOne({
            where: {
                nama: updateSurveyorsDto.nama,
                referral_code: updateSurveyorsDto.referral_code
            },
        });
        if (existing && existing.id !== id) {
            throw new Error('Surveyors already exists');
        }
        const surveyors = await this.findOne(id);
        Object.assign(surveyors, updateSurveyorsDto);
        await this.surveyorsRepository.save(surveyors);
        return surveyors;
    }
    async remove(id) {
        try {
            await this.surveyorsRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Surveyors as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.SurveyorsService = SurveyorsService;
exports.SurveyorsService = SurveyorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(surveyors_entity_1.Surveyors)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SurveyorsService);
//# sourceMappingURL=surveyors.service.js.map