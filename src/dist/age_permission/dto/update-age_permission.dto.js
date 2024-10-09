"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAgePermissionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_age_permission_dto_1 = require("./create-age_permission.dto");
class UpdateAgePermissionDto extends (0, mapped_types_1.PartialType)(create_age_permission_dto_1.CreateAgePermissionDto) {
}
exports.UpdateAgePermissionDto = UpdateAgePermissionDto;
//# sourceMappingURL=update-age_permission.dto.js.map