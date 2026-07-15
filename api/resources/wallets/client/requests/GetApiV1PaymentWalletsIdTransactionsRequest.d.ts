/**
 * @example
 *     {
 *         id: 1
 *     }
 */
export interface GetApiV1PaymentWalletsIdTransactionsRequest {
    /** Wallet ID */
    id: number;
    /** Page number (default 1) */
    page?: number;
    /** Items per page (default 20, max 100) */
    limit?: number;
}
