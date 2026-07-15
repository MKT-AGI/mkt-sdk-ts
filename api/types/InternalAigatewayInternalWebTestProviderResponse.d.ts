import type * as MktAgiApi from "../index.js";
export interface InternalAigatewayInternalWebTestProviderResponse {
    error?: string | undefined;
    latency_ms?: number | undefined;
    models?: MktAgiApi.InternalAigatewayInternalWebUpstreamModelItem[] | undefined;
    success?: boolean | undefined;
}
