import type * as MktAgiApi from "../index.js";
/**
 * Transfer is the optional transfer detail.
 */
export interface InternalPaymentsInternalWebWalletTransferV2Response {
    /** Amount is the transferred amount as a string. */
    amount?: string | undefined;
    /** BalanceTransactions lists the associated ledger entries. */
    balance_transactions?: MktAgiApi.InternalPaymentsInternalWebBalanceTransactionV2Response[] | undefined;
    /** CreatedAt is the creation Unix timestamp. */
    created_at?: number | undefined;
    /** Currency is the ISO currency code. */
    currency?: string | undefined;
    /** FromWalletID is the source wallet ID. */
    from_wallet_id?: number | undefined;
    /** Note is an optional human-readable note. */
    note?: string | undefined;
    /** Status is the transfer status. */
    status?: string | undefined;
    /** ToWalletID is the destination wallet ID. */
    to_wallet_id?: number | undefined;
    /** TransferNo is the unique transfer number. */
    transfer_no?: number | undefined;
}
