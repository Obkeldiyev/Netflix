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
exports.LikesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const like_entity_1 = require("./entities/like.entity");
const typeorm_2 = require("typeorm");
let LikesService = class LikesService {
    constructor(likeRepository) {
        this.likeRepository = likeRepository;
    }
    async create(createLikeDto) {
        try {
            const check = await this.likeRepository.findOne({
                where: {
                    user_id: createLikeDto.user_id,
                    film_id: createLikeDto.film_id,
                },
            });
            if (check) {
                return {
                    status: 409,
                    success: false,
                    message: 'You already liked this video',
                };
            }
            else {
                const newLike = this.likeRepository.create(createLikeDto);
                await this.likeRepository.save(newLike);
                return {
                    status: 210,
                    success: true,
                    message: 'You liked successfully',
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
            return await this.likeRepository.find();
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
            return await this.likeRepository.findOneBy({ id });
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
            const check = await this.likeRepository.findOneBy({ id });
            if (check) {
                await this.likeRepository.delete(id);
                return {
                    status: 201,
                    success: true,
                    message: 'The like deleted successfully',
                };
            }
            else {
                return {
                    status: 404,
                    success: false,
                    message: 'No access',
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
exports.LikesService = LikesService;
exports.LikesService = LikesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(like_entity_1.Like)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LikesService);
//# sourceMappingURL=likes.service.js.map