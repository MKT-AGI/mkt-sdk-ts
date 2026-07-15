import type * as MktAgiApi from "../../../../index.js";
/**
 * @example
 *     {
 *         user_id: 1,
 *         body: {
 *             "key": "value"
 *         }
 *     }
 */
export interface PostGatewayUserIdProvidersRequest {
    /** User ID */
    user_id: number;
    body: MktAgiApi.PostGatewayUserIdProvidersRequestBody;
}
