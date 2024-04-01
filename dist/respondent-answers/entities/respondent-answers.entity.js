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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespondentAnswers = void 0;
const form_answers_entity_1 = require("../../form-answers/entities/form-answers.entity");
const respondents_entity_1 = require("../../respondents/entities/respondents.entity");
const surveyors_entity_1 = require("../../surveyors/entities/surveyors.entity");
const typeorm_1 = require("typeorm");
let RespondentAnswers = class RespondentAnswers {
};
exports.RespondentAnswers = RespondentAnswers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'int',
        unsigned: true,
    }),
    __metadata("design:type", Number)
], RespondentAnswers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], RespondentAnswers.prototype, "id_respondents", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], RespondentAnswers.prototype, "id_surveyors", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], RespondentAnswers.prototype, "id_form_answers", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", String)
], RespondentAnswers.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
        nullable: false,
        default: null
    }),
    __metadata("design:type", Number)
], RespondentAnswers.prototype, "poin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], RespondentAnswers.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", Date)
], RespondentAnswers.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => respondents_entity_1.Respondents, respondents => respondents.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_respondents' }),
    __metadata("design:type", respondents_entity_1.Respondents)
], RespondentAnswers.prototype, "respondents", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => surveyors_entity_1.Surveyors, surveyors => surveyors.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_surveyors' }),
    __metadata("design:type", surveyors_entity_1.Surveyors)
], RespondentAnswers.prototype, "surveyors", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => form_answers_entity_1.FormAnswers, formAnswers => formAnswers.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_form_answers' }),
    __metadata("design:type", form_answers_entity_1.FormAnswers)
], RespondentAnswers.prototype, "formAnswers", void 0);
exports.RespondentAnswers = RespondentAnswers = __decorate([
    (0, typeorm_1.Entity)('respondent_answers')
], RespondentAnswers);
//# sourceMappingURL=respondent-answers.entity.js.map