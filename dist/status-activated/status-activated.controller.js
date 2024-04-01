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
exports.StatusActivatedController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const status_activated_service_1 = require("./status-activated.service");
const create_status_activated_dto_1 = require("./dto/create-status-activated.dto");
const update_status_activated_dto_1 = require("./dto/update-status-activated.dto");
let StatusActivatedController = class StatusActivatedController {
    constructor(statusActivatedService) {
        this.statusActivatedService = statusActivatedService;
    }
    async findAll() {
        return this.statusActivatedService.findAll().catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async search(search) {
        return this.statusActivatedService.findAllBySearch(search).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findOne(id) {
        return this.statusActivatedService.findOne(id).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async create(createStatusActivatedDto) {
        return this.statusActivatedService.create(createStatusActivatedDto);
    }
    async update(id, updateStatusActivatedDto) {
        return this.statusActivatedService.update(id, updateStatusActivatedDto);
    }
    async remove(id) {
        return this.statusActivatedService.remove(id);
    }
};
exports.StatusActivatedController = StatusActivatedController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatusActivatedController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatusActivatedController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusActivatedController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_status_activated_dto_1.CreateStatusActivatedDto]),
    __metadata("design:returntype", Promise)
], StatusActivatedController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_status_activated_dto_1.UpdateStatusActivatedDto]),
    __metadata("design:returntype", Promise)
], StatusActivatedController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusActivatedController.prototype, "remove", null);
exports.StatusActivatedController = StatusActivatedController = __decorate([
    (0, swagger_1.ApiTags)('status-activated'),
    (0, common_1.Controller)('status-activated'),
    __metadata("design:paramtypes", [status_activated_service_1.StatusActivatedService])
], StatusActivatedController);
//# sourceMappingURL=status-activated.controller.js.map