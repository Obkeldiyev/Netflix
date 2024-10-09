"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorModule = void 0;
const common_1 = require("@nestjs/common");
const director_service_1 = require("./director.service");
const director_controller_1 = require("./director.controller");
const typeorm_1 = require("@nestjs/typeorm");
const director_entity_1 = require("./entities/director.entity");
let DirectorModule = class DirectorModule {
};
exports.DirectorModule = DirectorModule;
exports.DirectorModule = DirectorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([director_entity_1.Director])],
        controllers: [director_controller_1.DirectorController],
        providers: [director_service_1.DirectorService],
    })
], DirectorModule);
//# sourceMappingURL=director.module.js.map