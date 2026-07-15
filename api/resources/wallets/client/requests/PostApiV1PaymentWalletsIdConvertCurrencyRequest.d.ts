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
export interface PostApiV1PaymentWalletsIdConvertCurrencyRequest {
    /** Source wallet ID */
    id: number;
    body: MktAgiApi.PostApiV1PaymentWalletsIdConvertCurrencyRequestBody;
}
