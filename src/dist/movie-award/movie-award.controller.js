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
exports.MovieAwardController = void 0;
const common_1 = require("@nestjs/common");
const movie_award_service_1 = require("./movie-award.service");
const create_movie_award_dto_1 = require("./dto/create-movie-award.dto");
const update_movie_award_dto_1 = require("./dto/update-movie-award.dto");
let MovieAwardController = class MovieAwardController {
    constructor(movieAwardService) {
        this.movieAwardService = movieAwardService;
    }
    create(createMovieAwardDto) {
        return this.movieAwardService.create(createMovieAwardDto);
    }
    findAll() {
        return this.movieAwardService.findAll();
    }
    findOne(id) {
        return this.movieAwardService.findOne(+id);
    }
    update(id, updateMovieAwardDto) {
        return this.movieAwardService.update(+id, updateMovieAwardDto);
    }
    remove(id) {
        return this.movieAwardService.remove(+id);
    }
};
exports.MovieAwardController = MovieAwardController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_award_dto_1.CreateMovieAwardDto]),
    __metadata("design:returntype", void 0)
], MovieAwardController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieAwardController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieAwardController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movie_award_dto_1.UpdateMovieAwardDto]),
    __metadata("design:returntype", void 0)
], MovieAwardController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieAwardController.prototype, "remove", null);
exports.MovieAwardController = MovieAwardController = __decorate([
    (0, common_1.Controller)('movie-award'),
    __metadata("design:paramtypes", [movie_award_service_1.MovieAwardService])
], MovieAwardController);
//# sourceMappingURL=movie-award.controller.js.map