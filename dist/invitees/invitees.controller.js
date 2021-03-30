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
exports.InviteesController = void 0;
const common_1 = require("@nestjs/common");
const invitees_service_1 = require("./invitees.service");
const create_invitee_dto_1 = require("./dto/create-invitee.dto");
const update_invitee_dto_1 = require("./dto/update-invitee.dto");
let InviteesController = class InviteesController {
    constructor(inviteesService) {
        this.inviteesService = inviteesService;
    }
    create(createInviteeDto) {
        return this.inviteesService.create(createInviteeDto);
    }
    findAll() {
        return this.inviteesService.findAll();
    }
    findOne(id) {
        return this.inviteesService.findOne(+id);
    }
    update(id, updateInviteeDto) {
        return this.inviteesService.update(+id, updateInviteeDto);
    }
    remove(id) {
        return this.inviteesService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invitee_dto_1.CreateInviteeDto]),
    __metadata("design:returntype", void 0)
], InviteesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InviteesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InviteesController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_invitee_dto_1.UpdateInviteeDto]),
    __metadata("design:returntype", void 0)
], InviteesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InviteesController.prototype, "remove", null);
InviteesController = __decorate([
    common_1.Controller('invitees'),
    __metadata("design:paramtypes", [invitees_service_1.InviteesService])
], InviteesController);
exports.InviteesController = InviteesController;
//# sourceMappingURL=invitees.controller.js.map