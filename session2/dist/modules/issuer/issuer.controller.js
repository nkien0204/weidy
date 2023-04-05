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
exports.IssuerController = void 0;
const common_1 = require("@nestjs/common");
const session_service_1 = require("../session/session.service");
const credentialInput_dto_1 = require("./dto/credentialInput.dto");
const schemaInput_dto_1 = require("./dto/schemaInput.dto");
const issuer_service_1 = require("./issuer.service");
let IssuerController = class IssuerController {
    constructor(issuerService, sessionService) {
        this.issuerService = issuerService;
        this.sessionService = sessionService;
    }
    async createSchemaAndDef(schema) {
        return await this.issuerService.createCredCredentialSchemaAndDef(this.sessionService.session, schema).catch(e => {
            throw new common_1.HttpException("error: " + e, common_1.HttpStatus.BAD_REQUEST);
        });
    }
    async offerCredential(input, credDefId) {
        return await this.issuerService.issueCredential(this.sessionService.session, input, credDefId).catch(e => {
            throw new common_1.HttpException("error: " + e, common_1.HttpStatus.BAD_REQUEST);
        });
    }
};
__decorate([
    (0, common_1.Post)('/credentials/schemas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schemaInput_dto_1.SchemaInput]),
    __metadata("design:returntype", Promise)
], IssuerController.prototype, "createSchemaAndDef", null);
__decorate([
    (0, common_1.Post)('/credentials/offer'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('cred-def-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credentialInput_dto_1.CredentialInput, String]),
    __metadata("design:returntype", Promise)
], IssuerController.prototype, "offerCredential", null);
IssuerController = __decorate([
    (0, common_1.Controller)('issuer'),
    __metadata("design:paramtypes", [issuer_service_1.IssuerService,
        session_service_1.SessionService])
], IssuerController);
exports.IssuerController = IssuerController;
//# sourceMappingURL=issuer.controller.js.map