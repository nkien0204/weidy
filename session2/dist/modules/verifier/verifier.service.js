"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifierService = void 0;
const common_1 = require("@nestjs/common");
let VerifierService = class VerifierService {
    async checkProof(verifier, proofId) {
        const proofRecord = await verifier.agent.proofs.findById(proofId || verifier.data.proofId);
        const presentation = await verifier.agent.proofs.findPresentationMessage(proofId || verifier.data.proofId);
        return { proofRecord, presentation };
    }
    async createProofRequest(verifier, credDefId) {
        const proofRecord = await verifier.agent.proofs.requestProof({
            protocolVersion: 'v1',
            connectionId: verifier.data.connectionId,
            proofFormats: {
                indy: {
                    requestedAttributes: {
                        attr1_referent: {
                            name: 'name',
                            restrictions: [
                                { credentialDefinitionId: credDefId },
                            ],
                        },
                        attr2_referent: {
                            name: 'sex',
                            restrictions: [
                                { credentialDefinitionId: credDefId },
                            ],
                        },
                        attr3_referent: {
                            name: 'birth_year',
                            restrictions: [
                                { credentialDefinitionId: credDefId },
                            ],
                        },
                    },
                },
            },
        });
        verifier.data.proofId = proofRecord.id;
        return proofRecord;
    }
};
VerifierService = __decorate([
    (0, common_1.Injectable)()
], VerifierService);
exports.VerifierService = VerifierService;
//# sourceMappingURL=verifier.service.js.map