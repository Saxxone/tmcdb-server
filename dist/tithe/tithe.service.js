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
exports.TitheService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tithe_entity_1 = require("./entities/tithe.entity");
let TitheService = class TitheService {
    constructor(titheRepository) {
        this.titheRepository = titheRepository;
    }
    async create(createTitheDto) {
        return await this.titheRepository.save(createTitheDto);
    }
    async findAll() {
        return await this.titheRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} tithe`;
    }
    update(id, updateTitheDto) {
        return `This action updates a #${id} tithe`;
    }
    remove(id) {
        return `This action removes a #${id} tithe`;
    }
};
TitheService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tithe_entity_1.Tithe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TitheService);
exports.TitheService = TitheService;
//# sourceMappingURL=tithe.service.js.map