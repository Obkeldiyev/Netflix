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
exports.UpdateActorAwardDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_actor_award_dto_1 = require("./create-actor-award.dto");
const class_validator_1 = require("class-validator");
class UpdateActorAwardDto extends (0, mapped_types_1.PartialType)(create_actor_award_dto_1.CreateActorAwardDto) {
}
exports.UpdateActorAwardDto = UpdateActorAwardDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateActorAwardDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateActorAwardDto.prototype, "actor_id", void 0);
//# sourceMappingURL=update-actor-award.dto.js.map