/**
 * @example
 *     {
 *         user_id: 1,
 *         key: "key"
 *     }
 */
export interface GetSecretsUserIdKeyRequest {
    /** User ID */
    user_id: number;
    /** Secret key */
    key: string;
}
