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
exports.SerialsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const serial_entity_1 = require("./entities/serial.entity");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
let SerialsService = class SerialsService {
    constructor(serialRepository) {
        this.serialRepository = serialRepository;
    }
    async create(createSerialDto) {
        try {
            const check = await this.serialRepository.findOneBy({
                id: createSerialDto.id,
            });
            if (check) {
                return {
                    status: 409,
                    success: false,
                    message: 'This name has been taken please choose another one',
                };
            }
            else {
                createSerialDto.id = (0, uuid_1.v4)();
                const newSerial = this.serialRepository.create(createSerialDto);
                await this.serialRepository.save(newSerial);
                return {
                    status: 202,
                    success: true,
                    message: 'The serial created successfully',
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
            return await this.serialRepository.find();
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
            return await this.serialRepository.findOneBy({ id });
        }
        catch (error) {
            return {
                status: 500,
                success: false,
                message: error.message,
            };
        }
    }
    async update(id, updateSerialDto) {
        try {
            const check = await this.serialRepository.findOneBy({ id });
            if (check) {
                await this.serialRepository.update(id, updateSerialDto);
                await this.serialRepository.save(updateSerialDto);
                return {
                    status: 201,
                    success: true,
                    message: 'The serial updated successfully',
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
    async remove(id) {
        try {
            const check = await this.serialRepository.findOneBy({ id });
            if (check) {
                await this.serialRepository.delete(id);
                return {
                    status: 201,
                    success: true,
                    message: 'The serial deleted successfully',
                };
            }
            else {
                return {
                    status: 404,
                    success: false,
                    message: 'This serial does not exists',
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
exports.SerialsService = SerialsService;
exports.SerialsService = SerialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(serial_entity_1.Serial)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SerialsService);
//# sourceMappingURL=serials.service.js.map