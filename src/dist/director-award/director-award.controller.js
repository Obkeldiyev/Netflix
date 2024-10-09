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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorAwardController = void 0;
const common_1 = require("@nestjs/common");
const director_award_service_1 = require("./director-award.service");
const create_director_award_dto_1 = require("./dto/create-director-award.dto");
const update_director_award_dto_1 = require("./dto/update-director-award.dto");
let DirectorAwardController = class DirectorAwardController {
    constructor(directorAwardService) {
        this.directorAwardService = directorAwardService;
    }
    create(createDirectorAwardDto) {
        return this.directorAwardService.create(createDirectorAwardDto);
    }
    findAll() {
        return this.directorAwardService.findAll();
    }
    findOne(id) {
        return this.directorAwardService.findOne(+id);
    }
    update(id, updateDirectorAwardDto) {
        return this.directorAwardService.update(+id, updateDirectorAwardDto);
    }
    remove(id) {
        return this.directorAwardService.remove(+id);
    }
};
exports.DirectorAwardController = DirectorAwardController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_director_award_dto_1.CreateDirectorAwardDto]),
    __metadata("design:returntype", void 0)
], DirectorAwardController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DirectorAwardController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DirectorAwardController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_director_award_dto_1.UpdateDirectorAwardDto]),
    __metadata("design:returntype", void 0)
], DirectorAwardController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DirectorAwardController.prototype, "remove", null);
exports.DirectorAwardController = DirectorAwardController = __decorate([
    (0, common_1.Controller)('director-award'),
    __metadata("design:paramtypes", [director_award_service_1.DirectorAwardService])
], DirectorAwardController);
//# sourceMappingURL=director-award.controller.js.map