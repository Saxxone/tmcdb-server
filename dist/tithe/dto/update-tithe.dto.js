"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTitheDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tithe_dto_1 = require("./create-tithe.dto");
class UpdateTitheDto extends mapped_types_1.PartialType(create_tithe_dto_1.CreateTitheDto) {
}
exports.UpdateTitheDto = UpdateTitheDto;
//# sourceMappingURL=update-tithe.dto.js.map