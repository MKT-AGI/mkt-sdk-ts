import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace WisdomCommunityClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class WisdomCommunityClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<WisdomCommunityClient.Options>;
    constructor(options?: WisdomCommunityClient.Options);
    /**
     * List communities for the current user with pagination
     *
     * @param {MktAgiApi.GetWisdomCommunityRequest} request
     * @param {WisdomCommunityClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdomCommunity.listCommunities()
     */
    listCommunities(request?: MktAgiApi.GetWisdomCommunityRequest, requestOptions?: WisdomCommunityClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listCommunities;
    /**
     * Create a new community
     *
     * @param {MktAgiApi.PostWisdomCommunityRequest} request
     * @param {WisdomCommunityClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.UnprocessableEntityError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdomCommunity.createCommunity({
     *         "key": "value"
     *     })
     */
    createCommunity(request: MktAgiApi.PostWisdomCommunityRequest, requestOptions?: WisdomCommunityClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebCommunityResponse>;
    private __createCommunity;
    /**
     * Get a community by ID
     *
     * @param {MktAgiApi.GetWisdomCommunityIdRequest} request
     * @param {WisdomCommunityClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdomCommunity.getCommunity({
     *         id: 1
     *     })
     */
    getCommunity(request: MktAgiApi.GetWisdomCommunityIdRequest, requestOptions?: WisdomCommunityClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebCommunityResponse>;
    private __getCommunity;
    /**
     * Delete a community and disassociate its wisdoms
     *
     * @param {MktAgiApi.DeleteWisdomCommunityIdRequest} request
     * @param {WisdomCommunityClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdomCommunity.deleteCommunity({
     *         id: 1
     *     })
     */
    deleteCommunity(request: MktAgiApi.DeleteWisdomCommunityIdRequest, requestOptions?: WisdomCommunityClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebWisdomDeleteVo>;
    private __deleteCommunity;
    /**
     * Update a community's fields
     *
     * @param {MktAgiApi.PatchWisdomCommunityIdRequest} request
     * @param {WisdomCommunityClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.UnprocessableEntityError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdomCommunity.updateCommunity({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    updateCommunity(request: MktAgiApi.PatchWisdomCommunityIdRequest, requestOptions?: WisdomCommunityClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebCommunityResponse>;
    private __updateCommunity;
}
