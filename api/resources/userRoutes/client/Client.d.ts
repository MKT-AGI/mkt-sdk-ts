import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace UserRoutesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UserRoutesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UserRoutesClient.Options>;
    constructor(options?: UserRoutesClient.Options);
    /**
     * Return all routes for the authenticated user
     *
     * @param {MktAgiApi.GetGatewayUserIdRoutesRequest} request
     * @param {UserRoutesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userRoutes.listUserModelRoutes({
     *         user_id: 1
     *     })
     */
    listUserModelRoutes(request: MktAgiApi.GetGatewayUserIdRoutesRequest, requestOptions?: UserRoutesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayInternalAigatewayInternalWebUserRouteResponse>;
    private __listUserModelRoutes;
    /**
     * Create a user-scoped model_prefix → provider routing override.
     *
     * @param {MktAgiApi.PostGatewayUserIdRoutesRequest} request
     * @param {UserRoutesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.ConflictError}
     *
     * @example
     *     await client.userRoutes.createUserModelRoute({
     *         user_id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    createUserModelRoute(request: MktAgiApi.PostGatewayUserIdRoutesRequest, requestOptions?: UserRoutesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebUserRouteResponse>;
    private __createUserModelRoute;
    /**
     * Return a single route by ID
     *
     * @param {MktAgiApi.GetGatewayUserIdRoutesIdRequest} request
     * @param {UserRoutesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userRoutes.getUserModelRoute({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    getUserModelRoute(request: MktAgiApi.GetGatewayUserIdRoutesIdRequest, requestOptions?: UserRoutesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAigatewayInternalWebUserRouteResponse>;
    private __getUserModelRoute;
    /**
     * Delete a user route by ID
     *
     * @param {MktAgiApi.DeleteGatewayUserIdRoutesIdRequest} request
     * @param {UserRoutesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userRoutes.deleteUserModelRoute({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    deleteUserModelRoute(request: MktAgiApi.DeleteGatewayUserIdRoutesIdRequest, requestOptions?: UserRoutesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __deleteUserModelRoute;
    /**
     * Return all access grants for a route
     *
     * @param {MktAgiApi.GetGatewayUserIdRoutesIdGrantsRequest} request
     * @param {UserRoutesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userRoutes.listRouteAccessGrants({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    listRouteAccessGrants(request: MktAgiApi.GetGatewayUserIdRoutesIdGrantsRequest, requestOptions?: UserRoutesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalIamAccessGrant>;
    private __listRouteAccessGrants;
    /**
     * Grant a user access to a private route
     *
     * @param {MktAgiApi.PostGatewayUserIdRoutesIdGrantsRequest} request
     * @param {UserRoutesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userRoutes.grantRouteAccess({
     *         user_id: 1,
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    grantRouteAccess(request: MktAgiApi.PostGatewayUserIdRoutesIdGrantsRequest, requestOptions?: UserRoutesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __grantRouteAccess;
    /**
     * Revoke a user's access to a route
     *
     * @param {MktAgiApi.DeleteGatewayUserIdRoutesIdGrantsTargetUserIdRequest} request
     * @param {UserRoutesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userRoutes.revokeRouteAccess({
     *         user_id: 1,
     *         id: 1,
     *         target_user_id: 1
     *     })
     */
    revokeRouteAccess(request: MktAgiApi.DeleteGatewayUserIdRoutesIdGrantsTargetUserIdRequest, requestOptions?: UserRoutesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __revokeRouteAccess;
}
