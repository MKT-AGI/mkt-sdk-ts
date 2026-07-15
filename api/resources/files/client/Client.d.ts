import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace FilesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class FilesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<FilesClient.Options>;
    constructor(options?: FilesClient.Options);
    /**
     * List files in the specified business directory
     *
     * @param {MktAgiApi.GetAdminFilesRequest} request
     * @param {FilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.files.listFilesInDirectory()
     */
    listFilesInDirectory(request?: MktAgiApi.GetAdminFilesRequest, requestOptions?: FilesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultArrayInternalFilesInternalWebFileResponse>;
    private __listFilesInDirectory;
    /**
     * Get file metadata by ID
     *
     * @param {MktAgiApi.GetAdminFilesIdRequest} request
     * @param {FilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.files.getFile({
     *         id: 1
     *     })
     */
    getFile(request: MktAgiApi.GetAdminFilesIdRequest, requestOptions?: FilesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalFilesInternalWebFileResponse>;
    private __getFile;
    /**
     * Delete a file by ID
     *
     * @param {MktAgiApi.DeleteAdminFilesIdRequest} request
     * @param {FilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.files.deleteFile({
     *         id: 1
     *     })
     */
    deleteFile(request: MktAgiApi.DeleteAdminFilesIdRequest, requestOptions?: FilesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalFilesInternalWebFileDeleteVo>;
    private __deleteFile;
    /**
     * Update file name and/or visibility
     *
     * @param {MktAgiApi.PatchAdminFilesIdRequest} request
     * @param {FilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.files.updateFile({
     *         id: 1,
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    updateFile(request: MktAgiApi.PatchAdminFilesIdRequest, requestOptions?: FilesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalFilesInternalWebFileResponse>;
    private __updateFile;
    /**
     * Get a presigned download URL for a file
     *
     * @param {MktAgiApi.GetAdminFilesIdDownloadRequest} request
     * @param {FilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.files.getDownloadUrl({
     *         id: 1
     *     })
     */
    getDownloadUrl(request: MktAgiApi.GetAdminFilesIdDownloadRequest, requestOptions?: FilesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalFilesInternalWebFileDownloadVo>;
    private __getDownloadUrl;
    /**
     * Download a file from the given URL and store in the files domain
     *
     * @param {MktAgiApi.PostAdminFilesIngestUrlRequest} request
     * @param {FilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.files.ingestFileFromUrl({
     *         "key": "value"
     *     })
     */
    ingestFileFromUrl(request: MktAgiApi.PostAdminFilesIngestUrlRequest, requestOptions?: FilesClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxResultInternalFilesInternalWebFileResponse>;
    private __ingestFileFromUrl;
}
