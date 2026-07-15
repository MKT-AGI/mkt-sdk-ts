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
     * Return all users who have filter access to a route
     *
     * @param {MktAgiApi.GetGatewayUserIdRoutesIdFiltersRequest} request
     * @param {UserRoutesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userRoutes.listRouteVisibilityFilters({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    listRouteVisibilityFilters(request: MktAgiApi.GetGatewayUserIdRoutesIdFiltersRequest, requestOptions?: UserRoutesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayUint>;
    private __listRouteVisibilityFilters;
    /**
     * Grant a user access to a route via filter
     *
     * @param {MktAgiApi.PostGatewayUserIdRoutesIdFiltersRequest} request
     * @param {UserRoutesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userRoutes.addRouteVisibilityFilter({
     *         user_id: 1,
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    addRouteVisibilityFilter(request: MktAgiApi.PostGatewayUserIdRoutesIdFiltersRequest, requestOptions?: UserRoutesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __addRouteVisibilityFilter;
    /**
     * Revoke a user's access to a filtered route
     *
     * @param {MktAgiApi.DeleteGatewayUserIdRoutesIdFiltersTargetUserIdRequest} request
     * @param {UserRoutesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userRoutes.removeRouteVisibilityFilter({
     *         user_id: 1,
     *         id: 1,
     *         target_user_id: 1
     *     })
     */
    removeRouteVisibilityFilter(request: MktAgiApi.DeleteGatewayUserIdRoutesIdFiltersTargetUserIdRequest, requestOptions?: UserRoutesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __removeRouteVisibilityFilter;
}
