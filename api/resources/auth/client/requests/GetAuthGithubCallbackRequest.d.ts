/**
 * @example
 *     {
 *         state: "state",
 *         code: "code"
 *     }
 */
export interface GetAuthGithubCallbackRequest {
    /** OAuth state */
    state: string;
    /** GitHub authorization code */
    code: string;
}
