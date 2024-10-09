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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        try {
            const checkUserUsername = await this.usersRepository.findOneBy({
                username: createUserDto.username,
            });
            if (checkUserUsername) {
                return {
                    success: false,
                    message: `Username ${createUserDto.username} already in use`,
                    status: 409,
                };
            }
            await this.usersRepository.save(createUserDto);
            return {
                success: true,
                message: 'User created successfully!',
                status: 200,
            };
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
            return await this.usersRepository.find();
        }
        catch (error) {
            return {
                status: 500,
                message: error.message,
                success: false,
            };
        }
    }
    async findOne(id) {
        try {
            return await this.usersRepository.findOneBy({ id });
        }
        catch (error) {
            return {
                success: false,
                status: 500,
                message: error.message,
            };
        }
    }
    async update(id, updateUserDto) {
        try {
            let checkUser = await this.usersRepository.findOneBy({ id });
            if (!checkUser) {
                return {
                    status: 404,
                    success: false,
                    message: `Cannot find user with id ${id}`,
                };
            }
            if (updateUserDto.username) {
                let checkUserUsername = await this.usersRepository.findOneBy({
                    username: updateUserDto.username,
                });
                if (checkUserUsername) {
                    return {
                        success: false,
                        message: `Username ${updateUserDto.username} already in use`,
                    };
                }
                await this.usersRepository.update(id, updateUserDto);
                await this.usersRepository.save(updateUserDto);
                return {
                    success: true,
                    message: 'User updated successfully!',
                    status: 200,
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
    async remove(id) {
        try {
            const checkUser = await this.usersRepository.findOneBy({ id });
            if (checkUser) {
                await this.usersRepository.delete({ id });
                return {
                    success: true,
                    message: 'User deleted successfully!',
                    status: 200,
                };
            }
            else {
                return {
                    success: false,
                    status: 404,
                    message: `Cannot find user with id ${id}`,
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
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map