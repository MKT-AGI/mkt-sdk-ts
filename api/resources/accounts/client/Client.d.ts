import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptions } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
export declare namespace AccountsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AccountsClient {
    protected readonly _options: NormalizedClientOptions<AccountsClient.Options>;
    constructor(options?: AccountsClient.Options);
    /**
     * Handle incoming GitHub webhook events (installation, push, etc.)
     *
     * @param {Record<string, unknown>} request
     * @param {AccountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.accounts.receiveGitHubWebhookEvents({
     *         "key": "value"
     *     })
     */
    receiveGitHubWebhookEvents(request: Record<string, unknown>, requestOptions?: AccountsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __receiveGitHubWebhookEvents;
}
