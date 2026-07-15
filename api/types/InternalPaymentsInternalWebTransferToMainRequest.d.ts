/**
 * Transfer to main wallet request body.
 */
export interface InternalPaymentsInternalWebTransferToMainRequest {
    /** IdempotencyKey prevents duplicate transfers. */
    idempotency_key: string;
}
