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
exports.FormQuestionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const form_questions_entity_1 = require("./entities/form-questions.entity");
const typeorm_2 = require("typeorm");
let FormQuestionsService = class FormQuestionsService {
    constructor(formQuestionsRepository) {
        this.formQuestionsRepository = formQuestionsRepository;
    }
    async findAll() {
        const formQuestions = await this.formQuestionsRepository.find();
        if (!formQuestions || formQuestions.length === 0) {
            throw new common_1.NotFoundException(`Form Questions not found`);
        }
        return formQuestions;
    }
    async findOne(id) {
        const formQuestions = await this.formQuestionsRepository.findOneBy({ id });
        if (!formQuestions) {
            throw new common_1.NotFoundException(`Form Questions with ID "${id}" not found`);
        }
        return formQuestions;
    }
    async findAllBySearch(search) {
        const queryBuilder = this.formQuestionsRepository.createQueryBuilder('formQuestions');
        if (search) {
            queryBuilder.andWhere('formQuestions.question LIKE :search', { search: `%${search}%` });
        }
        const formQuestions = await queryBuilder.getMany();
        if (!formQuestions || formQuestions.length === 0) {
            throw new common_1.NotFoundException(`Form Questions not found`);
        }
        return formQuestions;
    }
    async create(createFormQuestionsDto) {
        const existing = await this.formQuestionsRepository.findOne({
            where: { question: createFormQuestionsDto.question },
        });
        if (existing) {
            throw new Error('Form Questions already exists');
        }
        const formQuestions = this.formQuestionsRepository.create(createFormQuestionsDto);
        await this.formQuestionsRepository.save(formQuestions);
        return formQuestions;
    }
    async update(id, updateFormQuestionsDto) {
        const existing = await this.formQuestionsRepository.findOne({
            where: { question: updateFormQuestionsDto.question },
        });
        if (existing && existing.id !== id) {
            throw new Error('Form Questions already exists');
        }
        const formQuestions = await this.findOne(id);
        Object.assign(formQuestions, updateFormQuestionsDto);
        await this.formQuestionsRepository.save(formQuestions);
        return formQuestions;
    }
    async remove(id) {
        try {
            await this.formQuestionsRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Form Questions as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.FormQuestionsService = FormQuestionsService;
exports.FormQuestionsService = FormQuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(form_questions_entity_1.FormQuestions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FormQuestionsService);
//# sourceMappingURL=form-questions.service.js.map