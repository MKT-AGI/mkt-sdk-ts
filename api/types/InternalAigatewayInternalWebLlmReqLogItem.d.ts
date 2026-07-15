export interface InternalAigatewayInternalWebLlmReqLogItem {
    /** CacheHitTokens 是 prompt 缓存命中的 token 数，按 cache_hit_price 计费，不参与 input_price 计费。 */
    cache_hit_tokens?: number | undefined;
    /** CompletionTokens is the number of completion tokens. */
    completion_tokens?: number | undefined;
    /** Cost is the request cost (yuan). */
    cost?: number | undefined;
    /** CreatedAt is the creation timestamp (Unix seconds). */
    created_at?: number | undefined;
    /** ID is the log entry ID. */
    id?: number | undefined;
    /** LatencyMs is the total request latency in milliseconds. */
    latency_ms?: number | undefined;
    /** ModelID is the model used. */
    model_id?: number | undefined;
    /** PromptTokens is the number of prompt tokens. */
    prompt_tokens?: number | undefined;
    /** ProviderID is the provider used. */
    provider_id?: number | undefined;
    /** RequestID 是请求关联 ID（来自 X-Request-ID header 或自动生成），用于跨系统链路追踪。 */
    request_id?: string | undefined;
    /** Status is the HTTP status code. */
    status?: number | undefined;
    /** Stream indicates whether this was a streaming request. */
    stream?: boolean | undefined;
    /** TotalTokens is the total token count. */
    total_tokens?: number | undefined;
    /** TPS is the tokens per second throughput. */
    tps?: number | undefined;
    /** TTFTMs is the time to first token in milliseconds (0 for non-streaming). */
    ttft_ms?: number | undefined;
}
