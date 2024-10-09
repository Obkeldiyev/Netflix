"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContinentModule = void 0;
const common_1 = require("@nestjs/common");
const continent_service_1 = require("./continent.service");
const continent_controller_1 = require("./continent.controller");
const typeorm_1 = require("@nestjs/typeorm");
const continent_entity_1 = require("./entities/continent.entity");
let ContinentModule = class ContinentModule {
};
exports.ContinentModule = ContinentModule;
exports.ContinentModule = ContinentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([continent_entity_1.Continent])],
        controllers: [continent_controller_1.ContinentController],
        providers: [continent_service_1.ContinentService],
    })
], ContinentModule);
//# sourceMappingURL=continent.module.js.map