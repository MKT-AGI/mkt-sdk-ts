/**
 * Preferences is the user preference object for partial update.
 */
export interface InternalAccountsInternalWebUserPreferencesReq {
    /** Lang is the user's preferred language (e.g., "en", "zh"). */
    lang?: string | undefined;
    /** Theme is the user's preferred UI theme (e.g., "light", "dark"). */
    theme?: string | undefined;
}
