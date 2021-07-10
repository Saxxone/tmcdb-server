"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitheModule = void 0;
const common_1 = require("@nestjs/common");
const tithe_service_1 = require("./tithe.service");
const tithe_controller_1 = require("./tithe.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tithe_entity_1 = require("./entities/tithe.entity");
let TitheModule = class TitheModule {
};
TitheModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tithe_entity_1.Tithe])],
        controllers: [tithe_controller_1.TitheController],
        providers: [tithe_service_1.TitheService],
        exports: [typeorm_1.TypeOrmModule],
    })
], TitheModule);
exports.TitheModule = TitheModule;
//# sourceMappingURL=tithe.module.js.map