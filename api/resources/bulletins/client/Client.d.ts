import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptions } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace BulletinsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class BulletinsClient {
    protected readonly _options: NormalizedClientOptions<BulletinsClient.Options>;
    constructor(options?: BulletinsClient.Options);
    /**
     * Return a paginated list of published bulletins with optional filters.
     *
     * @param {MktAgiApi.GetBulletinsRequest} request
     * @param {BulletinsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.bulletins.listPublishedBulletins()
     */
    listPublishedBulletins(request?: MktAgiApi.GetBulletinsRequest, requestOptions?: BulletinsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalBulletinInternalDomainBulletin>;
    private __listPublishedBulletins;
    /**
     * Return a single published bulletin by its ID. Returns 404 if not found or expired.
     *
     * @param {MktAgiApi.GetBulletinsIdRequest} request
     * @param {BulletinsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.bulletins.getBulletinById({
     *         id: 1
     *     })
     */
    getBulletinById(request: MktAgiApi.GetBulletinsIdRequest, requestOptions?: BulletinsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalBulletinInternalDomainBulletin>;
    private __getBulletinById;
}
