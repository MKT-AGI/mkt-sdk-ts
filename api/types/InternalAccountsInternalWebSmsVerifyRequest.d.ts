import type * as MktAgiApi from "../index.js";
/**
 * SMS verification code and phone number for login/registration.
 */
export interface InternalAccountsInternalWebSmsVerifyRequest {
    /** Code is the verification code received via SMS. */
    code: string;
    /** Phone is the mobile phone number to verify. */
    phone: string;
    preferences?: MktAgiApi.GithubComMktAgiAixInternalAccountsInternalDomainUserPreferences | undefined;
}
