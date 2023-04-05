import { KeyDto } from 'src/common/dtos/key.dto';
import { SessionService } from './session.service';
export declare class SessionController {
    private readonly sessionService;
    constructor(sessionService: SessionService);
    login(keyDto: KeyDto): Promise<boolean>;
    logout(): Promise<void>;
    createInvitation(): Promise<{
        invitationUrl: string;
        outOfBandRecord: import("@aries-framework/core").OutOfBandRecord;
    }>;
    accepInvitation(invitationUrl: string): Promise<import("@aries-framework/core").OutOfBandRecord>;
}
