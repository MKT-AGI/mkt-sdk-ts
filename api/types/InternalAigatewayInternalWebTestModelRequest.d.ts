export interface InternalAigatewayInternalWebTestModelRequest {
    /** ModelName is the upstream model name (e.g. "gpt-4", "deepseek-chat"). */
    model_name: string;
    /** ProviderID is the provider to test against. */
    provider_id: number;
}
