"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorAwardModule = void 0;
const common_1 = require("@nestjs/common");
const actor_award_service_1 = require("./actor-award.service");
const actor_award_controller_1 = require("./actor-award.controller");
let ActorAwardModule = class ActorAwardModule {
};
exports.ActorAwardModule = ActorAwardModule;
exports.ActorAwardModule = ActorAwardModule = __decorate([
    (0, common_1.Module)({
        controllers: [actor_award_controller_1.ActorAwardController],
        providers: [actor_award_service_1.ActorAwardService],
    })
], ActorAwardModule);
//# sourceMappingURL=actor-award.module.js.map