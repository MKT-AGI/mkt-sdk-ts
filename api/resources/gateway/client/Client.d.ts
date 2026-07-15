import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace GatewayClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class GatewayClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<GatewayClient.Options>;
    constructor(options?: GatewayClient.Options);
    /**
     * Sends a "say hi" prompt to the specified provider+model and returns the response.
     *
     * @param {MktAgiApi.PostGatewayUserIdTestModelRequest} request
     * @param {GatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.TooManyRequestsError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.gateway.testModelConnectivity({
     *         user_id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    testModelConnectivity(request: MktAgiApi.PostGatewayUserIdTestModelRequest, requestOptions?: GatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebTestModelResponse>;
    private __testModelConnectivity;
    /**
     * Returns paginated request logs for the current user.
     *
     * @param {MktAgiApi.GetGatewayLogsRequest} request
     * @param {GatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.gateway.listRequestLogs()
     */
    listRequestLogs(request?: MktAgiApi.GetGatewayLogsRequest, requestOptions?: GatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebListLogsResponse>;
    private __listRequestLogs;
    /**
     * Returns models that the current authenticated user (via cookie or API key) is allowed to see.
     *
     * @param {GatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.gateway.listModelsVisibleToCurrentPrincipal()
     */
    listModelsVisibleToCurrentPrincipal(requestOptions?: GatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __listModelsVisibleToCurrentPrincipal;
    /**
     * Returns revenue summary for all models owned by the current user.
     *
     * @param {MktAgiApi.GetGatewaySellerRevenueRequest} request
     * @param {GatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.gateway.sellerRevenueSummary()
     */
    sellerRevenueSummary(request?: MktAgiApi.GetGatewaySellerRevenueRequest, requestOptions?: GatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebSellerRevenueResponse>;
    private __sellerRevenueSummary;
    /**
     * Returns paginated daily usage records for the current user.
     *
     * @param {MktAgiApi.GetGatewayUsageRequest} request
     * @param {GatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.gateway.listUsageRecords()
     */
    listUsageRecords(request?: MktAgiApi.GetGatewayUsageRequest, requestOptions?: GatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebListUsageResponse>;
    private __listUsageRecords;
}
