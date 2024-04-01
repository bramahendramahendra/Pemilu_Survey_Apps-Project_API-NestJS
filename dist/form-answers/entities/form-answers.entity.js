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
exports.FormAnswers = void 0;
const form_questions_entity_1 = require("../../form-questions/entities/form-questions.entity");
const status_activated_entity_1 = require("../../status-activated/entities/status-activated.entity");
const typeorm_1 = require("typeorm");
let FormAnswers = class FormAnswers {
};
exports.FormAnswers = FormAnswers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'int',
        unsigned: true,
    }),
    __metadata("design:type", Number)
], FormAnswers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], FormAnswers.prototype, "id_form_questions", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", String)
], FormAnswers.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'char',
        length: 1,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", String)
], FormAnswers.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], FormAnswers.prototype, "id_activated", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
        nullable: false,
        default: null
    }),
    __metadata("design:type", Number)
], FormAnswers.prototype, "poin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], FormAnswers.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", Date)
], FormAnswers.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => form_questions_entity_1.FormQuestions, formQuestions => formQuestions.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_form_questions' }),
    __metadata("design:type", form_questions_entity_1.FormQuestions)
], FormAnswers.prototype, "formQuestions", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_activated_entity_1.StatusActivated, statusActivated => statusActivated.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_activated' }),
    __metadata("design:type", status_activated_entity_1.StatusActivated)
], FormAnswers.prototype, "statusActivated", void 0);
exports.FormAnswers = FormAnswers = __decorate([
    (0, typeorm_1.Entity)('form_answers')
], FormAnswers);
//# sourceMappingURL=form-answers.entity.js.map