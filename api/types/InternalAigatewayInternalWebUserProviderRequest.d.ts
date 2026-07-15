export interface InternalAigatewayInternalWebUserProviderRequest {
    /** APIKey is the provider API key (encrypted at rest). */
    api_key: string;
    /** BaseURL is the optional custom API base URL. */
    base_url?: string | undefined;
    /** Enabled controls whether the provider is active. */
    enabled?: boolean | undefined;
    /** Name is the provider display name. */
    name: string;
    /** Protocol is the API protocol (openai or anthropic). */
    protocol?: InternalAigatewayInternalWebUserProviderRequest.Protocol | undefined;
    /** Visibility is the provider visibility (private or public). */
    visibility?: string | undefined;
}
export declare namespace InternalAigatewayInternalWebUserProviderRequest {
    /** Protocol is the API protocol (openai or anthropic). */
    const Protocol: {
        readonly Openai: "openai";
        readonly Anthropic: "anthropic";
    };
    type Protocol = (typeof Protocol)[keyof typeof Protocol];
}
