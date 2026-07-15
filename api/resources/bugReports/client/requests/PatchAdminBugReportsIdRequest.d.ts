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
export interface PatchAdminBugReportsIdRequest {
    /** Bug report ID */
    id: number;
    body: MktAgiApi.PatchAdminBugReportsIdRequestBody;
}
