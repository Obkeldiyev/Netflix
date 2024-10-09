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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFilmDto = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
class UpdateFilmDto {
}
exports.UpdateFilmDto = UpdateFilmDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], UpdateFilmDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], UpdateFilmDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, common_1.Optional)(),
    __metadata("design:type", Number)
], UpdateFilmDto.prototype, "age_permission", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, common_1.Optional)(),
    __metadata("design:type", Number)
], UpdateFilmDto.prototype, "category_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, common_1.Optional)(),
    __metadata("design:type", Number)
], UpdateFilmDto.prototype, "time", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, common_1.Optional)(),
    __metadata("design:type", Number)
], UpdateFilmDto.prototype, "rating", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFilmDto.prototype, "desc", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, common_1.Optional)(),
    __metadata("design:type", Number)
], UpdateFilmDto.prototype, "release_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], UpdateFilmDto.prototype, "photos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], UpdateFilmDto.prototype, "videos", void 0);
//# sourceMappingURL=update-film.dto.js.map