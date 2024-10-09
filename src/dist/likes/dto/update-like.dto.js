"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLikeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_like_dto_1 = require("./create-like.dto");
class UpdateLikeDto extends (0, mapped_types_1.PartialType)(create_like_dto_1.CreateLikeDto) {
}
exports.UpdateLikeDto = UpdateLikeDto;
//# sourceMappingURL=update-like.dto.js.map