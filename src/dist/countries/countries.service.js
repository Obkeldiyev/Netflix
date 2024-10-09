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
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const country_entity_1 = require("./entities/country.entity");
const typeorm_2 = require("typeorm");
let CountriesService = class CountriesService {
    constructor(countriesRepository) {
        this.countriesRepository = countriesRepository;
    }
    async create(createCountryDto) {
        try {
            const checkCountryName = await this.countriesRepository.findOneBy({
                name: createCountryDto.name,
            });
            if (checkCountryName) {
                return {
                    success: false,
                    message: `County with ${checkCountryName.name} already exists`,
                    status: 409,
                };
            }
            const createdCountry = await this.countriesRepository.create(createCountryDto);
            await this.countriesRepository.save(createdCountry);
            return {
                success: true,
                message: 'Country created successfully!',
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
            return await this.countriesRepository.find();
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
        return this.countriesRepository.findOneBy({ id });
    }
    async update(id, updateCountryDto) {
        try {
            const checkCountry = await this.countriesRepository.findOneBy({ id });
            if (!checkCountry) {
                return {
                    success: false,
                    message: `Cannot find country with id ${id}`,
                    status: 404,
                };
            }
            if (updateCountryDto.name) {
                const checkCountryName = await this.countriesRepository.findOneBy({ name: updateCountryDto.name });
                if (checkCountryName) {
                    return {
                        success: false,
                        message: `Country ${updateCountryDto.name} already exists`,
                        status: 409
                    };
                }
            }
            await this.countriesRepository.update(id, updateCountryDto);
            await this.countriesRepository.save(updateCountryDto);
            return {
                success: true,
                message: 'Country updated successfully!',
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
            const checkCountry = await this.countriesRepository.findOneBy({ id });
            if (checkCountry) {
                return {
                    success: false,
                    message: `Cannot find country with id ${id}`,
                    status: 404,
                };
            }
            await this.countriesRepository.delete(id);
            return {
                success: true,
                message: 'Country deleted successfully!',
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
exports.CountriesService = CountriesService;
exports.CountriesService = CountriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(country_entity_1.Country)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CountriesService);
//# sourceMappingURL=countries.service.js.map