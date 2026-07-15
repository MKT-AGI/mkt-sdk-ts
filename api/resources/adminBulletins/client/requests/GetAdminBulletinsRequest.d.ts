/**
 * @example
 *     {}
 */
export interface GetAdminBulletinsRequest {
    /** Filter by type */
    type?: string;
    /** Filter by category */
    category?: string;
    /** Filter by section */
    section?: string;
    /** Filter by version */
    version?: string;
    /** Include archived bulletins */
    include_archived?: boolean;
    /** Max results */
    limit?: number;
    /** Cursor value for pagination */
    cursor_val?: number;
    /** Cursor ID for pagination */
    cursor_id?: number;
}
