/**
 * Secret value and description for create/update.
 */
export interface InternalAccountsInternalWebUpsertSecretReq {
    /** Description is an optional human-readable description of the secret (max 8KiB). */
    description?: string | undefined;
    /** Value is the secret value to encrypt and store (max 64KiB). */
    value?: string | undefined;
}
