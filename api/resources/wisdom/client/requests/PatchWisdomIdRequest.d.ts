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
export interface PatchWisdomIdRequest {
    /** Content ID */
    id: number;
    body: MktAgiApi.PatchWisdomIdRequestBody;
}
