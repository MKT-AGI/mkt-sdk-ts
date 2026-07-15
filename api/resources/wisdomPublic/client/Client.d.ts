import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptions } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace WisdomPublicClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class WisdomPublicClient {
    protected readonly _options: NormalizedClientOptions<WisdomPublicClient.Options>;
    constructor(options?: WisdomPublicClient.Options);
    /**
     * List public content nodes without authentication
     *
     * @param {MktAgiApi.GetPublicWisdomRequest} request
     * @param {WisdomPublicClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdomPublic.listPublicContents()
     */
    listPublicContents(request?: MktAgiApi.GetPublicWisdomRequest, requestOptions?: WisdomPublicClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listPublicContents;
}
