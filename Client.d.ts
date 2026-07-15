import * as MktAgiApi from "./api/index.js";
import { AccountsClient } from "./api/resources/accounts/client/Client.js";
import { AdminClient } from "./api/resources/admin/client/Client.js";
import { AdminBulletinsClient } from "./api/resources/adminBulletins/client/Client.js";
import { AdminMarketplaceClient } from "./api/resources/adminMarketplace/client/Client.js";
import { AdminRevenueClient } from "./api/resources/adminRevenue/client/Client.js";
import { AuthClient } from "./api/resources/auth/client/Client.js";
import { BugReportsClient } from "./api/resources/bugReports/client/Client.js";
import { BulletinsClient } from "./api/resources/bulletins/client/Client.js";
import { ChatClient } from "./api/resources/chat/client/Client.js";
import { CommentsClient } from "./api/resources/comments/client/Client.js";
import { ConversationsClient } from "./api/resources/conversations/client/Client.js";
import { DevicesClient } from "./api/resources/devices/client/Client.js";
import { FilesClient } from "./api/resources/files/client/Client.js";
import { GatewayClient } from "./api/resources/gateway/client/Client.js";
import { IamClient } from "./api/resources/iam/client/Client.js";
import { MarketplaceClient } from "./api/resources/marketplace/client/Client.js";
import { MessagesClient } from "./api/resources/messages/client/Client.js";
import { NotificationsClient } from "./api/resources/notifications/client/Client.js";
import { PaymentsClient } from "./api/resources/payments/client/Client.js";
import { SessionsClient } from "./api/resources/sessions/client/Client.js";
import { UserClient } from "./api/resources/user/client/Client.js";
import { UserGatewayClient } from "./api/resources/userGateway/client/Client.js";
import { UserModelsClient } from "./api/resources/userModels/client/Client.js";
import { UserProvidersClient } from "./api/resources/userProviders/client/Client.js";
import { UserRoutesClient } from "./api/resources/userRoutes/client/Client.js";
import { UserSecretsClient } from "./api/resources/userSecrets/client/Client.js";
import { WalletsClient } from "./api/resources/wallets/client/Client.js";
import { WisdomClient } from "./api/resources/wisdom/client/Client.js";
import { WisdomCommunityClient } from "./api/resources/wisdomCommunity/client/Client.js";
import { WisdomCommunityPublicClient } from "./api/resources/wisdomCommunityPublic/client/Client.js";
import { WisdomPublicClient } from "./api/resources/wisdomPublic/client/Client.js";
import type { BaseClientOptions, BaseRequestOptions } from "./BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "./BaseClient.js";
import * as core from "./core/index.js";
export declare namespace MktAgiApiClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class MktAgiApiClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<MktAgiApiClient.Options>;
    protected _bugReports: BugReportsClient | undefined;
    protected _adminBulletins: AdminBulletinsClient | undefined;
    protected _files: FilesClient | undefined;
    protected _adminMarketplace: AdminMarketplaceClient | undefined;
    protected _adminRevenue: AdminRevenueClient | undefined;
    protected _admin: AdminClient | undefined;
    protected _comments: CommentsClient | undefined;
    protected _notifications: NotificationsClient | undefined;
    protected _payments: PaymentsClient | undefined;
    protected _wallets: WalletsClient | undefined;
    protected _auth: AuthClient | undefined;
    protected _bulletins: BulletinsClient | undefined;
    protected _chat: ChatClient | undefined;
    protected _wisdomCommunityPublic: WisdomCommunityPublicClient | undefined;
    protected _userGateway: UserGatewayClient | undefined;
    protected _userModels: UserModelsClient | undefined;
    protected _userProviders: UserProvidersClient | undefined;
    protected _userRoutes: UserRoutesClient | undefined;
    protected _gateway: GatewayClient | undefined;
    protected _sessions: SessionsClient | undefined;
    protected _iam: IamClient | undefined;
    protected _marketplace: MarketplaceClient | undefined;
    protected _conversations: ConversationsClient | undefined;
    protected _messages: MessagesClient | undefined;
    protected _devices: DevicesClient | undefined;
    protected _wisdomPublic: WisdomPublicClient | undefined;
    protected _userSecrets: UserSecretsClient | undefined;
    protected _user: UserClient | undefined;
    protected _accounts: AccountsClient | undefined;
    protected _wisdom: WisdomClient | undefined;
    protected _wisdomCommunity: WisdomCommunityClient | undefined;
    constructor(options?: MktAgiApiClient.Options);
    get bugReports(): BugReportsClient;
    get adminBulletins(): AdminBulletinsClient;
    get files(): FilesClient;
    get adminMarketplace(): AdminMarketplaceClient;
    get adminRevenue(): AdminRevenueClient;
    get admin(): AdminClient;
    get comments(): CommentsClient;
    get notifications(): NotificationsClient;
    get payments(): PaymentsClient;
    get wallets(): WalletsClient;
    get auth(): AuthClient;
    get bulletins(): BulletinsClient;
    get chat(): ChatClient;
    get wisdomCommunityPublic(): WisdomCommunityPublicClient;
    get userGateway(): UserGatewayClient;
    get userModels(): UserModelsClient;
    get userProviders(): UserProvidersClient;
    get userRoutes(): UserRoutesClient;
    get gateway(): GatewayClient;
    get sessions(): SessionsClient;
    get iam(): IamClient;
    get marketplace(): MarketplaceClient;
    get conversations(): ConversationsClient;
    get messages(): MessagesClient;
    get devices(): DevicesClient;
    get wisdomPublic(): WisdomPublicClient;
    get userSecrets(): UserSecretsClient;
    get user(): UserClient;
    get accounts(): AccountsClient;
    get wisdom(): WisdomClient;
    get wisdomCommunity(): WisdomCommunityClient;
    /**
     * Create the first superadmin user. Only works when no admin exists.
     *
     * @param {MktAgiApi.PostSetupRequest} request
     * @param {MktAgiApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.ConflictError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.createInitialSuperadmin({
     *         "key": "value"
     *     })
     */
    createInitialSuperadmin(request: MktAgiApi.PostSetupRequest, requestOptions?: MktAgiApiClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebPasswordAuthResponse>;
    private __createInitialSuperadmin;
    /**
     * Return whether the system has been initialized with a superadmin user.
     *
     * @param {MktAgiApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.checkSystemSetupStatus()
     */
    checkSystemSetupStatus(requestOptions?: MktAgiApiClient.RequestOptions): core.HttpResponsePromise<void>;
    private __checkSystemSetupStatus;
    /**
     * Make a passthrough request using the SDK's configured auth, retry, logging, etc.
     * This is useful for making requests to endpoints not yet supported in the SDK.
     * The input can be a URL string, URL object, or Request object. Relative paths are resolved against the configured base URL.
     *
     * @param {Request | string | URL} input - The URL, path, or Request object.
     * @param {RequestInit} init - Standard fetch RequestInit options.
     * @param {core.PassthroughRequest.RequestOptions} requestOptions - Per-request overrides (timeout, retries, headers, abort signal).
     * @returns {Promise<Response>} A standard Response object.
     */
    fetch(input: Request | string | URL, init?: RequestInit, requestOptions?: core.PassthroughRequest.RequestOptions): Promise<Response>;
}
