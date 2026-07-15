/**
 * Wallet transfer request body.
 */
export interface InternalPaymentsInternalWebWalletTransferRequest {
    /** Amount is the transfer amount as a string. */
    amount: string;
    /** IdempotencyKey prevents duplicate transfers. */
    idempotency_key: string;
    /** Note is an optional note for the transfer. */
    note?: string | undefined;
    /** ToWalletID is the ID of the destination wallet. */
    to_wallet_id: number;
}
