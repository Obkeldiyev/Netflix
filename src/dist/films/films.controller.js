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
exports.FilmsController = void 0;
const common_1 = require("@nestjs/common");
const films_service_1 = require("./films.service");
const create_film_dto_1 = require("./dto/create-film.dto");
const update_film_dto_1 = require("./dto/update-film.dto");
let FilmsController = class FilmsController {
    constructor(filmsService) {
        this.filmsService = filmsService;
    }
    create(createFilmDto) {
        return this.filmsService.create(createFilmDto);
    }
    findAll() {
        return this.filmsService.findAll();
    }
    findOne(id) {
        return this.filmsService.findOne(id);
    }
    update(id, updateFilmDto) {
        return this.filmsService.update(id, updateFilmDto);
    }
    remove(id) {
        return this.filmsService.remove(id);
    }
};
exports.FilmsController = FilmsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_film_dto_1.CreateFilmDto]),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_film_dto_1.UpdateFilmDto]),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "remove", null);
exports.FilmsController = FilmsController = __decorate([
    (0, common_1.Controller)('films'),
    __metadata("design:paramtypes", [films_service_1.FilmsService])
], FilmsController);
//# sourceMappingURL=films.controller.js.map