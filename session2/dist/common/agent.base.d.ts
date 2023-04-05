import { Agent, IndyPoolConfig, InitConfig } from "@aries-framework/core";
interface AgentData {
    connectionId?: string;
    credentialId?: string;
    proofId?: string;
    credDefId?: string;
}
export declare class AgentSession {
    config: InitConfig;
    port: number;
    label: string;
    agent: Agent;
    data: AgentData;
    constructor({ port, label, walletConfig, ledgerConfig, didSeed, }: {
        port: number;
        label: string;
        walletConfig?: {
            id: string;
            key: string;
        };
        ledgerConfig: IndyPoolConfig;
        didSeed?: string;
    });
    initialize(): Promise<void>;
    exit(): Promise<void>;
}
export {};
