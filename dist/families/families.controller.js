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
exports.FamiliesController = void 0;
const common_1 = require("@nestjs/common");
const families_service_1 = require("./families.service");
const create_family_dto_1 = require("./dto/create-family.dto");
const update_family_dto_1 = require("./dto/update-family.dto");
let FamiliesController = class FamiliesController {
    constructor(familiesService) {
        this.familiesService = familiesService;
    }
    create(createFamilyDto) {
        return this.familiesService.create(createFamilyDto);
    }
    findAll() {
        return this.familiesService.findAll();
    }
    findOne(id) {
        return this.familiesService.findOne(+id);
    }
    update(id, updateFamilyDto) {
        return this.familiesService.update(+id, updateFamilyDto);
    }
    remove(id) {
        return this.familiesService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_family_dto_1.CreateFamilyDto]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_family_dto_1.UpdateFamilyDto]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FamiliesController.prototype, "remove", null);
FamiliesController = __decorate([
    common_1.Controller('families'),
    __metadata("design:paramtypes", [families_service_1.FamiliesService])
], FamiliesController);
exports.FamiliesController = FamiliesController;
//# sourceMappingURL=families.controller.js.map