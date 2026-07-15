import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace ChatClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ChatClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ChatClient.Options>;
    constructor(options?: ChatClient.Options);
    /**
     * Proxies a chat completion to the upstream LLM provider. Supports streaming (SSE) and non-streaming.
     *
     * @param {Record<string, unknown>} request
     * @param {ChatClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.chat.sendAChatCompletionRequest({
     *         "key": "value"
     *     })
     */
    sendAChatCompletionRequest(request: Record<string, unknown>, requestOptions?: ChatClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __sendAChatCompletionRequest;
    /**
     * Adapts Anthropic Messages API requests and responses to the existing AI gateway routing and proxy pipeline.
     *
     * @param {MktAgiApi.PostMessagesRequest} request
     * @param {ChatClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.chat.sendAnAnthropicCompatibleMessageRequest({
     *         "key": "value"
     *     })
     */
    sendAnAnthropicCompatibleMessageRequest(request: MktAgiApi.PostMessagesRequest, requestOptions?: ChatClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAnthropicMessageResponse>;
    private __sendAnAnthropicCompatibleMessageRequest;
    /**
     * Returns all enabled models with extended metadata (name, description, capabilities, default flag).
     *
     * @param {ChatClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.chat.listAvailableModels()
     */
    listAvailableModels(requestOptions?: ChatClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __listAvailableModels;
    /**
     * Adapts OpenAI Responses API requests to Chat Completions. Primarily for Codex CLI compatibility.
     *
     * @param {Record<string, unknown>} request
     * @param {ChatClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.PaymentRequiredError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.chat.sendAResponsesApiRequest({
     *         "key": "value"
     *     })
     */
    sendAResponsesApiRequest(request: Record<string, unknown>, requestOptions?: ChatClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __sendAResponsesApiRequest;
}
