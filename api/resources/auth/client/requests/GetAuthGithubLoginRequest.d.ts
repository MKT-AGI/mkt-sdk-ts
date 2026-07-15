/**
 * @example
 *     {
 *         ref_uri: "ref_uri"
 *     }
 */
export interface GetAuthGithubLoginRequest {
    /** Post-auth redirect URI (will be redirected to verbatim) */
    ref_uri: string;
}
