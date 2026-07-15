/**
 * @example
 *     {}
 */
export interface GetAdminBugReportsRequest {
    /** Filter by status (pending, reviewed, published, closed) */
    status?: string;
    /** Filter by domain label (chat, admin, ...) */
    domain?: string;
    /** Max results (default 20, max 100) */
    limit?: number;
    /** Page offset */
    offset?: number;
}
