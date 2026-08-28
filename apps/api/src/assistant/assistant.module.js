"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistantModule = void 0;
const common_1 = require("@nestjs/common");
const assistant_controller_1 = require("./assistant.controller");
const assistant_service_1 = require("./assistant.service");
const deterministic_filter_service_1 = require("./deterministic-filter.service");
const bedrock_service_1 = require("./bedrock.service");
const catalogue_module_1 = require("../catalogue/catalogue.module");
let AssistantModule = class AssistantModule {
};
exports.AssistantModule = AssistantModule;
exports.AssistantModule = AssistantModule = __decorate([
    (0, common_1.Module)({
        imports: [catalogue_module_1.CatalogueModule],
        controllers: [assistant_controller_1.AssistantController],
        providers: [assistant_service_1.AssistantService, deterministic_filter_service_1.DeterministicFilterService, bedrock_service_1.BedrockService],
        exports: [assistant_service_1.AssistantService]
    })
], AssistantModule);
//# sourceMappingURL=assistant.module.js.map