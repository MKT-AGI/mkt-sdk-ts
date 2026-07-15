import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace MessagesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class MessagesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<MessagesClient.Options>;
    constructor(options?: MessagesClient.Options);
    /**
     * Retrieve messages in a conversation
     *
     * @param {MktAgiApi.GetMessagingConversationsConvIdMessagesRequest} request
     * @param {MessagesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.messages.getMessages({
     *         conv_id: 1
     *     })
     */
    getMessages(request: MktAgiApi.GetMessagingConversationsConvIdMessagesRequest, requestOptions?: MessagesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalMessagingInternalDomainMessage>;
    private __getMessages;
    /**
     * Send a message in a conversation
     *
     * @param {MktAgiApi.PostMessagingConversationsConvIdMessagesRequest} request
     * @param {MessagesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.messages.sendMessage({
     *         conv_id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    sendMessage(request: MktAgiApi.PostMessagingConversationsConvIdMessagesRequest, requestOptions?: MessagesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalMessagingInternalDomainMessage>;
    private __sendMessage;
    /**
     * Mark messages as read up to the given sequence number
     *
     * @param {MktAgiApi.PostMessagingReadRequest} request
     * @param {MessagesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.messages.markMessagesAsRead({
     *         "key": "value"
     *     })
     */
    markMessagesAsRead(request: MktAgiApi.PostMessagingReadRequest, requestOptions?: MessagesClient.RequestOptions): core.HttpResponsePromise<void>;
    private __markMessagesAsRead;
}
