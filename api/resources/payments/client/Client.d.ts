import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace PaymentsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class PaymentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PaymentsClient.Options>;
    constructor(options?: PaymentsClient.Options);
    /**
     * List all payment orders for the authenticated user with pagination
     *
     * @param {MktAgiApi.GetApiV1PaymentOrdersRequest} request
     * @param {PaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.payments.listPaymentOrders()
     */
    listPaymentOrders(request?: MktAgiApi.GetApiV1PaymentOrdersRequest, requestOptions?: PaymentsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listPaymentOrders;
    /**
     * Create a new top-up payment order with an optional product
     *
     * @param {MktAgiApi.PostApiV1PaymentOrdersRequest} request
     * @param {PaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.payments.createPaymentOrder({
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    createPaymentOrder(request: MktAgiApi.PostApiV1PaymentOrdersRequest, requestOptions?: PaymentsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __createPaymentOrder;
    /**
     * Retrieve a payment order by ID for the authenticated user
     *
     * @param {MktAgiApi.GetApiV1PaymentOrdersIdRequest} request
     * @param {PaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.payments.getPaymentOrder({
     *         id: 1
     *     })
     */
    getPaymentOrder(request: MktAgiApi.GetApiV1PaymentOrdersIdRequest, requestOptions?: PaymentsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __getPaymentOrder;
}
