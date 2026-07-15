import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptions } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace UserProvidersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UserProvidersClient {
    protected readonly _options: NormalizedClientOptions<UserProvidersClient.Options>;
    constructor(options?: UserProvidersClient.Options);
    /**
     * Return user-owned and global providers with masked API keys.
     *
     * @param {MktAgiApi.GetGatewayUserIdProvidersRequest} request
     * @param {UserProvidersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.userProviders.listVisibleProviders({
     *         user_id: 1
     *     })
     */
    listVisibleProviders(request: MktAgiApi.GetGatewayUserIdProvidersRequest, requestOptions?: UserProvidersClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayInternalAigatewayInternalWebUserProviderResponse>;
    private __listVisibleProviders;
    /**
     * Create a user-owned LLM provider with encrypted API service.
     *
     * @param {MktAgiApi.PostGatewayUserIdProvidersRequest} request
     * @param {UserProvidersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     *
     * @example
     *     await client.userProviders.createUserProvider({
     *         user_id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    createUserProvider(request: MktAgiApi.PostGatewayUserIdProvidersRequest, requestOptions?: UserProvidersClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebUserProviderResponse>;
    private __createUserProvider;
    /**
     * Return one visible provider with masked API service.
     *
     * @param {MktAgiApi.GetGatewayUserIdProvidersIdRequest} request
     * @param {UserProvidersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userProviders.getVisibleProvider({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    getVisibleProvider(request: MktAgiApi.GetGatewayUserIdProvidersIdRequest, requestOptions?: UserProvidersClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebUserProviderResponse>;
    private __getVisibleProvider;
    /**
     * Update a user-owned provider. Global providers cannot be modified.
     *
     * @param {MktAgiApi.PutGatewayUserIdProvidersIdRequest} request
     * @param {UserProvidersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userProviders.updateUserProvider({
     *         user_id: 1,
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    updateUserProvider(request: MktAgiApi.PutGatewayUserIdProvidersIdRequest, requestOptions?: UserProvidersClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebUserProviderResponse>;
    private __updateUserProvider;
    /**
     * Delete a user-owned provider if no user models reference it.
     *
     * @param {MktAgiApi.DeleteGatewayUserIdProvidersIdRequest} request
     * @param {UserProvidersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.ConflictError}
     *
     * @example
     *     await client.userProviders.deleteUserProvider({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    deleteUserProvider(request: MktAgiApi.DeleteGatewayUserIdProvidersIdRequest, requestOptions?: UserProvidersClient.RequestOptions): core.HttpResponsePromise<void>;
    private __deleteUserProvider;
    /**
     * Test an existing provider's connectivity and re-discover available models.
     *
     * @param {MktAgiApi.PostGatewayUserIdProvidersIdTestRequest} request
     * @param {UserProvidersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.TooManyRequestsError}
     *
     * @example
     *     await client.userProviders.testExistingProvider({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    testExistingProvider(request: MktAgiApi.PostGatewayUserIdProvidersIdTestRequest, requestOptions?: UserProvidersClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebTestProviderResponse>;
    private __testExistingProvider;
    /**
     * Test provider connectivity and list available models, before creating a provider record.
     *
     * @param {MktAgiApi.PostGatewayUserIdProvidersTestRequest} request
     * @param {UserProvidersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.TooManyRequestsError}
     *
     * @example
     *     await client.userProviders.testProviderConnection({
     *         user_id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    testProviderConnection(request: MktAgiApi.PostGatewayUserIdProvidersTestRequest, requestOptions?: UserProvidersClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebTestProviderResponse>;
    private __testProviderConnection;
}
