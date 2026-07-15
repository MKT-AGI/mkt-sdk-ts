import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace BugReportsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class BugReportsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BugReportsClient.Options>;
    constructor(options?: BugReportsClient.Options);
    /**
     * Return paginated list of all bug reports. Supports filtering by status and domain label.
     *
     * @param {MktAgiApi.GetAdminBugReportsRequest} request
     * @param {BugReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     *
     * @example
     *     await client.bugReports.listAllBugReports()
     */
    listAllBugReports(request?: MktAgiApi.GetAdminBugReportsRequest, requestOptions?: BugReportsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalBugreportsInternalDomainBugReport>;
    private __listAllBugReports;
    /**
     * Return full detail of a single bug report including DOM element info and review notes.
     *
     * @param {MktAgiApi.GetAdminBugReportsIdRequest} request
     * @param {BugReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.bugReports.getBugReportById({
     *         id: 1
     *     })
     */
    getBugReportById(request: MktAgiApi.GetAdminBugReportsIdRequest, requestOptions?: BugReportsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalBugreportsInternalDomainBugReport>;
    private __getBugReportById;
    /**
     * Update status and review notes. Status transitions: pending->reviewed, pending->closed, reviewed->published, reviewed->closed, published->closed.
     *
     * @param {MktAgiApi.PatchAdminBugReportsIdRequest} request
     * @param {BugReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.bugReports.updateBugReport({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    updateBugReport(request: MktAgiApi.PatchAdminBugReportsIdRequest, requestOptions?: BugReportsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultGithubComMktAgiAixInternalBugreportsInternalDomainBugReport>;
    private __updateBugReport;
    /**
     * Create a GitHub Issue from a reviewed bug report with structured markdown body and auto-detected domain labels.
     *
     * @param {MktAgiApi.PostAdminBugReportsIdPublishRequest} request
     * @param {BugReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.bugReports.publishBugReportToGitHub({
     *         id: 1
     *     })
     */
    publishBugReportToGitHub(request: MktAgiApi.PostAdminBugReportsIdPublishRequest, requestOptions?: BugReportsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __publishBugReportToGitHub;
    /**
     * Submit a bug report with DOM context (element info, viewport). The report is stored with status "pending" for admin review.
     *
     * @param {MktAgiApi.PostBugReportsRequest} request
     * @param {BugReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.bugReports.submitBugReport({
     *         "key": "value"
     *     })
     */
    submitBugReport(request: MktAgiApi.PostBugReportsRequest, requestOptions?: BugReportsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __submitBugReport;
    /**
     * Return paginated list of bug reports submitted by the authenticated user.
     *
     * @param {MktAgiApi.GetBugReportsMineRequest} request
     * @param {BugReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.bugReports.listMyBugReports()
     */
    listMyBugReports(request?: MktAgiApi.GetBugReportsMineRequest, requestOptions?: BugReportsClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayGithubComMktAgiAixInternalBugreportsInternalDomainBugReport>;
    private __listMyBugReports;
}
