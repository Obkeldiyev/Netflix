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
exports.AgePermissionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const age_permission_entity_1 = require("./entities/age_permission.entity");
const typeorm_2 = require("typeorm");
let AgePermissionService = class AgePermissionService {
    constructor(agePermissionRepository) {
        this.agePermissionRepository = agePermissionRepository;
    }
    async create(createAgePermissionDto) {
        try {
            const check = await this.agePermissionRepository.findOneBy({
                age: createAgePermissionDto.age,
            });
            if (check) {
                return {
                    status: 409,
                    success: false,
                    message: 'This category already exists',
                };
            }
            else {
                const newCategory = await this.agePermissionRepository.create(createAgePermissionDto);
                await this.agePermissionRepository.save(newCategory);
                return {
                    status: 202,
                    success: true,
                    message: 'The age permission created successfully',
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
            return await this.agePermissionRepository.find();
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
            return await this.agePermissionRepository.findOneBy({ id });
        }
        catch (error) {
            return {
                status: 500,
                success: false,
                message: error.message,
            };
        }
    }
    async update(id, updateAgePermissionDto) {
        try {
            const check = await this.agePermissionRepository.findOneBy({
                id,
            });
            if (check) {
                return {
                    status: 409,
                    success: false,
                    message: 'This age permission already exists',
                };
            }
            else {
                await this.agePermissionRepository.update(id, updateAgePermissionDto);
                await this.agePermissionRepository.save(updateAgePermissionDto);
                return {
                    status: 202,
                    success: true,
                    message: 'The age permission updated successfully',
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
            const check = await this.agePermissionRepository.findOneBy({
                id,
            });
            if (check) {
                return {
                    status: 409,
                    success: false,
                    message: 'This age permission already exists',
                };
            }
            else {
                await this.agePermissionRepository.delete(id);
                return {
                    status: 202,
                    success: true,
                    message: 'The age permission deleted successfully',
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
exports.AgePermissionService = AgePermissionService;
exports.AgePermissionService = AgePermissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(age_permission_entity_1.AgePermission)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AgePermissionService);
//# sourceMappingURL=age_permission.service.js.map