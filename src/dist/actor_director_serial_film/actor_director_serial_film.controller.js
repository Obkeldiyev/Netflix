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
exports.ActorDirectorSerialFilmController = void 0;
const common_1 = require("@nestjs/common");
const actor_director_serial_film_service_1 = require("./actor_director_serial_film.service");
const create_actor_director_serial_film_dto_1 = require("./dto/create-actor_director_serial_film.dto");
const update_actor_director_serial_film_dto_1 = require("./dto/update-actor_director_serial_film.dto");
let ActorDirectorSerialFilmController = class ActorDirectorSerialFilmController {
    constructor(actorDirectorSerialFilmService) {
        this.actorDirectorSerialFilmService = actorDirectorSerialFilmService;
    }
    create(createActorDirectorSerialFilmDto) {
        return this.actorDirectorSerialFilmService.create(createActorDirectorSerialFilmDto);
    }
    findAll() {
        return this.actorDirectorSerialFilmService.findAll();
    }
    findOne(id) {
        return this.actorDirectorSerialFilmService.findOne(+id);
    }
    update(id, updateActorDirectorSerialFilmDto) {
        return this.actorDirectorSerialFilmService.update(+id, updateActorDirectorSerialFilmDto);
    }
    remove(id) {
        return this.actorDirectorSerialFilmService.remove(+id);
    }
};
exports.ActorDirectorSerialFilmController = ActorDirectorSerialFilmController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_actor_director_serial_film_dto_1.CreateActorDirectorSerialFilmDto]),
    __metadata("design:returntype", void 0)
], ActorDirectorSerialFilmController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActorDirectorSerialFilmController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActorDirectorSerialFilmController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_actor_director_serial_film_dto_1.UpdateActorDirectorSerialFilmDto]),
    __metadata("design:returntype", void 0)
], ActorDirectorSerialFilmController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActorDirectorSerialFilmController.prototype, "remove", null);
exports.ActorDirectorSerialFilmController = ActorDirectorSerialFilmController = __decorate([
    (0, common_1.Controller)('actor-director-serial-film'),
    __metadata("design:paramtypes", [actor_director_serial_film_service_1.ActorDirectorSerialFilmService])
], ActorDirectorSerialFilmController);
//# sourceMappingURL=actor_director_serial_film.controller.js.map