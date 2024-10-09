"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialsModule = void 0;
const common_1 = require("@nestjs/common");
const serials_service_1 = require("./serials.service");
const serials_controller_1 = require("./serials.controller");
const typeorm_1 = require("@nestjs/typeorm");
const serial_entity_1 = require("./entities/serial.entity");
let SerialsModule = class SerialsModule {
};
exports.SerialsModule = SerialsModule;
exports.SerialsModule = SerialsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([serial_entity_1.Serial])],
        controllers: [serials_controller_1.SerialsController],
        providers: [serials_service_1.SerialsService],
    })
], SerialsModule);
//# sourceMappingURL=serials.module.js.map