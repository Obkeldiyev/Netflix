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
exports.AwardService = void 0;
const common_1 = require("@nestjs/common");
const award_entity_1 = require("./entities/award.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AwardService = class AwardService {
    constructor(awardRepository) {
        this.awardRepository = awardRepository;
    }
    async create(createAwardDto) {
        try {
            let checkAward = await this.awardRepository.findOne({ where: { name: createAwardDto.name } });
            if (checkAward) {
                let createAward = await this.awardRepository.create(createAwardDto);
                return {
                    success: true,
                    message: 'Award has been created✅'
                };
            }
            else {
                return {
                    success: false,
                    message: 'There Award is already exists❗'
                };
            }
        }
        catch (error) {
            return {
                success: false,
                mesage: error.message
            };
        }
    }
    async findAll() {
        try {
            return await this.awardRepository.find();
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async findOne(id) {
        try {
            let check = await this.awardRepository.findOneBy({ id });
            if (check) {
                return {
                    success: true,
                    data: check
                };
            }
            else {
                return {
                    success: false,
                    message: 'There is no Award like this❗'
                };
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async update(updateAwardDto) {
        try {
            let check = await this.awardRepository.findOneBy({ id: updateAwardDto.id });
            if (check) {
                await this.awardRepository.update(updateAwardDto, { id: updateAwardDto.id });
                return {
                    success: true,
                    message: "Updated successfully✅"
                };
            }
            else {
                return {
                    success: false,
                    message: 'There is no Award like this❗'
                };
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async remove(id) {
        try {
            let check = await this.awardRepository.findOneBy({ id });
            if (check) {
                await this.awardRepository.delete({ id });
                return {
                    success: true,
                    message: 'Deleted successfully✅'
                };
            }
            else {
                return {
                    success: false,
                    message: 'There is no data to delete❗'
                };
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
};
exports.AwardService = AwardService;
exports.AwardService = AwardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(award_entity_1.Award)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AwardService);
//# sourceMappingURL=award.service.js.map