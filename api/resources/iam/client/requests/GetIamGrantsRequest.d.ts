/**
 * @example
 *     {
 *         resource_type: "resource_type",
 *         resource_id: 1
 *     }
 */
export interface GetIamGrantsRequest {
    /** Resource type */
    resource_type: string;
    /** Resource ID */
    resource_id: number;
}
