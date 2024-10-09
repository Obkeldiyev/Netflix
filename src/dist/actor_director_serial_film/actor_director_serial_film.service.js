"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorDirectorSerialFilmService = void 0;
const common_1 = require("@nestjs/common");
let ActorDirectorSerialFilmService = class ActorDirectorSerialFilmService {
    create(createActorDirectorSerialFilmDto) {
        return 'This action adds a new actorDirectorSerialFilm';
    }
    findAll() {
        return `This action returns all actorDirectorSerialFilm`;
    }
    findOne(id) {
        return `This action returns a #${id} actorDirectorSerialFilm`;
    }
    update(id, updateActorDirectorSerialFilmDto) {
        return `This action updates a #${id} actorDirectorSerialFilm`;
    }
    remove(id) {
        return `This action removes a #${id} actorDirectorSerialFilm`;
    }
};
exports.ActorDirectorSerialFilmService = ActorDirectorSerialFilmService;
exports.ActorDirectorSerialFilmService = ActorDirectorSerialFilmService = __decorate([
    (0, common_1.Injectable)()
], ActorDirectorSerialFilmService);
//# sourceMappingURL=actor_director_serial_film.service.js.map