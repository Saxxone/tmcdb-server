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
exports.Tithe = void 0;
const typeorm_1 = require("typeorm");
let Tithe = class Tithe extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Tithe.prototype, "id", void 0);
__decorate([
    typeorm_1.Index({ fulltext: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tithe.prototype, "surname", void 0);
__decorate([
    typeorm_1.Index({ fulltext: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tithe.prototype, "otherNames", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tithe.prototype, "category", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tithe.prototype, "amountPaid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tithe.prototype, "bank", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tithe.prototype, "purpose", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tithe.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tithe.prototype, "email", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Tithe.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Tithe.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], Tithe.prototype, "deletedAt", void 0);
Tithe = __decorate([
    typeorm_1.Entity()
], Tithe);
exports.Tithe = Tithe;
//# sourceMappingURL=tithe.entity.js.map