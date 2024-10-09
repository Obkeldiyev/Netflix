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
exports.FilmsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const film_entity_1 = require("./entities/film.entity");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
let FilmsService = class FilmsService {
    constructor(filmRepository) {
        this.filmRepository = filmRepository;
    }
    async create(createFilmDto) {
        try {
            const check = await this.filmRepository.findOneBy({
                name: createFilmDto.name,
            });
            if (check) {
                return {
                    status: 409,
                    success: false,
                    message: 'This name has been taken please choose another one',
                };
            }
            else {
                createFilmDto.id = (0, uuid_1.v4)();
                const newFilm = this.filmRepository.create(createFilmDto);
                await this.filmRepository.save(newFilm);
                return {
                    status: 202,
                    success: true,
                    message: 'The film created successfully',
                };
            }
        }
        catch (error) {
            return {
                status: 500,
                success: false,
                message: error.message,
            };
        }
    }
    async findAll() {
        try {
            return await this.filmRepository.find();
        }
        catch (error) {
            return {
                status: 500,
                success: false,
                message: error.message,
            };
        }
    }
    async findOne(id) {
        try {
            return await this.filmRepository.findOneBy({ id });
        }
        catch (error) {
            return {
                status: 500,
                success: false,
                message: error.message,
            };
        }
    }
    async update(id, updateFilmDto) {
        try {
            const check = await this.filmRepository.findOneBy({ id });
            if (check) {
                await this.filmRepository.update(id, updateFilmDto);
                await this.filmRepository.save(updateFilmDto);
                return {
                    status: 201,
                    success: true,
                    message: 'The Film updated successfully',
                };
            }
            else {
                return {
                    status: 404,
                    success: false,
                    message: 'This films does not exists',
                };
            }
        }
        catch (error) {
            return {
                status: 500,
                success: false,
                message: error.message,
            };
        }
    }
    async remove(id) {
        try {
            const check = await this.filmRepository.findOneBy({ id });
            if (check) {
                await this.filmRepository.delete(id);
                return {
                    status: 201,
                    success: true,
                    message: 'The film deleted successfully',
                };
            }
            else {
                return {
                    status: 404,
                    success: false,
                    message: 'This film does not exists',
                };
            }
        }
        catch (error) {
            return {
                status: 500,
                success: false,
                message: error.message,
            };
        }
    }
};
exports.FilmsService = FilmsService;
exports.FilmsService = FilmsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(film_entity_1.Film)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FilmsService);
//# sourceMappingURL=films.service.js.map