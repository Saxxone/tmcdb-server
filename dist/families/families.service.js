"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamiliesService = void 0;
const common_1 = require("@nestjs/common");
let FamiliesService = class FamiliesService {
    create(createFamilyDto) {
        return 'This action adds a new family';
    }
    findAll() {
        return `This action returns all families`;
    }
    findOne(id) {
        return `This action returns a #${id} family`;
    }
    update(id, updateFamilyDto) {
        return `This action updates a #${id} family`;
    }
    remove(id) {
        return `This action removes a #${id} family`;
    }
};
FamiliesService = __decorate([
    common_1.Injectable()
], FamiliesService);
exports.FamiliesService = FamiliesService;
//# sourceMappingURL=families.service.js.map