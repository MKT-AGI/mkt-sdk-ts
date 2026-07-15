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
export interface PutAdminBulletinsIdRequest {
    /** Bulletin ID */
    id: number;
    body: MktAgiApi.PutAdminBulletinsIdRequestBody;
}
