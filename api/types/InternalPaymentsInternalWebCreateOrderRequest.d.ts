/**
 * Create payment order request body.
 */
export interface InternalPaymentsInternalWebCreateOrderRequest {
    /** Amount is the top-up amount in CNY. */
    amount?: number | undefined;
    /**
     * Method selects the payment provider (e.g. "alipay"); defaults to the
     * handler's DefaultMethod when omitted.
     */
    method?: string | undefined;
    /** ProductID is the optional product identifier for the top-up. */
    product_id?: number | undefined;
}
