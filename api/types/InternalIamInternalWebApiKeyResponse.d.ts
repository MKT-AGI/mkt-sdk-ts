/**
 * Summary of an API key, without the raw key or hash.
 */
export interface InternalIamInternalWebApiKeyResponse {
    /** Enabled indicates whether the API key is active and usable. */
    enabled?: boolean | undefined;
    /** ID is the unique database identifier for the API key. */
    id?: number | undefined;
    /** KeyPrefix is a short prefix for identifying the key. */
    key_prefix?: string | undefined;
    /** Scopes lists the permission scopes assigned to this key. */
    scopes?: string[] | undefined;
}
