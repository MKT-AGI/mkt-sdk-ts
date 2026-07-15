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
export interface PatchGatewaySessionsIdRequest {
    /** Session ID */
    id: number;
    body: MktAgiApi.PatchGatewaySessionsIdRequestBody;
}
