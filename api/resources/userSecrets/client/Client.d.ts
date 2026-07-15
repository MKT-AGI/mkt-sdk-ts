import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace UserSecretsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UserSecretsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UserSecretsClient.Options>;
    constructor(options?: UserSecretsClient.Options);
    /**
     * List metadata for all secrets owned by the specified user. Secret values are never returned by this endpoint.
     *
     * @param {MktAgiApi.GetSecretsUserIdRequest} request
     * @param {UserSecretsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.userSecrets.listUserSecrets({
     *         user_id: 1
     *     })
     */
    listUserSecrets(request: MktAgiApi.GetSecretsUserIdRequest, requestOptions?: UserSecretsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayInternalAccountsInternalWebUserSecretResponse>;
    private __listUserSecrets;
    /**
     * Return one decrypted secret value for the specified user and service.
     *
     * @param {MktAgiApi.GetSecretsUserIdKeyRequest} request
     * @param {UserSecretsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.userSecrets.getUserSecret({
     *         user_id: 1,
     *         key: "key"
     *     })
     */
    getUserSecret(request: MktAgiApi.GetSecretsUserIdKeyRequest, requestOptions?: UserSecretsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebUserSecretValueResponse>;
    private __getUserSecret;
    /**
     * Encrypt and store a secret value for the specified user and service. The response does not include the secret value.
     *
     * @param {MktAgiApi.PutSecretsUserIdKeyRequest} request
     * @param {UserSecretsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.userSecrets.createOrUpdateUserSecret({
     *         user_id: 1,
     *         key: "key",
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    createOrUpdateUserSecret(request: MktAgiApi.PutSecretsUserIdKeyRequest, requestOptions?: UserSecretsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebUserSecretResponse>;
    private __createOrUpdateUserSecret;
    /**
     * Delete one secret by user ID and service.
     *
     * @param {MktAgiApi.DeleteSecretsUserIdKeyRequest} request
     * @param {UserSecretsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.NotFoundError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.userSecrets.deleteUserSecret({
     *         user_id: 1,
     *         key: "key"
     *     })
     */
    deleteUserSecret(request: MktAgiApi.DeleteSecretsUserIdKeyRequest, requestOptions?: UserSecretsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebDeleteUserSecretResponse>;
    private __deleteUserSecret;
}
