import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace UserGatewayClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UserGatewayClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UserGatewayClient.Options>;
    constructor(options?: UserGatewayClient.Options);
    /**
     * Return models owned by the path user.
     *
     * @param {MktAgiApi.GetGatewayUserIdModelsRequest} request
     * @param {UserGatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     *
     * @example
     *     await client.userGateway.listUserModels({
     *         user_id: 1
     *     })
     */
    listUserModels(request: MktAgiApi.GetGatewayUserIdModelsRequest, requestOptions?: UserGatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalAigatewayInternalDomainModel>;
    private __listUserModels;
    /**
     * Create a user-owned billable model and bind its primary provider.
     *
     * @param {MktAgiApi.PostGatewayUserIdModelsRequest} request
     * @param {UserGatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     *
     * @example
     *     await client.userGateway.createUserModel({
     *         user_id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    createUserModel(request: MktAgiApi.PostGatewayUserIdModelsRequest, requestOptions?: UserGatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalAigatewayInternalDomainModel>;
    private __createUserModel;
    /**
     * Return one model visible to the path user.
     *
     * @param {MktAgiApi.GetGatewayUserIdModelsIdRequest} request
     * @param {UserGatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userGateway.getVisibleUserModel({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    getVisibleUserModel(request: MktAgiApi.GetGatewayUserIdModelsIdRequest, requestOptions?: UserGatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalAigatewayInternalDomainModel>;
    private __getVisibleUserModel;
    /**
     * Update a user-owned billable domain.
     *
     * @param {MktAgiApi.PutGatewayUserIdModelsIdRequest} request
     * @param {UserGatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userGateway.updateUserModel({
     *         user_id: 1,
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    updateUserModel(request: MktAgiApi.PutGatewayUserIdModelsIdRequest, requestOptions?: UserGatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalAigatewayInternalDomainModel>;
    private __updateUserModel;
    /**
     * Delete a user-owned model and all its grants.
     *
     * @param {MktAgiApi.DeleteGatewayUserIdModelsIdRequest} request
     * @param {UserGatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userGateway.deleteUserModel({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    deleteUserModel(request: MktAgiApi.DeleteGatewayUserIdModelsIdRequest, requestOptions?: UserGatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __deleteUserModel;
    /**
     * List a user-owned model to the public marketplace. Requires provider to be enabled, pricing to be set, and a revenue wallet.
     *
     * @param {MktAgiApi.PostGatewayUserIdModelsIdListRequest} request
     * @param {UserGatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userGateway.listAModelToMarketplace({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    listAModelToMarketplace(request: MktAgiApi.PostGatewayUserIdModelsIdListRequest, requestOptions?: UserGatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalAigatewayInternalDomainModel>;
    private __listAModelToMarketplace;
    /**
     * Unlist a user-owned model from the public marketplace (visibility = private).
     *
     * @param {MktAgiApi.PostGatewayUserIdModelsIdUnlistRequest} request
     * @param {UserGatewayClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userGateway.unlistAModelFromMarketplace({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    unlistAModelFromMarketplace(request: MktAgiApi.PostGatewayUserIdModelsIdUnlistRequest, requestOptions?: UserGatewayClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalAigatewayInternalDomainModel>;
    private __unlistAModelFromMarketplace;
}
