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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_entity_1 = require("./entities/comment.entity");
const typeorm_2 = require("typeorm");
let CommentsService = class CommentsService {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async create(createCommentDto) {
        return await this.commentsRepository.save(createCommentDto);
    }
    findAll() {
        return `This action returns all comments`;
    }
    async findByUser(id) {
        return await this.commentsRepository.find({
            relations: ['user'],
            where: { user: id },
            order: {
                updatedAt: 'DESC',
            },
            take: 10,
            skip: 0,
        });
    }
    update(id, updateCommentDto) {
        return `This action updates a #${id} comment`;
    }
    async remove(id) {
        return await this.commentsRepository.softDelete(id);
    }
};
CommentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map