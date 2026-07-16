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
     * Return all access grants for a model
     *
     * @param {MktAgiApi.GetGatewayUserIdModelsIdGrantsRequest} request
     * @param {UserModelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userModels.listModelAccessGrants({
     *         user_id: 1,
     *         id: 1
     *     })
     */
    listModelAccessGrants(request: MktAgiApi.GetGatewayUserIdModelsIdGrantsRequest, requestOptions?: UserModelsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalIamAccessGrant>;
    private __listModelAccessGrants;
    /**
     * Grant a user access to a private model
     *
     * @param {MktAgiApi.PostGatewayUserIdModelsIdGrantsRequest} request
     * @param {UserModelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userModels.grantModelAccess({
     *         user_id: 1,
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    grantModelAccess(request: MktAgiApi.PostGatewayUserIdModelsIdGrantsRequest, requestOptions?: UserModelsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __grantModelAccess;
    /**
     * Revoke a user's access to a model
     *
     * @param {MktAgiApi.DeleteGatewayUserIdModelsIdGrantsTargetUserIdRequest} request
     * @param {UserModelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.userModels.revokeModelAccess({
     *         user_id: 1,
     *         id: 1,
     *         target_user_id: 1
     *     })
     */
    revokeModelAccess(request: MktAgiApi.DeleteGatewayUserIdModelsIdGrantsTargetUserIdRequest, requestOptions?: UserModelsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __revokeModelAccess;
}
