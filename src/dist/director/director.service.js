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
exports.DirectorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const director_entity_1 = require("./entities/director.entity");
const typeorm_2 = require("typeorm");
let DirectorService = class DirectorService {
    constructor(directorRepository) {
        this.directorRepository = directorRepository;
    }
    async create(createDirectorDto) {
        try {
            let checkDirector = await this.directorRepository.findOne({ where: { fullname: createDirectorDto.fullname } });
            if (checkDirector) {
                let create = await this.directorRepository.create(createDirectorDto);
                return {
                    success: true,
                    message: "Created successfully✅"
                };
            }
            else {
                return {
                    success: false,
                    message: 'Director already exists❗'
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
    async findAll() {
        try {
            return await this.directorRepository.find();
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
            let check = await this.directorRepository.findOneBy({ id });
            if (check) {
                return {
                    success: true,
                    data: check
                };
            }
            else {
                return {
                    success: false,
                    message: 'There is no info❗'
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
    async update(updateDirectorDto) {
        try {
            let check = await this.directorRepository.findOneBy({ id: updateDirectorDto.id });
            if (check) {
                let update = await this.directorRepository.update(updateDirectorDto, { id: updateDirectorDto.id });
                return {
                    success: true,
                    message: 'Updated successfully✅'
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
            let check = await this.directorRepository.findOneBy({ id });
            if (check) {
                let Delete = await this.directorRepository.delete({ id });
                return {
                    success: true,
                    message: 'Deleted successfully✅'
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
exports.DirectorService = DirectorService;
exports.DirectorService = DirectorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(director_entity_1.Director)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DirectorService);
//# sourceMappingURL=director.service.js.map