import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace AuthClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AuthClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AuthClient.Options>;
    constructor(options?: AuthClient.Options);
    /**
     * Generate a CAPTCHA image and return the token plus base64-encoded PNG.
     *
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.auth.generateImageCaptcha()
     */
    generateImageCaptcha(requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebCaptchaGenerateResponse>;
    private __generateImageCaptcha;
    /**
     * Send a one-time verification code to the given email address. Rate-limited to 1 per 60 seconds.
     *
     * @param {MktAgiApi.PostAuthEmailSendRequest} request
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.TooManyRequestsError}
     *
     * @example
     *     await client.auth.sendEmailVerificationCode({
     *         "key": "value"
     *     })
     */
    sendEmailVerificationCode(request: MktAgiApi.PostAuthEmailSendRequest, requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<void>;
    private __sendEmailVerificationCode;
    /**
     * Verify the email code and return JWT tokens. Creates a new user account if this email is not registered.
     *
     * @param {MktAgiApi.PostAuthEmailVerifyRequest} request
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.auth.verifyEmailCodeAndAuthenticate({
     *         "key": "value"
     *     })
     */
    verifyEmailCodeAndAuthenticate(request: MktAgiApi.PostAuthEmailVerifyRequest, requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebAuthResponse>;
    private __verifyEmailCodeAndAuthenticate;
    /**
     * Exchange a GitHub OAuth authorization code for JWT tokens. Use this from SPAs/mobile apps instead of the web redirect flow.
     *
     * @param {MktAgiApi.PostAuthGithubRequest} request
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     *
     * @example
     *     await client.auth.exchangeGitHubCodeForTokensApi({
     *         "key": "value"
     *     })
     */
    exchangeGitHubCodeForTokensApi(request: MktAgiApi.PostAuthGithubRequest, requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<void>;
    private __exchangeGitHubCodeForTokensApi;
    /**
     * Handle the GitHub OAuth redirect, exchange the code for tokens, and redirect to the frontend.
     *
     * @param {MktAgiApi.GetAuthGithubCallbackRequest} request
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     *
     * @example
     *     await client.auth.gitHubOAuthCallbackWeb({
     *         state: "state",
     *         code: "code"
     *     })
     */
    gitHubOAuthCallbackWeb(request: MktAgiApi.GetAuthGithubCallbackRequest, requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<void>;
    private __gitHubOAuthCallbackWeb;
    /**
     * Generate an OAuth state and redirect the browser to GitHub's authorization page.
     *
     * @param {MktAgiApi.GetAuthGithubLoginRequest} request
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.auth.initiateGitHubOAuth({
     *         ref_uri: "ref_uri"
     *     })
     */
    initiateGitHubOAuth(request: MktAgiApi.GetAuthGithubLoginRequest, requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<void>;
    private __initiateGitHubOAuth;
    /**
     * Exchange a Google OAuth authorization code for JWT tokens. Use this from SPAs/mobile apps instead of the web redirect flow.
     *
     * @param {MktAgiApi.PostAuthGoogleRequest} request
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     *
     * @example
     *     await client.auth.exchangeGoogleCodeForTokensApi({
     *         "key": "value"
     *     })
     */
    exchangeGoogleCodeForTokensApi(request: MktAgiApi.PostAuthGoogleRequest, requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<void>;
    private __exchangeGoogleCodeForTokensApi;
    /**
     * Handle the Google OAuth redirect, exchange the code for tokens, and redirect to the frontend.
     *
     * @param {MktAgiApi.GetAuthGoogleCallbackRequest} request
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     *
     * @example
     *     await client.auth.googleOAuthCallbackWeb({
     *         state: "state",
     *         code: "code"
     *     })
     */
    googleOAuthCallbackWeb(request: MktAgiApi.GetAuthGoogleCallbackRequest, requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<void>;
    private __googleOAuthCallbackWeb;
    /**
     * Generate an OAuth state and redirect the browser to Google's authorization page.
     *
     * @param {MktAgiApi.GetAuthGoogleLoginRequest} request
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.auth.initiateGoogleOAuth({
     *         ref_uri: "ref_uri"
     *     })
     */
    initiateGoogleOAuth(request: MktAgiApi.GetAuthGoogleLoginRequest, requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<void>;
    private __initiateGoogleOAuth;
    /**
     * Invalidate all sessions for the authenticated user.
     *
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.auth.logoutCurrentUser()
     */
    logoutCurrentUser(requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<void>;
    private __logoutCurrentUser;
    /**
     * Send a one-time verification code to the given phone number. Rate-limited to 1 per 60 seconds.
     *
     * @param {MktAgiApi.PostAuthSmsSendRequest} request
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.TooManyRequestsError}
     *
     * @example
     *     await client.auth.sendSmsVerificationCode({
     *         "key": "value"
     *     })
     */
    sendSmsVerificationCode(request: MktAgiApi.PostAuthSmsSendRequest, requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<void>;
    private __sendSmsVerificationCode;
    /**
     * Verify the SMS code and return JWT tokens. Creates a new user account if this phone is not registered.
     *
     * @param {MktAgiApi.PostAuthSmsVerifyRequest} request
     * @param {AuthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.auth.verifySmsCodeAndAuthenticate({
     *         "key": "value"
     *     })
     */
    verifySmsCodeAndAuthenticate(request: MktAgiApi.PostAuthSmsVerifyRequest, requestOptions?: AuthClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalAccountsInternalWebAuthResponse>;
    private __verifySmsCodeAndAuthenticate;
}
