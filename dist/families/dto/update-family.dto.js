"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFamilyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_family_dto_1 = require("./create-family.dto");
class UpdateFamilyDto extends mapped_types_1.PartialType(create_family_dto_1.CreateFamilyDto) {
}
exports.UpdateFamilyDto = UpdateFamilyDto;
//# sourceMappingURL=update-family.dto.js.map