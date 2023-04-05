import { SessionService } from '../session/session.service';
import { CredentialInput } from './dto/credentialInput.dto';
import { SchemaInput } from './dto/schemaInput.dto';
import { IssuerService } from './issuer.service';
export declare class IssuerController {
    private readonly issuerService;
    private readonly sessionService;
    constructor(issuerService: IssuerService, sessionService: SessionService);
    createSchemaAndDef(schema: SchemaInput): Promise<any>;
    offerCredential(input: CredentialInput, credDefId?: string): Promise<import("@aries-framework/core").CredentialExchangeRecord>;
}
