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
exports.CreateFormAnswersDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFormAnswersDto {
}
exports.CreateFormAnswersDto = CreateFormAnswersDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        required: true
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateFormAnswersDto.prototype, "id_form_questions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Partai',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateFormAnswersDto.prototype, "answer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'A',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(1),
    __metadata("design:type", String)
], CreateFormAnswersDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        required: true
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(2),
    __metadata("design:type", Number)
], CreateFormAnswersDto.prototype, "id_activated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        required: false
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(3),
    __metadata("design:type", Number)
], CreateFormAnswersDto.prototype, "poin", void 0);
//# sourceMappingURL=create-form-answers.dto.js.map