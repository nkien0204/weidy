import { AgentSession } from 'src/common/agent.base';
export declare class SessionService {
    session: AgentSession;
    login(walletId: string, walletKey: string, seed?: string): Promise<boolean>;
    createInvitation(): Promise<{
        invitationUrl: string;
        outOfBandRecord: import("@aries-framework/core").OutOfBandRecord;
    }>;
    acceptInvitation(invitationUrl: string): Promise<import("@aries-framework/core").OutOfBandRecord>;
    logout(): Promise<void>;
    private addListeners;
}
