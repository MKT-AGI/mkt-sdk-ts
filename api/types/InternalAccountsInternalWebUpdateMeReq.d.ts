import type * as MktAgiApi from "../index.js";
/**
 * Fields to update on the current user's profile.
 */
export interface InternalAccountsInternalWebUpdateMeReq {
    /** AvatarURL is the new avatar image URL (must be HTTPS). */
    avatar_url?: string | undefined;
    /** Name is the new display name (will be sanitized and checked for uniqueness). */
    name?: string | undefined;
    preferences?: MktAgiApi.InternalAccountsInternalWebUserPreferencesReq | undefined;
}
