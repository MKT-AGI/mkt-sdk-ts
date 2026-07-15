import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace AdminMarketplaceClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AdminMarketplaceClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AdminMarketplaceClient.Options>;
    constructor(options?: AdminMarketplaceClient.Options);
    /**
     * Returns top models ranked by call count or revenue. Only includes listed/published models.
     *
     * @param {MktAgiApi.GetAdminMarketplaceTopResourcesRequest} request
     * @param {AdminMarketplaceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     *
     * @example
     *     await client.adminMarketplace.topResourcesRankingAdmin()
     */
    topResourcesRankingAdmin(request?: MktAgiApi.GetAdminMarketplaceTopResourcesRequest, requestOptions?: AdminMarketplaceClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebTopResourcesResponse>;
    private __topResourcesRankingAdmin;
}
