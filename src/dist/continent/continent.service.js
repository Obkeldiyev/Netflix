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
exports.ContinentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const continent_entity_1 = require("./entities/continent.entity");
const typeorm_2 = require("typeorm");
let ContinentService = class ContinentService {
    constructor(continentsRepository) {
        this.continentsRepository = continentsRepository;
    }
    async create(createContinentDto) {
        try {
            const checkDuplicate = await this.continentsRepository.findOneBy({
                name: createContinentDto.name,
            });
            if (checkDuplicate) {
                return {
                    success: false,
                    message: `Continent ${createContinentDto.name} already exists`,
                    status: 409,
                };
            }
            const createdContinent = await this.continentsRepository.create(createContinentDto);
            await this.continentsRepository.save(createdContinent);
            return {
                success: true,
                message: 'Continent created successfully!',
                status: 201,
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
            return await this.continentsRepository.find();
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
            const checkContinent = await this.continentsRepository.findOneBy({ id });
            if (checkContinent) {
                return {
                    success: true,
                    data: checkContinent,
                    status: 200,
                };
            }
            else {
                return {
                    success: false,
                    message: `Cannot find continent with id ${id}`,
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
    async update(id, updateContinentDto) {
        const checkContinent = await this.continentsRepository.findOneBy({ id });
        if (!checkContinent) {
            return {
                success: false,
                message: `Cannot find continent with id ${id}`,
                status: 404,
            };
        }
        if (updateContinentDto.name) {
            const checkContinentName = await this.continentsRepository.findOneBy({ name: updateContinentDto.name });
            if (checkContinentName) {
                return {
                    success: false,
                    message: `Continent ${name} already exists`,
                    status: 409
                };
            }
        }
        await this.continentsRepository.update(id, updateContinentDto);
        await this.continentsRepository.save(updateContinentDto);
        return {
            success: true,
            message: "Continent updated successfully!",
            status: 200
        };
    }
    async remove(id) {
        try {
            const checkContinent = await this.continentsRepository.findOneBy({ id });
            if (!checkContinent) {
                return {
                    success: false,
                    message: `Cannot find continent with id ${id}`,
                    status: 404
                };
            }
            await this.continentsRepository.delete(id);
            return {
                success: true,
                message: "Continent deleted successfully!",
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
exports.ContinentService = ContinentService;
exports.ContinentService = ContinentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(continent_entity_1.Continent)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContinentService);
//# sourceMappingURL=continent.service.js.map