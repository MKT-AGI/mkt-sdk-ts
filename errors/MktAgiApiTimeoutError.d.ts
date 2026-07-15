import * as errors from "./index.js";
export declare class MktAgiApiTimeoutError extends errors.MktAgiApiError {
    constructor(message: string, opts?: {
        cause?: unknown;
    });
}
