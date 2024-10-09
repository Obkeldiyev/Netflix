"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorAwardService = void 0;
const common_1 = require("@nestjs/common");
let DirectorAwardService = class DirectorAwardService {
    create(createDirectorAwardDto) {
        return 'This action adds a new directorAward';
    }
    findAll() {
        return `This action returns all directorAward`;
    }
    findOne(id) {
        return `This action returns a #${id} directorAward`;
    }
    update(id, updateDirectorAwardDto) {
        return `This action updates a #${id} directorAward`;
    }
    remove(id) {
        return `This action removes a #${id} directorAward`;
    }
};
exports.DirectorAwardService = DirectorAwardService;
exports.DirectorAwardService = DirectorAwardService = __decorate([
    (0, common_1.Injectable)()
], DirectorAwardService);
//# sourceMappingURL=director-award.service.js.map