/**
 * @example
 *     {
 *         state: "state",
 *         code: "code"
 *     }
 */
export interface GetAuthGoogleCallbackRequest {
    /** OAuth state */
    state: string;
    /** Google authorization code */
    code: string;
}
