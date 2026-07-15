import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptions } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace MarketplaceClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class MarketplaceClient {
    protected readonly _options: NormalizedClientOptions<MarketplaceClient.Options>;
    constructor(options?: MarketplaceClient.Options);
    /**
     * Returns paginated marketplace models with search, price filter, and sort.
     *
     * @param {MktAgiApi.GetMarketplaceModelsRequest} request
     * @param {MarketplaceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     *
     * @example
     *     await client.marketplace.listMarketplaceModels()
     */
    listMarketplaceModels(request?: MktAgiApi.GetMarketplaceModelsRequest, requestOptions?: MarketplaceClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebMarketplaceListResponse>;
    private __listMarketplaceModels;
}
