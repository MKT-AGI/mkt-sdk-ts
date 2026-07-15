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
export interface PatchAdminFilesIdRequest {
    /** File ID */
    id: number;
    body: MktAgiApi.PatchAdminFilesIdRequestBody;
}
