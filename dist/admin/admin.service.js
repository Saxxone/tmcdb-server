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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const admin_entity_1 = require("./entities/admin.entity");
let AdminService = class AdminService {
    constructor(jwtService, adminRepository) {
        this.jwtService = jwtService;
        this.adminRepository = adminRepository;
    }
    async create(createAdminDto) {
        const saltOrRounds = 10;
        const password = createAdminDto.password;
        createAdminDto.password = await bcrypt.hash(password, saltOrRounds);
        console.log(createAdminDto);
        return this.adminRepository.save(createAdminDto);
    }
    async findOne(token) {
        const verifiedUser = this.jwtService.verify(token);
        return this.adminRepository.findOne({
            where: {
                username: verifiedUser.username,
            },
        });
    }
};
AdminService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map