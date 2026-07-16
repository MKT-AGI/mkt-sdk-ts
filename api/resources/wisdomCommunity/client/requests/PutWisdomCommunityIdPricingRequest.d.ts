import type * as MktAgiApi from "../../../../index.js";
/**
 * @example
 *     {
 *         id: 1,
 *         body: {
 *             "key": "value"
 *         }
 *     }
 */
export interface PutWisdomCommunityIdPricingRequest {
    /** Community ID */
    id: number;
    body: MktAgiApi.PutWisdomCommunityIdPricingRequestBody;
}
