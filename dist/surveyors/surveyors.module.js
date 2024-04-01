"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyorsModule = void 0;
const common_1 = require("@nestjs/common");
const surveyors_controller_1 = require("./surveyors.controller");
const surveyors_service_1 = require("./surveyors.service");
const surveyors_entity_1 = require("./entities/surveyors.entity");
const typeorm_1 = require("@nestjs/typeorm");
let SurveyorsModule = class SurveyorsModule {
};
exports.SurveyorsModule = SurveyorsModule;
exports.SurveyorsModule = SurveyorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([surveyors_entity_1.Surveyors])],
        controllers: [surveyors_controller_1.SurveyorsController],
        providers: [surveyors_service_1.SurveyorsService]
    })
], SurveyorsModule);
//# sourceMappingURL=surveyors.module.js.map