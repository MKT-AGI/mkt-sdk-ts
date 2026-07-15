/**
 * @example
 *     {
 *         id: 1
 *     }
 */
export interface GetWisdomIdRequest {
    /** Content ID */
    id: number;
    /** Context depth: 0 (default) or 1 */
    depth?: number;
}
