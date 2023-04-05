"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentSession = void 0;
const core_1 = require("@aries-framework/core");
const node_1 = require("@aries-framework/node");
class AgentSession {
    constructor({ port, label, walletConfig, ledgerConfig, didSeed, }) {
        this.port = port;
        this.label = label;
        const agentConfig = {
            label: label,
            walletConfig: walletConfig,
            endpoints: [`http://localhost:${this.port}`],
            autoAcceptConnections: true,
            autoAcceptCredentials: core_1.AutoAcceptCredential.ContentApproved,
            publicDidSeed: didSeed,
            indyLedgers: [ledgerConfig]
        };
        this.config = agentConfig;
        this.agent = new core_1.Agent({
            config: agentConfig,
            dependencies: node_1.agentDependencies
        });
        this.data = {};
        this.agent.registerInboundTransport(new node_1.HttpInboundTransport({ port }));
        this.agent.registerOutboundTransport(new core_1.HttpOutboundTransport());
        this.agent.registerOutboundTransport(new core_1.WsOutboundTransport());
    }
    async initialize() {
        await this.agent.initialize();
        console.log(`Agent session is running on ${this.port}`);
    }
    async exit() {
        await this.agent.shutdown();
        console.log(`Agent session is down.`);
    }
}
exports.AgentSession = AgentSession;
//# sourceMappingURL=agent.base.js.map