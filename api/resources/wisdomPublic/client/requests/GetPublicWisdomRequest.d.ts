/**
 * @example
 *     {}
 */
export interface GetPublicWisdomRequest {
    /** filter by author username (resolved to user_id by middleware) */
    username?: string;
    /** kind filter */
    kind?: string;
    /** type filter */
    type?: string;
    /** community ID filter */
    community_id?: number;
    /** community slug filter, requires username */
    community_slug?: string;
    /** slug filter, scoped within community_slug when present */
    slug?: string;
    /** search by promise keyword */
    promise_search?: string;
    /** pagination offset, default 0 */
    offset?: number;
    /** pagination limit, default 20, max 100 */
    limit?: number;
}
