import { Controller, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { SessionService } from '../session/session.service';
import { HolderService } from './holder.service';

@Controller('holder')
export class HolderController {
    constructor(
        private readonly holderService: HolderService,
        private readonly sessionService: SessionService
    ) { }

    @Post('/credentials/accept')
    public async acceptCredential(
        @Query('credential-id') credentialId: string,
    ) {
        return await this.holderService.acceptOffer(this.sessionService.session, credentialId).catch(e => {
            throw new HttpException("error: " + e, HttpStatus.BAD_REQUEST)
        });
    }

    @Post('/proofs/accept')
    public async accepProofRequest(
        @Query('proof-id') proofId: string,
    ) {
        return await this.holderService.acceptProofRequest(this.sessionService.session, proofId).catch(e => {
            throw new HttpException("error: " + e, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }
}
