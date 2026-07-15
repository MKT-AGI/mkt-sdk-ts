import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace SessionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SessionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SessionsClient.Options>;
    constructor(options?: SessionsClient.Options);
    /**
     * Return paginated list of AI chat sessions for the current user
     *
     * @param {MktAgiApi.GetGatewaySessionsRequest} request
     * @param {SessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.sessions.listAiSessions()
     */
    listAiSessions(request?: MktAgiApi.GetGatewaySessionsRequest, requestOptions?: SessionsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalAigatewayInternalDomainAiSession>;
    private __listAiSessions;
    /**
     * Create a new AI chat session for the current user
     *
     * @param {MktAgiApi.PostGatewaySessionsRequest} request
     * @param {SessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     *
     * @example
     *     await client.sessions.createAiSession({
     *         "key": "value"
     *     })
     */
    createAiSession(request: MktAgiApi.PostGatewaySessionsRequest, requestOptions?: SessionsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalAigatewayInternalDomainAiSession>;
    private __createAiSession;
    /**
     * Soft-delete an AI chat session
     *
     * @param {MktAgiApi.DeleteGatewaySessionsIdRequest} request
     * @param {SessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.sessions.deleteAiSession({
     *         id: 1
     *     })
     */
    deleteAiSession(request: MktAgiApi.DeleteGatewaySessionsIdRequest, requestOptions?: SessionsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __deleteAiSession;
    /**
     * Update session title or metadata
     *
     * @param {MktAgiApi.PatchGatewaySessionsIdRequest} request
     * @param {SessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.sessions.updateAiSession({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    updateAiSession(request: MktAgiApi.PatchGatewaySessionsIdRequest, requestOptions?: SessionsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultAny>;
    private __updateAiSession;
}
