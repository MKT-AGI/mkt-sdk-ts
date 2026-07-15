import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace WisdomClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class WisdomClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<WisdomClient.Options>;
    constructor(options?: WisdomClient.Options);
    /**
     * List content nodes with optional filters (kind, type, community_id, etc.)
     *
     * @param {MktAgiApi.GetWisdomRequest} request
     * @param {WisdomClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdom.listContents()
     */
    listContents(request?: MktAgiApi.GetWisdomRequest, requestOptions?: WisdomClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listContents;
    /**
     * Create a new content node in the property graph
     *
     * @param {MktAgiApi.PostWisdomRequest} request
     * @param {WisdomClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.UnprocessableEntityError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdom.createContent({
     *         "key": "value"
     *     })
     */
    createContent(request: MktAgiApi.PostWisdomRequest, requestOptions?: WisdomClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebWisdomResponse>;
    private __createContent;
    /**
     * Get a content node by ID with optional depth context (0 or 1)
     *
     * @param {MktAgiApi.GetWisdomIdRequest} request
     * @param {WisdomClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdom.getContent({
     *         id: 1
     *     })
     */
    getContent(request: MktAgiApi.GetWisdomIdRequest, requestOptions?: WisdomClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebWisdomWithContextResponse>;
    private __getContent;
    /**
     * Delete a content node by ID
     *
     * @param {MktAgiApi.DeleteWisdomIdRequest} request
     * @param {WisdomClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdom.deleteContent({
     *         id: 1
     *     })
     */
    deleteContent(request: MktAgiApi.DeleteWisdomIdRequest, requestOptions?: WisdomClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebWisdomDeleteVo>;
    private __deleteContent;
    /**
     * Update a content node's fields with optimistic locking via version
     *
     * @param {MktAgiApi.PatchWisdomIdRequest} request
     * @param {WisdomClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.ConflictError}
     * @throws {@link MktAgiApi.UnprocessableEntityError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdom.updateContent({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    updateContent(request: MktAgiApi.PatchWisdomIdRequest, requestOptions?: WisdomClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebWisdomResponse>;
    private __updateContent;
    /**
     * Get audit log entries for a specific content node
     *
     * @param {MktAgiApi.GetWisdomIdLogsRequest} request
     * @param {WisdomClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdom.getContentLogs({
     *         id: 1
     *     })
     */
    getContentLogs(request: MktAgiApi.GetWisdomIdLogsRequest, requestOptions?: WisdomClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayInternalWisdomInternalWebLogResponse>;
    private __getContentLogs;
    /**
     * Add a directed relation edge from source content to target content
     *
     * @param {MktAgiApi.PostWisdomIdRelationsRequest} request
     * @param {WisdomClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.ConflictError}
     * @throws {@link MktAgiApi.UnprocessableEntityError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdom.addRelation({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    addRelation(request: MktAgiApi.PostWisdomIdRelationsRequest, requestOptions?: WisdomClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebRelationResponse>;
    private __addRelation;
    /**
     * Remove a relation edge by relation ID
     *
     * @param {MktAgiApi.DeleteWisdomIdRelationsRidRequest} request
     * @param {WisdomClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdom.removeRelation({
     *         id: 1,
     *         rid: 1
     *     })
     */
    removeRelation(request: MktAgiApi.DeleteWisdomIdRelationsRidRequest, requestOptions?: WisdomClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebWisdomDeleteVo>;
    private __removeRelation;
    /**
     * Trigger community detection clustering on user's content graph
     *
     * @param {WisdomClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ConflictError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdom.clusterContents()
     */
    clusterContents(requestOptions?: WisdomClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebTriggerStatusVo>;
    private __clusterContents;
    /**
     * Get the content subgraph for a specific community
     *
     * @param {MktAgiApi.GetWisdomSubgraphRequest} request
     * @param {WisdomClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.UnprocessableEntityError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.wisdom.getSubgraph({
     *         community_id: 1
     *     })
     */
    getSubgraph(request: MktAgiApi.GetWisdomSubgraphRequest, requestOptions?: WisdomClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalWisdomInternalWebGraphResponse>;
    private __getSubgraph;
}
