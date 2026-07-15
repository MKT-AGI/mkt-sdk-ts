/**
 * @example
 *     {}
 */
export interface GetWisdomRequest {
    /** kind filter */
    kind?: string;
    /** type filter */
    type?: string;
    /** community ID filter */
    community_id?: number;
    /** minimum confidence filter */
    min_confidence?: number;
    /** search by promise keyword */
    promise_search?: string;
    /** pagination offset, default 0 */
    offset?: number;
    /** pagination limit, default 20, max 100 */
    limit?: number;
}
