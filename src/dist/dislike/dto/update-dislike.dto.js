"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDislikeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dislike_dto_1 = require("./create-dislike.dto");
class UpdateDislikeDto extends (0, mapped_types_1.PartialType)(create_dislike_dto_1.CreateDislikeDto) {
}
exports.UpdateDislikeDto = UpdateDislikeDto;
//# sourceMappingURL=update-dislike.dto.js.map