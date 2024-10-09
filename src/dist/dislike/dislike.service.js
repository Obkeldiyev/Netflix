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
exports.DislikeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dislike_entity_1 = require("./entities/dislike.entity");
let DislikeService = class DislikeService {
    constructor(dislikeRepository) {
        this.dislikeRepository = dislikeRepository;
    }
    async create(CreateDislikeDto) {
        try {
            const check = await this.dislikeRepository.findOne({
                where: {
                    user_id: CreateDislikeDto.user_id,
                    film_id: CreateDislikeDto.film_id,
                },
            });
            if (check) {
                return {
                    status: 409,
                    success: false,
                    message: 'You already disliked this video',
                };
            }
            else {
                const newLike = this.dislikeRepository.create(CreateDislikeDto);
                await this.dislikeRepository.save(newLike);
                return {
                    status: 210,
                    success: true,
                    message: 'You disliked successfully',
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
            return await this.dislikeRepository.find();
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
            return await this.dislikeRepository.findOneBy({ id });
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
            const check = await this.dislikeRepository.findOneBy({ id });
            if (check) {
                await this.dislikeRepository.delete(id);
                return {
                    status: 201,
                    success: true,
                    message: 'The dislike deleted successfully',
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
exports.DislikeService = DislikeService;
exports.DislikeService = DislikeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dislike_entity_1.Dislike)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DislikeService);
//# sourceMappingURL=dislike.service.js.map