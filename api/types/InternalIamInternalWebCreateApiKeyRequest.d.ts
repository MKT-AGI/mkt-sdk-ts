/**
 * Request body for creating a new API key.
 */
export interface InternalIamInternalWebCreateApiKeyRequest {
    /** Scopes specifies the permission scopes for the API key. Defaults to all scopes when empty. */
    scopes?: string[] | undefined;
}
