import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as MktAgiApi from "../index.js";
export declare class InternalServerError extends errors.MktAgiApiError {
    constructor(body: MktAgiApi.GithubComMktAgiAixInternalPkgGinxCodeResp, rawResponse?: core.RawResponse);
}
