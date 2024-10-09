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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comment_entity_1 = require("./entities/comment.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CommentsService = class CommentsService {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async create(createCommentDto) {
        try {
            await this.commentsRepository.create(createCommentDto);
            await this.commentsRepository.save(createCommentDto);
            return {
                success: true,
                message: 'Comment added successfully!',
                status: 200,
            };
        }
        catch (error) {
            return {
                success: false,
                status: 500,
                message: error.message,
            };
        }
    }
    async findAll() {
        try {
            return await this.commentsRepository.find();
        }
        catch (error) {
            return {
                success: false,
                status: 500,
                message: error.message,
            };
        }
    }
    async findOne(id) {
        try {
            const comment = await this.commentsRepository.findOneBy({ id });
            if (comment) {
                return {
                    success: true,
                    data: comment,
                    status: 200,
                };
            }
            else {
                return {
                    success: false,
                    message: `Cannot find comment with id ${id}`,
                    status: 404,
                };
            }
        }
        catch (error) {
            return {
                success: false,
                status: 500,
                message: error.message,
            };
        }
    }
    async update(id, updateCommentDto) {
        try {
            const checkComment = await this.commentsRepository.findOneBy({ id });
            if (!checkComment) {
                return {
                    success: false,
                    message: `Cannot find comment with id ${id}`,
                    status: 404,
                };
            }
            await this.commentsRepository.update(id, updateCommentDto);
            await this.commentsRepository.save(updateCommentDto);
            return {
                success: true,
                message: 'Comment updated successfully!',
                status: 200,
            };
        }
        catch (error) {
            return {
                success: false,
                status: 500,
                message: error.message,
            };
        }
    }
    async remove(id) {
        try {
            const checkComment = await this.commentsRepository.findOneBy({ id });
            if (!checkComment) {
                return {
                    status: 404,
                    success: false,
                    message: `Cannot find comment with id ${id}`,
                };
            }
            await this.commentsRepository.delete(id);
            return {
                success: true,
                message: 'Comment deleted successfully!',
                status: 200,
            };
        }
        catch (error) {
            return {
                success: false,
                status: 500,
                message: error.message,
            };
        }
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentsService);
//# sourceMappingURL=comments.service.js.map