import type * as MktAgiApi from "../index.js";
export interface InternalAigatewayInternalWebListUsageResponse {
    /** Data is the list of usage records. */
    data?: MktAgiApi.InternalAigatewayInternalWebUsageRecordItem[] | undefined;
    /** Object is the object type (always "list"). */
    object?: string | undefined;
}
