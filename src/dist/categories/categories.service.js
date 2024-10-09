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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./entities/category.entity");
const typeorm_2 = require("typeorm");
let CategoriesService = class CategoriesService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(createCategoryDto) {
        try {
            const check = await this.categoryRepository.findOneBy({
                name: createCategoryDto.name,
            });
            if (check) {
                return {
                    status: 409,
                    success: false,
                    message: 'This category already exists',
                };
            }
            else {
                const newCategory = await this.categoryRepository.create(createCategoryDto);
                await this.categoryRepository.save(newCategory);
                return {
                    status: 202,
                    success: true,
                    message: 'The category created successfully',
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
            return await this.categoryRepository.find();
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
            return await this.categoryRepository.findOneBy({ id });
        }
        catch (error) {
            return {
                status: 500,
                success: false,
                message: error.message,
            };
        }
    }
    async update(id, updateCategoryDto) {
        try {
            const check = await this.categoryRepository.findOneBy({
                id,
            });
            if (check) {
                return {
                    status: 409,
                    success: false,
                    message: 'This category already exists',
                };
            }
            else {
                await this.categoryRepository.update(id, updateCategoryDto);
                await this.categoryRepository.save(updateCategoryDto);
                return {
                    status: 202,
                    success: true,
                    message: 'The category updated successfully',
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
            const check = await this.categoryRepository.findOneBy({
                id,
            });
            if (check) {
                return {
                    status: 409,
                    success: false,
                    message: 'This category already exists',
                };
            }
            else {
                await this.categoryRepository.delete(id);
                return {
                    status: 202,
                    success: true,
                    message: 'The category deleted successfully',
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
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map