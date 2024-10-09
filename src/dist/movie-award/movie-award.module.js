"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieAwardModule = void 0;
const common_1 = require("@nestjs/common");
const movie_award_service_1 = require("./movie-award.service");
const movie_award_controller_1 = require("./movie-award.controller");
let MovieAwardModule = class MovieAwardModule {
};
exports.MovieAwardModule = MovieAwardModule;
exports.MovieAwardModule = MovieAwardModule = __decorate([
    (0, common_1.Module)({
        controllers: [movie_award_controller_1.MovieAwardController],
        providers: [movie_award_service_1.MovieAwardService],
    })
], MovieAwardModule);
//# sourceMappingURL=movie-award.module.js.map