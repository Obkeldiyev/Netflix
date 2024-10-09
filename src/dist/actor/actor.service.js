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
exports.ActorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const actor_entity_1 = require("./entities/actor.entity");
const typeorm_2 = require("typeorm");
let ActorService = class ActorService {
    constructor(actorsRepository) {
        this.actorsRepository = actorsRepository;
    }
    async create(createActorDto) {
        try {
            let checkActor = await this.actorsRepository.findOne({ where: { fullname: createActorDto.fullname } });
            if (checkActor) {
                let actor = await this.actorsRepository.create(createActorDto);
                return {
                    success: true,
                    message: 'Actor has been created successfully✅'
                };
            }
            else {
                return {
                    success: false,
                    message: 'Actor is already exists❗'
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
            return await this.actorsRepository.find();
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
            let check = await this.actorsRepository.findOneBy({ id });
            if (check) {
                return {
                    success: true,
                    data: check
                };
            }
            else {
                return {
                    success: false,
                    message: 'There is no Actor like this❗'
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
    async update(updateActorDto) {
        try {
            let check = await this.actorsRepository.findOneBy({ id: updateActorDto.id });
            if (check) {
                let updateActor = await this.actorsRepository.update(updateActorDto, { id: updateActorDto.id });
                return {
                    success: true,
                    message: 'Updated successfully✅'
                };
            }
            else {
                return {
                    success: false,
                    message: 'There is no such user❗'
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
            let check = await this.actorsRepository.findOneBy({ id });
            if (check) {
                let deleteActor = await this.actorsRepository.delete(id);
                return {
                    success: true,
                    message: 'Deleted successfully✅'
                };
            }
            else {
                return {
                    success: false,
                    message: 'There is no such Actor❗'
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
exports.ActorService = ActorService;
exports.ActorService = ActorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(actor_entity_1.Actor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ActorService);
//# sourceMappingURL=actor.service.js.map