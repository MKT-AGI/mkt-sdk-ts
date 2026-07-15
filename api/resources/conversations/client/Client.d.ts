import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace ConversationsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ConversationsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ConversationsClient.Options>;
    constructor(options?: ConversationsClient.Options);
    /**
     * List conversations for the current user
     *
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.conversations.listConversations()
     */
    listConversations(requestOptions?: ConversationsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalMessagingInternalDomainConversationSummary>;
    private __listConversations;
    /**
     * Create a new conversation with participants
     *
     * @param {MktAgiApi.PostMessagingConversationsRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.conversations.createConversation({
     *         "key": "value"
     *     })
     */
    createConversation(request: MktAgiApi.PostMessagingConversationsRequest, requestOptions?: ConversationsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalMessagingInternalDomainConversation>;
    private __createConversation;
    /**
     * Retrieve a conversation by ID
     *
     * @param {MktAgiApi.GetMessagingConversationsConvIdRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.conversations.getConversation({
     *         conv_id: 1
     *     })
     */
    getConversation(request: MktAgiApi.GetMessagingConversationsConvIdRequest, requestOptions?: ConversationsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalMessagingInternalDomainConversation>;
    private __getConversation;
    /**
     * Add a user to a conversation
     *
     * @param {MktAgiApi.PostMessagingConversationsConvIdParticipantsRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.conversations.addParticipant({
     *         conv_id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    addParticipant(request: MktAgiApi.PostMessagingConversationsConvIdParticipantsRequest, requestOptions?: ConversationsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __addParticipant;
}
