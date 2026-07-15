import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace UserClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UserClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UserClient.Options>;
    constructor(options?: UserClient.Options);
    /**
     * Return the authenticated user's profile information.
     *
     * @param {UserClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.user.getCurrentUserProfile()
     */
    getCurrentUserProfile(requestOptions?: UserClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebUserResponse>;
    private __getCurrentUserProfile;
    /**
     * Update the authenticated user's name and/or avatar_url. Name must be unique.
     *
     * @param {MktAgiApi.PatchUserMeRequest} request
     * @param {UserClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ConflictError}
     *
     * @example
     *     await client.user.updateCurrentUserProfile({
     *         "key": "value"
     *     })
     */
    updateCurrentUserProfile(request: MktAgiApi.PatchUserMeRequest, requestOptions?: UserClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebUserResponse>;
    private __updateCurrentUserProfile;
    /**
     * Generate a presigned S3 URL for direct browser avatar upload. Content type must be image/png, image/jpeg, or image/webp. Max size 5MB.
     *
     * @param {MktAgiApi.PostUserMeAvatarUploadUrlRequest} request
     * @param {UserClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.user.getPresignedAvatarUploadUrl({
     *         "key": "value"
     *     })
     */
    getPresignedAvatarUploadUrl(request: MktAgiApi.PostUserMeAvatarUploadUrlRequest, requestOptions?: UserClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebAvatarUploadUrlResponse>;
    private __getPresignedAvatarUploadUrl;
    /**
     * Verify the deletion code, snapshot original contacts, NULL the login identifiers, kill all sessions, and clear the session cookie.
     *
     * @param {MktAgiApi.PostUserMeDeletionConfirmRequest} request
     * @param {UserClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.user.confirmAndSoftDeleteTheAccount({
     *         "key": "value"
     *     })
     */
    confirmAndSoftDeleteTheAccount(request: MktAgiApi.PostUserMeDeletionConfirmRequest, requestOptions?: UserClient.RequestOptions): core.HttpResponsePromise<void>;
    private __confirmAndSoftDeleteTheAccount;
    /**
     * Send a 6-digit confirmation code to the user's bound email (or phone if no email) to confirm account deletion.
     *
     * @param {Record<string, unknown>} request
     * @param {UserClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.TooManyRequestsError}
     *
     * @example
     *     await client.user.sendAccountDeletionConfirmationCode({
     *         "key": "value"
     *     })
     */
    sendAccountDeletionConfirmationCode(request: Record<string, unknown>, requestOptions?: UserClient.RequestOptions): core.HttpResponsePromise<void>;
    private __sendAccountDeletionConfirmationCode;
    /**
     * Switch the session's current effective user to the session owner or one direct sub-user of the owner.
     *
     * @param {MktAgiApi.PostUserSwitchRequest} request
     * @param {UserClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.user.switchCurrentSessionUser({
     *         "key": "value"
     *     })
     */
    switchCurrentSessionUser(request: MktAgiApi.PostUserSwitchRequest, requestOptions?: UserClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebUserResponse>;
    private __switchCurrentSessionUser;
    /**
     * Return the session owner plus all direct sub-users that the current session can switch to.
     *
     * @param {UserClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.user.listSwitchableUsers()
     */
    listSwitchableUsers(requestOptions?: UserClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayInternalAccountsInternalWebUserResponse>;
    private __listSwitchableUsers;
}
