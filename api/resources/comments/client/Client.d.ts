import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace CommentsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class CommentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<CommentsClient.Options>;
    constructor(options?: CommentsClient.Options);
    /**
     * List all comments for admin management. Requires session + admin auth.
     *
     * @param {MktAgiApi.GetApiV1AdminCommentsRequest} request
     * @param {CommentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.comments.listCommentsAdmin({
     *         target_type: "target_type"
     *     })
     */
    listCommentsAdmin(request: MktAgiApi.GetApiV1AdminCommentsRequest, requestOptions?: CommentsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalCommentsInternalWebCommentListVo>;
    private __listCommentsAdmin;
    /**
     * Get the comment tree for a specific target
     *
     * @param {MktAgiApi.GetApiV1CommentsRequest} request
     * @param {CommentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.comments.listComments({
     *         target_type: "target_type",
     *         target_id: 1
     *     })
     */
    listComments(request: MktAgiApi.GetApiV1CommentsRequest, requestOptions?: CommentsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalCommentsInternalWebCommentTreeVo>;
    private __listComments;
    /**
     * Create a new comment or reply. Requires session auth.
     *
     * @param {MktAgiApi.PostApiV1CommentsRequest} request
     * @param {CommentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.ConflictError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.comments.createComment({
     *         "key": "value"
     *     })
     */
    createComment(request: MktAgiApi.PostApiV1CommentsRequest, requestOptions?: CommentsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalCommentsInternalDomainComment>;
    private __createComment;
    /**
     * Edit a comment body. Only the author can edit.
     *
     * @param {MktAgiApi.PutApiV1CommentsIdRequest} request
     * @param {CommentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.ConflictError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.comments.updateComment({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    updateComment(request: MktAgiApi.PutApiV1CommentsIdRequest, requestOptions?: CommentsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalCommentsInternalDomainComment>;
    private __updateComment;
    /**
     * Soft-delete a comment. Author or admin can delete.
     *
     * @param {MktAgiApi.DeleteApiV1CommentsIdRequest} request
     * @param {CommentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.comments.deleteComment({
     *         id: 1
     *     })
     */
    deleteComment(request: MktAgiApi.DeleteApiV1CommentsIdRequest, requestOptions?: CommentsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxCodeResp>;
    private __deleteComment;
}
