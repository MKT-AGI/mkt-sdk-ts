import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptions } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace WisdomCommunityPublicClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class WisdomCommunityPublicClient {
    protected readonly _options: NormalizedClientOptions<WisdomCommunityPublicClient.Options>;
    constructor(options?: WisdomCommunityPublicClient.Options);
    /**
     * List public communities without authentication. When slug is provided, username is required for joint lookup.
     *
     * @param {MktAgiApi.GetCommunityRequest} request
     * @param {WisdomCommunityPublicClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdomCommunityPublic.listPublicCommunities()
     */
    listPublicCommunities(request?: MktAgiApi.GetCommunityRequest, requestOptions?: WisdomCommunityPublicClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listPublicCommunities;
}
