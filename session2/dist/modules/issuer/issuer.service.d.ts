import { AgentSession } from 'src/common/agent.base';
import { CredentialInput } from './dto/credentialInput.dto';
import { SchemaInput } from './dto/schemaInput.dto';
export declare class IssuerService {
    issueCredential(issuer: AgentSession, payload: CredentialInput, credDefId?: string): Promise<import("@aries-framework/core").CredentialExchangeRecord>;
    createCredCredentialSchemaAndDef(issuer: AgentSession, schemaInput: SchemaInput): Promise<any>;
}
