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
export interface PutApiV1CommentsIdRequest {
    /** Comment ID */
    id: number;
    body: MktAgiApi.PutApiV1CommentsIdRequestBody;
}
