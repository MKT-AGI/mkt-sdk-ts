import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace WalletsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class WalletsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<WalletsClient.Options>;
    constructor(options?: WalletsClient.Options);
    /**
     * Get the details of a wallet transfer by transfer number.
     *
     * @param {MktAgiApi.GetApiV1PaymentWalletTransfersTransferNoRequest} request
     * @param {WalletsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.wallets.getTransferDetail({
     *         transfer_no: 1
     *     })
     */
    getTransferDetail(request: MktAgiApi.GetApiV1PaymentWalletTransfersTransferNoRequest, requestOptions?: WalletsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalPaymentsInternalWebWalletTransferV2Response>;
    private __getTransferDetail;
    /**
     * List all wallets for the current authenticated user.
     *
     * @param {WalletsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wallets.listWallets()
     */
    listWallets(requestOptions?: WalletsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayInternalPaymentsInternalWebWalletV2Response>;
    private __listWallets;
    /**
     * Get a single wallet by ID with ownership verification.
     *
     * @param {MktAgiApi.GetApiV1PaymentWalletsIdRequest} request
     * @param {WalletsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.wallets.getWallet({
     *         id: 1
     *     })
     */
    getWallet(request: MktAgiApi.GetApiV1PaymentWalletsIdRequest, requestOptions?: WalletsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalPaymentsInternalWebWalletV2Response>;
    private __getWallet;
    /**
     * Convert all balance from the source wallet to a target-currency wallet in-place, applying the exchange rate with markup. Idempotent via idempotency_key.
     *
     * @param {MktAgiApi.PostApiV1PaymentWalletsIdConvertCurrencyRequest} request
     * @param {WalletsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wallets.convertWalletCurrency({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    convertWalletCurrency(request: MktAgiApi.PostApiV1PaymentWalletsIdConvertCurrencyRequest, requestOptions?: WalletsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __convertWalletCurrency;
    /**
     * List paginated transactions for a specific wallet.
     *
     * @param {MktAgiApi.GetApiV1PaymentWalletsIdTransactionsRequest} request
     * @param {WalletsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.wallets.listWalletTransactions({
     *         id: 1
     *     })
     */
    listWalletTransactions(request: MktAgiApi.GetApiV1PaymentWalletsIdTransactionsRequest, requestOptions?: WalletsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listWalletTransactions;
    /**
     * Transfer funds from the source wallet to another wallet belonging to the same user.
     *
     * @param {MktAgiApi.PostApiV1PaymentWalletsIdTransferRequest} request
     * @param {WalletsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.ConflictError}
     *
     * @example
     *     await client.wallets.transferBetweenWallets({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    transferBetweenWallets(request: MktAgiApi.PostApiV1PaymentWalletsIdTransferRequest, requestOptions?: WalletsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalPaymentsInternalWebWalletTransferEnvelope>;
    private __transferBetweenWallets;
    /**
     * Transfer all balance from a revenue wallet to the user's main wallet. Only revenue wallets are eligible.
     *
     * @param {MktAgiApi.PostApiV1PaymentWalletsIdTransferToMainRequest} request
     * @param {WalletsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.PaymentRequiredError}
     * @throws {@link MktAgiApi.ConflictError}
     *
     * @example
     *     await client.wallets.transferRevenueWalletBalanceToMainWallet({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    transferRevenueWalletBalanceToMainWallet(request: MktAgiApi.PostApiV1PaymentWalletsIdTransferToMainRequest, requestOptions?: WalletsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalPaymentsInternalWebWalletTransferEnvelope>;
    private __transferRevenueWalletBalanceToMainWallet;
}
