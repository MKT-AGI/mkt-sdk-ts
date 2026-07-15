/**
 * Authenticated user info and new-user flag.
 */
export interface InternalAccountsInternalWebAuthResponse {
    /** IsNewUser indicates whether a new account was created during verification. */
    is_new_user?: boolean | undefined;
    /** User is the authenticated user object. */
    user?: unknown | undefined;
}
