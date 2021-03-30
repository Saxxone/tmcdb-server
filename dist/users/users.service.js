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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        return this.userRepository.save(createUserDto);
    }
    async findAll(query) {
        const take = query.size;
        const search = query.search;
        const page = query.page;
        const start = query.start;
        const end = query.end;
        if (search) {
            const count = await this.userRepository.count({
                where: [
                    { surname: typeorm_2.Like(`%${search}%`) },
                    { otherNames: typeorm_2.Like(`%${search}%`) },
                    { title: typeorm_2.Like(`%${search}%`) },
                    { status: typeorm_2.Like(`%${search}%`) },
                    { gender: typeorm_2.Like(`%${search}%`) },
                ],
                order: {
                    surname: 'ASC',
                },
            });
            const all = await this.userRepository.find({
                relations: ['comments'],
                take: take,
                skip: take * (page - 1),
                order: {
                    createdAt: 'ASC',
                },
                where: [
                    { surname: typeorm_2.Like(`%${search}%`) },
                    { otherNames: typeorm_2.Like(`%${search}%`) },
                    { title: typeorm_2.Like(`%${search}%`) },
                    { status: typeorm_2.Like(`%${search}%`) },
                    { gender: typeorm_2.Like(`%${search}%`) },
                ],
            });
            return { all: all, count: count };
        }
        else if (start) {
            const all = await this.userRepository.find({
                relations: ['comments'],
                take: take,
                skip: take * (page - 1),
                order: {
                    createdAt: 'ASC',
                    surname: 'ASC',
                },
                where: {
                    createdAt: typeorm_2.Between(start, end),
                },
            });
            const count = await this.userRepository.count({
                where: {
                    createdAt: typeorm_2.Between(start, end),
                },
            });
            return { all: all, count: count };
        }
        const all = await this.userRepository.find({
            relations: ['comments'],
            take: take,
            skip: take * (page - 1),
            order: {
                surname: 'ASC',
            },
        });
        const count = await this.userRepository.count();
        return { all: all, count: count };
    }
    async findOne(id) {
        return await this.userRepository.findOne(id);
    }
    async update(id, updateUserDto) {
        console.log(id, updateUserDto);
        return await this.userRepository.update(id, updateUserDto);
    }
    async remove(id) {
        return await this.userRepository.softDelete(id);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map