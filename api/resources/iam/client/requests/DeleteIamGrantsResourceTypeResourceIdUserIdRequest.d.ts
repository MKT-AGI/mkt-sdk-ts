/**
 * @example
 *     {
 *         resource_type: "resource_type",
 *         resource_id: 1,
 *         user_id: 1
 *     }
 */
export interface DeleteIamGrantsResourceTypeResourceIdUserIdRequest {
    /** Resource type */
    resource_type: string;
    /** Resource ID */
    resource_id: number;
    /** User ID */
    user_id: number;
}
