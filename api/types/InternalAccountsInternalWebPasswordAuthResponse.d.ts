/**
 * Authenticated user info and new-user flag for password auth.
 */
export interface InternalAccountsInternalWebPasswordAuthResponse {
    /** IsNewUser indicates whether a new account was created (true for register, false for login/reset). */
    is_new_user?: boolean | undefined;
    /** User is the authenticated user object. */
    user?: unknown | undefined;
}
