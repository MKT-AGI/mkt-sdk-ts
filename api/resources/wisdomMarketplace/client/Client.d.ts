import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptions } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace WisdomMarketplaceClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class WisdomMarketplaceClient {
    protected readonly _options: NormalizedClientOptions<WisdomMarketplaceClient.Options>;
    constructor(options?: WisdomMarketplaceClient.Options);
    /**
     * List published communities in the marketplace with optional filters
     *
     * @param {MktAgiApi.GetWisdomMarketplaceRequest} request
     * @param {WisdomMarketplaceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdomMarketplace.listMarketplaceCommunities()
     */
    listMarketplaceCommunities(request?: MktAgiApi.GetWisdomMarketplaceRequest, requestOptions?: WisdomMarketplaceClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebMarketplaceListResponse>;
    private __listMarketplaceCommunities;
}
