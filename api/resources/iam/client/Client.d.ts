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
     * 列出资源的所有访问授权记录。
     *
     * @param {MktAgiApi.GetIamGrantsRequest} request
     * @param {IamClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.iam.listResourceAccessGrants({
     *         resource_type: "resource_type",
     *         resource_id: 1
     *     })
     */
    listResourceAccessGrants(request: MktAgiApi.GetIamGrantsRequest, requestOptions?: IamClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalIamInternalDomainAccessGrant>;
    private __listResourceAccessGrants;
    /**
     * 授予用户资源访问权限。将指定用户加入资源的授权白名单。
     *
     * @param {MktAgiApi.PostIamGrantsRequest} request
     * @param {IamClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.iam.grantResourceAccess({
     *         "key": "value"
     *     })
     */
    grantResourceAccess(request: MktAgiApi.PostIamGrantsRequest, requestOptions?: IamClient.RequestOptions): core.HttpResponsePromise<void>;
    private __grantResourceAccess;
    /**
     * 撤销用户的资源访问权限，将指定用户从资源的授权白名单中移除。
     *
     * @param {MktAgiApi.DeleteIamGrantsResourceTypeResourceIdUserIdRequest} request
     * @param {IamClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.iam.revokeResourceAccess({
     *         resource_type: "resource_type",
     *         resource_id: 1,
     *         user_id: 1
     *     })
     */
    revokeResourceAccess(request: MktAgiApi.DeleteIamGrantsResourceTypeResourceIdUserIdRequest, requestOptions?: IamClient.RequestOptions): core.HttpResponsePromise<void>;
    private __revokeResourceAccess;
}
