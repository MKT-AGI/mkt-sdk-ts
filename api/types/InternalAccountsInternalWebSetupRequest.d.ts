import type * as MktAgiApi from "../index.js";
export interface InternalAccountsInternalWebSetupRequest {
    /** Email is the admin email address, used as login credential and notification address. */
    email: string;
    /** Name is an optional display name; defaults to the email prefix if empty. */
    name?: string | undefined;
    /** Password is the admin password, >= 8 characters with at least one letter and one digit. */
    password: string;
    preferences?: MktAgiApi.GithubComMktAgiAixInternalAccountsInternalDomainUserPreferences | undefined;
}
