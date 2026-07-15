import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace IamClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class IamClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<IamClient.Options>;
    constructor(options?: IamClient.Options);
    /**
     * List API key metadata for the authenticated user. Raw keys and hashes are never returned.
     *
     * @param {IamClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.iam.listApiKeys()
     */
    listApiKeys(requestOptions?: IamClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayInternalIamInternalWebApiKeyResponse>;
    private __listApiKeys;
    /**
     * Create an API key for the authenticated user. The raw API key is returned only once in this response.
     *
     * @param {MktAgiApi.PostIamApiKeysRequest} request
     * @param {IamClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.iam.createApiKey({
     *         "key": "value"
     *     })
     */
    createApiKey(request: MktAgiApi.PostIamApiKeysRequest, requestOptions?: IamClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalIamInternalWebCreateApiKeyResponse>;
    private __createApiKey;
    /**
     * Revoke an API key owned by the authenticated user.
     *
     * @param {MktAgiApi.DeleteIamApiKeysIdRequest} request
     * @param {IamClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.iam.revokeApiKey({
     *         id: 1
     *     })
     */
    revokeApiKey(request: MktAgiApi.DeleteIamApiKeysIdRequest, requestOptions?: IamClient.RequestOptions): core.HttpResponsePromise<void>;
    private __revokeApiKey;
    /**
     * 列出资源的可见性过滤器用户列表。返回被添加到可见性白名单中的用户 ID。
     *
     * @param {MktAgiApi.GetIamVisibilityFiltersRequest} request
     * @param {IamClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.iam.listVisibilityFilters({
     *         resource_type: "resource_type",
     *         resource_id: 1
     *     })
     */
    listVisibilityFilters(request: MktAgiApi.GetIamVisibilityFiltersRequest, requestOptions?: IamClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayUint>;
    private __listVisibilityFilters;
    /**
     * 添加可见性过滤器，将指定用户添加到资源的可见性白名单中。
     *
     * @param {MktAgiApi.PostIamVisibilityFiltersRequest} request
     * @param {IamClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.iam.addVisibilityFilter({
     *         "key": "value"
     *     })
     */
    addVisibilityFilter(request: MktAgiApi.PostIamVisibilityFiltersRequest, requestOptions?: IamClient.RequestOptions): core.HttpResponsePromise<void>;
    private __addVisibilityFilter;
    /**
     * 移除可见性过滤器，将指定用户从资源的可见性白名单中移除。
     *
     * @param {MktAgiApi.DeleteIamVisibilityFiltersResourceTypeResourceIdUserIdRequest} request
     * @param {IamClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.iam.removeVisibilityFilter({
     *         resource_type: "resource_type",
     *         resource_id: 1,
     *         user_id: 1
     *     })
     */
    removeVisibilityFilter(request: MktAgiApi.DeleteIamVisibilityFiltersResourceTypeResourceIdUserIdRequest, requestOptions?: IamClient.RequestOptions): core.HttpResponsePromise<void>;
    private __removeVisibilityFilter;
}
