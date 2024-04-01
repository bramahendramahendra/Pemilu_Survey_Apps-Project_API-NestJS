"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusActivatedModule = void 0;
const common_1 = require("@nestjs/common");
const status_activated_controller_1 = require("./status-activated.controller");
const status_activated_service_1 = require("./status-activated.service");
const status_activated_entity_1 = require("./entities/status-activated.entity");
const typeorm_1 = require("@nestjs/typeorm");
let StatusActivatedModule = class StatusActivatedModule {
};
exports.StatusActivatedModule = StatusActivatedModule;
exports.StatusActivatedModule = StatusActivatedModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([status_activated_entity_1.StatusActivated])],
        controllers: [status_activated_controller_1.StatusActivatedController],
        providers: [status_activated_service_1.StatusActivatedService]
    })
], StatusActivatedModule);
//# sourceMappingURL=status-activated.module.js.map