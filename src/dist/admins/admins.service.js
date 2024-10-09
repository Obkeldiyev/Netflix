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
exports.AdminsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("./entities/admin.entity");
const typeorm_2 = require("typeorm");
let AdminsService = class AdminsService {
    constructor(adminsRepository) {
        this.adminsRepository = adminsRepository;
    }
    async create(createAdminDto) {
        try {
            const checkAdminUsername = await this.adminsRepository.findOneBy({ username: createAdminDto.username });
            if (checkAdminUsername) {
                return {
                    success: false,
                    message: `Username ${createAdminDto.username} already in use`,
                    status: 409
                };
            }
            await this.adminsRepository.create(createAdminDto);
            await this.adminsRepository.save(createAdminDto);
            return {
                success: true,
                message: "Admin added successfully!",
                status: 200
            };
        }
        catch (error) {
            return {
                status: error.status,
                success: false,
                message: error.message,
            };
        }
    }
    async findAll() {
        try {
            return await this.adminsRepository.find();
        }
        catch (error) {
            return {
                success: false,
                status: 500,
                message: error.message
            };
        }
    }
    async findOne(id) {
        try {
            const checkAdmin = await this.adminsRepository.findOneBy({ id });
            if (checkAdmin) {
                return {
                    success: true,
                    data: checkAdmin,
                    status: 200
                };
            }
            return {
                success: false,
                message: `Cannot find admin with id ${id}`,
                status: 404
            };
        }
        catch (error) {
            return {
                success: false,
                status: 500,
                message: error.message
            };
        }
    }
    async update(id, updateAdminDto) {
        try {
            const checkAdmin = await this.adminsRepository.findOneBy({ id });
            if (!checkAdmin) {
                return {
                    success: false,
                    message: `Cannot find admin with id ${id}`,
                    status: 404
                };
            }
            if (updateAdminDto.username) {
                const checkAdminUsername = await this.adminsRepository.findOneBy({ username: updateAdminDto.username });
                if (checkAdminUsername) {
                    return {
                        success: false,
                        message: `Username ${updateAdminDto.username} already in use`,
                        status: 409
                    };
                }
            }
            await this.adminsRepository.update(id, updateAdminDto);
            await this.adminsRepository.save(updateAdminDto);
            return {
                success: true,
                message: "Admin updated successfully!",
                status: 200
            };
        }
        catch (error) {
            return {
                success: false,
                status: 500,
                message: error.message
            };
        }
    }
    async remove(id) {
        try {
            const checkAdmin = await this.adminsRepository.findOneBy({ id });
            if (!checkAdmin) {
                return {
                    success: false,
                    message: `Cannot find admin with id ${id}`,
                    status: 404
                };
            }
            await this.adminsRepository.delete(id);
            return {
                success: true,
                message: "Admin deleted successfully!",
                status: 200
            };
        }
        catch (error) {
            return {
                success: false,
                status: 500,
                message: error.message
            };
        }
    }
};
exports.AdminsService = AdminsService;
exports.AdminsService = AdminsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminsService);
//# sourceMappingURL=admins.service.js.map