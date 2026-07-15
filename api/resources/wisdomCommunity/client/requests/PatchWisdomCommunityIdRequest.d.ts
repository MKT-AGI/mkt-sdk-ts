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
export interface PatchWisdomCommunityIdRequest {
    /** Community ID */
    id: number;
    body: MktAgiApi.PatchWisdomCommunityIdRequestBody;
}
