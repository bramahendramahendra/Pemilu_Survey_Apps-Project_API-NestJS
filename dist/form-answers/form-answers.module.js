"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormAnswersModule = void 0;
const common_1 = require("@nestjs/common");
const form_answers_controller_1 = require("./form-answers.controller");
const form_answers_service_1 = require("./form-answers.service");
const form_answers_entity_1 = require("./entities/form-answers.entity");
const typeorm_1 = require("@nestjs/typeorm");
let FormAnswersModule = class FormAnswersModule {
};
exports.FormAnswersModule = FormAnswersModule;
exports.FormAnswersModule = FormAnswersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([form_answers_entity_1.FormAnswers])],
        controllers: [form_answers_controller_1.FormAnswersController],
        providers: [form_answers_service_1.FormAnswersService]
    })
], FormAnswersModule);
//# sourceMappingURL=form-answers.module.js.map