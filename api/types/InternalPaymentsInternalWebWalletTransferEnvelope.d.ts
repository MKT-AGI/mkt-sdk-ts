import type * as MktAgiApi from "../index.js";
/**
 * Transfer creation response envelope.
 */
export interface InternalPaymentsInternalWebWalletTransferEnvelope {
    /** BalanceTransactions lists the associated ledger entries. */
    balance_transactions?: MktAgiApi.InternalPaymentsInternalWebBalanceTransactionV2Response[] | undefined;
    transfer?: MktAgiApi.InternalPaymentsInternalWebWalletTransferV2Response | undefined;
    /** TransferNo is the unique transfer number. */
    transfer_no?: number | undefined;
}
