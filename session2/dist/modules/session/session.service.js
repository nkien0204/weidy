"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const core_1 = require("@aries-framework/core");
const common_1 = require("@nestjs/common");
const agent_base_1 = require("../../common/agent.base");
const config_1 = require("../../common/config");
let SessionService = class SessionService {
    async login(walletId, walletKey, seed) {
        const agentPort = process.env.AGENT_PORT ? parseInt(process.env.AGENT_PORT) : 9000;
        const newSession = new agent_base_1.AgentSession({
            label: 'agent',
            port: agentPort,
            walletConfig: {
                id: walletId,
                key: walletKey
            },
            ledgerConfig: config_1.ledgerPoolConfig,
            didSeed: seed
        });
        if (this.session) {
            await this.session.exit();
        }
        this.session = newSession;
        await this.session.initialize();
        this.addListeners();
        return true;
    }
    async createInvitation() {
        const outOfBandRecord = await this.session.agent.oob.createInvitation();
        const domain = `https://localhost:${this.session.port}`;
        return {
            invitationUrl: outOfBandRecord.outOfBandInvitation.toUrl({
                domain
            }),
            outOfBandRecord,
        };
    }
    async acceptInvitation(invitationUrl) {
        const { outOfBandRecord } = await this.session.agent.oob.receiveInvitationFromUrl(invitationUrl);
        return outOfBandRecord;
    }
    async logout() {
        this.session.exit();
    }
    addListeners() {
        this.session.agent.events.on(core_1.ConnectionEventTypes.ConnectionStateChanged, async ({ payload }) => {
            if (payload.connectionRecord.state === core_1.DidExchangeState.Completed) {
                console.log(`Connection setup successfully `, payload);
                this.session.data.connectionId = payload.connectionRecord.id;
            }
        });
        this.session.agent.events.on(core_1.CredentialEventTypes.CredentialStateChanged, async ({ payload }) => {
            if (payload.credentialRecord.state === core_1.CredentialState.OfferReceived) {
                console.log(`Credential received:`, payload);
                this.session.data.credentialId = payload.credentialRecord.id;
            }
        });
        this.session.agent.events.on(core_1.ProofEventTypes.ProofStateChanged, async ({ payload }) => {
            console.log("proof state change event:", payload.proofRecord);
            if (payload.proofRecord.state === core_1.ProofState.RequestReceived) {
                console.log(`Proof Request received:`, payload);
                this.session.data.proofId = payload.proofRecord.id;
            }
        });
    }
};
SessionService = __decorate([
    (0, common_1.Injectable)()
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map