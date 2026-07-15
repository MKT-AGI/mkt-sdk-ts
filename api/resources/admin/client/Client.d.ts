import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace AdminClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AdminClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AdminClient.Options>;
    constructor(options?: AdminClient.Options);
    /**
     * 返回所有已知配置 key，DB 中有值的显示 DB 值（source=db），无值的显示代码默认值（source=default）
     *
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.admin.列出所有系统配置项()
     */
    列出所有系统配置项(requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxCodeResp>;
    private __列出所有系统配置项;
    /**
     * 更新指定 key 的系统配置值并清除该 key 的缓存
     *
     * @param {MktAgiApi.PutAdminSysConfigKeyRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.admin.更新系统配置项({
     *         key: "key",
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    更新系统配置项(request: MktAgiApi.PutAdminSysConfigKeyRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxCodeResp>;
    private __更新系统配置项;
    /**
     * 清除指定 key 的内存缓存，下次读取从 DB 加载最新值
     *
     * @param {MktAgiApi.PostAdminSysConfigKeyReloadRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     * @throws {@link MktAgiApi.InternalServerError}
     *
     * @example
     *     await client.admin.重载系统配置缓存({
     *         key: "key",
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    重载系统配置缓存(request: MktAgiApi.PostAdminSysConfigKeyReloadRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<MktAgiApi.GithubComMktAgiAixInternalPkgGinxCodeResp>;
    private __重载系统配置缓存;
}
