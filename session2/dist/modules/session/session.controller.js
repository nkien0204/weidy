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
exports.SessionController = void 0;
const common_1 = require("@nestjs/common");
const key_dto_1 = require("../../common/dtos/key.dto");
const session_service_1 = require("./session.service");
let SessionController = class SessionController {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    async login(keyDto) {
        return await this.sessionService.login(keyDto.walletId, keyDto.walletKey, keyDto.seed).catch(e => {
            throw new common_1.HttpException("error: " + e, common_1.HttpStatus.UNAUTHORIZED);
        });
    }
    async logout() {
        return await this.sessionService.logout().catch(e => {
            throw new common_1.HttpException("error: " + e, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }
    async createInvitation() {
        return await this.sessionService.createInvitation().catch(e => {
            throw new common_1.HttpException("error: " + e, common_1.HttpStatus.UNAUTHORIZED);
        });
    }
    async accepInvitation(invitationUrl) {
        return await this.sessionService.acceptInvitation(invitationUrl).catch(e => {
            throw new common_1.HttpException("error: " + e, common_1.HttpStatus.BAD_REQUEST);
        });
    }
};
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [key_dto_1.KeyDto]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('/invitations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "createInvitation", null);
__decorate([
    (0, common_1.Post)('/invitations/accept'),
    __param(0, (0, common_1.Query)('invitation-url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "accepInvitation", null);
SessionController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [session_service_1.SessionService])
], SessionController);
exports.SessionController = SessionController;
//# sourceMappingURL=session.controller.js.map