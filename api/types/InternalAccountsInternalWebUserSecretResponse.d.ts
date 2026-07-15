/**
 * User secret metadata without the decrypted value.
 */
export interface InternalAccountsInternalWebUserSecretResponse {
    /** CreatedAt is the Unix timestamp of when the secret was created. */
    created_at?: number | undefined;
    /** Description is a human-readable description of the secret. */
    description?: string | undefined;
    /** Key is the unique key identifying this secret within the user's namespace. */
    key?: string | undefined;
    /** UpdatedAt is the Unix timestamp of when the secret was last updated. */
    updated_at?: number | undefined;
    /** UserID is the ID of the user who owns this secret. */
    user_id?: number | undefined;
}
