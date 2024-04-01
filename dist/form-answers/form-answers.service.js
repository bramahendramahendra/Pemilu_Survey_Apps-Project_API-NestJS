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
exports.FormAnswersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const form_answers_entity_1 = require("./entities/form-answers.entity");
const typeorm_2 = require("typeorm");
let FormAnswersService = class FormAnswersService {
    constructor(formAnswersRepository) {
        this.formAnswersRepository = formAnswersRepository;
    }
    async findAll() {
        const formAnswers = await this.formAnswersRepository.find();
        if (!formAnswers || formAnswers.length === 0) {
            throw new common_1.NotFoundException(`Form Answers not found`);
        }
        return formAnswers;
    }
    async findOne(id) {
        const formAnswers = await this.formAnswersRepository.findOneBy({ id });
        if (!formAnswers) {
            throw new common_1.NotFoundException(`Form Answers with ID "${id}" not found`);
        }
        return formAnswers;
    }
    async findAllByFormQuestion(id_form_questions) {
        const formAnswers = await this.formAnswersRepository.find({
            where: { id_form_questions }
        });
        if (!formAnswers || formAnswers.length === 0) {
            throw new common_1.NotFoundException(`Form Answers with Form Question ID "${id_form_questions}" not found`);
        }
        return formAnswers;
    }
    async findAllBySearch(search) {
        const queryBuilder = this.formAnswersRepository.createQueryBuilder('formAnswers');
        if (search) {
            queryBuilder.andWhere('formAnswers.answer LIKE :search', { search: `%${search}%` });
        }
        const formAnswers = await queryBuilder.getMany();
        if (!formAnswers || formAnswers.length === 0) {
            throw new common_1.NotFoundException(`Form Answers not found`);
        }
        return formAnswers;
    }
    async create(createFormAnswersDto) {
        const existing = await this.formAnswersRepository.findOne({
            where: { answer: createFormAnswersDto.answer },
        });
        if (existing) {
            throw new Error('Form Answers already exists');
        }
        const formAnswers = this.formAnswersRepository.create(createFormAnswersDto);
        await this.formAnswersRepository.save(formAnswers);
        return formAnswers;
    }
    async update(id, updateFormAnswersDto) {
        const existing = await this.formAnswersRepository.findOne({
            where: { answer: updateFormAnswersDto.answer },
        });
        if (existing && existing.id !== id) {
            throw new Error('Form Answers already exists');
        }
        const formAnswers = await this.findOne(id);
        Object.assign(formAnswers, updateFormAnswersDto);
        await this.formAnswersRepository.save(formAnswers);
        return formAnswers;
    }
    async remove(id) {
        try {
            await this.formAnswersRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Form Answers as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.FormAnswersService = FormAnswersService;
exports.FormAnswersService = FormAnswersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(form_answers_entity_1.FormAnswers)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FormAnswersService);
//# sourceMappingURL=form-answers.service.js.map