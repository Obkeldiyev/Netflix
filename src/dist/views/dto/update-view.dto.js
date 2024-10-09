"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateViewDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_view_dto_1 = require("./create-view.dto");
class UpdateViewDto extends (0, mapped_types_1.PartialType)(create_view_dto_1.CreateViewDto) {
}
exports.UpdateViewDto = UpdateViewDto;
//# sourceMappingURL=update-view.dto.js.map