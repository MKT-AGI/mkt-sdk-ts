import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace UserModelsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UserModelsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UserModelsClient.Options>;
    constructor(options?: UserModelsClient.Options);
    /**
     * Return all users who have filter access to a model
     *
     * @param {MktAgiApi.GetGatewayUserIdModelsIdFiltersRequest} request
     * @param {UserModelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userModels.listModelVisibilityFilters({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    listModelVisibilityFilters(request: MktAgiApi.GetGatewayUserIdModelsIdFiltersRequest, requestOptions?: UserModelsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayUint>;
    private __listModelVisibilityFilters;
    /**
     * Grant a user access to a private model via filter
     *
     * @param {MktAgiApi.PostGatewayUserIdModelsIdFiltersRequest} request
     * @param {UserModelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userModels.addModelVisibilityFilter({
     *         user_id: 1,
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    addModelVisibilityFilter(request: MktAgiApi.PostGatewayUserIdModelsIdFiltersRequest, requestOptions?: UserModelsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __addModelVisibilityFilter;
    /**
     * Revoke a user's access to a filtered model
     *
     * @param {MktAgiApi.DeleteGatewayUserIdModelsIdFiltersTargetUserIdRequest} request
     * @param {UserModelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userModels.removeModelVisibilityFilter({
     *         user_id: 1,
     *         id: 1,
     *         target_user_id: 1
     *     })
     */
    removeModelVisibilityFilter(request: MktAgiApi.DeleteGatewayUserIdModelsIdFiltersTargetUserIdRequest, requestOptions?: UserModelsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __removeModelVisibilityFilter;
}
