"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewsModule = void 0;
const common_1 = require("@nestjs/common");
const views_service_1 = require("./views.service");
const views_controller_1 = require("./views.controller");
const typeorm_1 = require("@nestjs/typeorm");
const view_entity_1 = require("./entities/view.entity");
let ViewsModule = class ViewsModule {
};
exports.ViewsModule = ViewsModule;
exports.ViewsModule = ViewsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([view_entity_1.View])],
        controllers: [views_controller_1.ViewsController],
        providers: [views_service_1.ViewsService],
    })
], ViewsModule);
//# sourceMappingURL=views.module.js.map