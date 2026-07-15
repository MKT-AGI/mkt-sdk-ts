import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace AdminRevenueClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AdminRevenueClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AdminRevenueClient.Options>;
    constructor(options?: AdminRevenueClient.Options);
    /**
     * Returns total marketplace fees, breakdown by resource type and by seller. Requires admin role.
     *
     * @param {MktAgiApi.GetAdminRevenueFeesRequest} request
     * @param {AdminRevenueClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     *
     * @example
     *     await client.adminRevenue.marketplaceFeeRevenueSummary()
     */
    marketplaceFeeRevenueSummary(request?: MktAgiApi.GetAdminRevenueFeesRequest, requestOptions?: AdminRevenueClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalPaymentsInternalDomainMarketplaceFeeSummary>;
    private __marketplaceFeeRevenueSummary;
}
