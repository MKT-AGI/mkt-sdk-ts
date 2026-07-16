/**
 * Request body for granting resource access.
 */
export interface InternalIamInternalWebGrantAccessRequest {
    /** resource primary key */
    resource_id: number;
    /** "aigateway_model" | "aigateway_route" | "files_file" */
    resource_type: string;
    /** target user ID */
    user_id: number;
}
