import type * as MktAgiApi from "../../../../index.js";
/**
 * @example
 *     {
 *         user_id: 1,
 *         id: 1,
 *         body: {
 *             "key": "value"
 *         }
 *     }
 */
export interface PostGatewayUserIdModelsIdFiltersRequest {
    /** User ID */
    user_id: number;
    /** Model ID */
    id: number;
    body: MktAgiApi.PostGatewayUserIdModelsIdFiltersRequestBody;
}
