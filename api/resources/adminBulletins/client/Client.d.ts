import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptions } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace AdminBulletinsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AdminBulletinsClient {
    protected readonly _options: NormalizedClientOptions<AdminBulletinsClient.Options>;
    constructor(options?: AdminBulletinsClient.Options);
    /**
     * Return a paginated list of all bulletins including drafts, with optional filters. Requires admin role.
     *
     * @param {MktAgiApi.GetAdminBulletinsRequest} request
     * @param {AdminBulletinsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     *
     * @example
     *     await client.adminBulletins.listAllBulletinsAdmin()
     */
    listAllBulletinsAdmin(request?: MktAgiApi.GetAdminBulletinsRequest, requestOptions?: AdminBulletinsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalBulletinInternalDomainBulletin>;
    private __listAllBulletinsAdmin;
    /**
     * Create a new announcement, changelog, or doc. Requires admin role.
     *
     * @param {MktAgiApi.PostAdminBulletinsRequest} request
     * @param {AdminBulletinsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     *
     * @example
     *     await client.adminBulletins.createANewBulletin({
     *         "key": "value"
     *     })
     */
    createANewBulletin(request: MktAgiApi.PostAdminBulletinsRequest, requestOptions?: AdminBulletinsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalBulletinInternalDomainBulletin>;
    private __createANewBulletin;
    /**
     * Return any bulletin by ID including drafts and expired ones. Requires admin role.
     *
     * @param {MktAgiApi.GetAdminBulletinsIdRequest} request
     * @param {AdminBulletinsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.adminBulletins.getBulletinByIdAdmin({
     *         id: 1
     *     })
     */
    getBulletinByIdAdmin(request: MktAgiApi.GetAdminBulletinsIdRequest, requestOptions?: AdminBulletinsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalBulletinInternalDomainBulletin>;
    private __getBulletinByIdAdmin;
    /**
     * Update an existing bulletin's content or metadata. Requires admin role.
     *
     * @param {MktAgiApi.PutAdminBulletinsIdRequest} request
     * @param {AdminBulletinsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.adminBulletins.updateABulletin({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    updateABulletin(request: MktAgiApi.PutAdminBulletinsIdRequest, requestOptions?: AdminBulletinsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalBulletinInternalDomainBulletin>;
    private __updateABulletin;
    /**
     * Delete a draft bulletin. Requires admin role.
     *
     * @param {MktAgiApi.DeleteAdminBulletinsIdRequest} request
     * @param {AdminBulletinsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.ConflictError}
     *
     * @example
     *     await client.adminBulletins.deleteABulletin({
     *         id: 1
     *     })
     */
    deleteABulletin(request: MktAgiApi.DeleteAdminBulletinsIdRequest, requestOptions?: AdminBulletinsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __deleteABulletin;
    /**
     * Archive a published or draft bulletin. Requires admin role.
     *
     * @param {MktAgiApi.PostAdminBulletinsIdArchiveRequest} request
     * @param {AdminBulletinsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.adminBulletins.archiveABulletin({
     *         id: 1
     *     })
     */
    archiveABulletin(request: MktAgiApi.PostAdminBulletinsIdArchiveRequest, requestOptions?: AdminBulletinsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __archiveABulletin;
    /**
     * Publish a draft bulletin to make it visible to users. Requires admin role.
     *
     * @param {MktAgiApi.PostAdminBulletinsIdPublishRequest} request
     * @param {AdminBulletinsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.ConflictError}
     *
     * @example
     *     await client.adminBulletins.publishABulletin({
     *         id: 1
     *     })
     */
    publishABulletin(request: MktAgiApi.PostAdminBulletinsIdPublishRequest, requestOptions?: AdminBulletinsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __publishABulletin;
}
