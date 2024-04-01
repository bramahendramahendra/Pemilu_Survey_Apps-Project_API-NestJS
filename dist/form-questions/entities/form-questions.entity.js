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
exports.FormQuestions = void 0;
const status_activated_entity_1 = require("../../status-activated/entities/status-activated.entity");
const typeorm_1 = require("typeorm");
let FormQuestions = class FormQuestions {
};
exports.FormQuestions = FormQuestions;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'int',
        unsigned: true,
    }),
    __metadata("design:type", Number)
], FormQuestions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", String)
], FormQuestions.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
        nullable: true,
        default: null
    }),
    __metadata("design:type", Number)
], FormQuestions.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], FormQuestions.prototype, "id_activated", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], FormQuestions.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", Date)
], FormQuestions.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_activated_entity_1.StatusActivated, statusActivated => statusActivated.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_activated' }),
    __metadata("design:type", status_activated_entity_1.StatusActivated)
], FormQuestions.prototype, "statusActivated", void 0);
exports.FormQuestions = FormQuestions = __decorate([
    (0, typeorm_1.Entity)('form_questions')
], FormQuestions);
//# sourceMappingURL=form-questions.entity.js.map