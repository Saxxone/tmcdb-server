"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInviteeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_invitee_dto_1 = require("./create-invitee.dto");
class UpdateInviteeDto extends mapped_types_1.PartialType(create_invitee_dto_1.CreateInviteeDto) {
}
exports.UpdateInviteeDto = UpdateInviteeDto;
//# sourceMappingURL=update-invitee.dto.js.map