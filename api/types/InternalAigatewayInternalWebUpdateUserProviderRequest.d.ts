export interface InternalAigatewayInternalWebUpdateUserProviderRequest {
    /** APIKey is the new provider API key (leave empty to keep existing). */
    api_key?: string | undefined;
    /** BaseURL is the optional custom API base URL. */
    base_url?: string | undefined;
    /** Enabled controls whether the provider is active. */
    enabled?: boolean | undefined;
    /** Name is the provider display name. */
    name: string;
    /** Protocol is the API protocol (openai or anthropic). */
    protocol?: InternalAigatewayInternalWebUpdateUserProviderRequest.Protocol | undefined;
    /** Visibility is the provider visibility (private or public). */
    visibility?: string | undefined;
}
export declare namespace InternalAigatewayInternalWebUpdateUserProviderRequest {
    /** Protocol is the API protocol (openai or anthropic). */
    const Protocol: {
        readonly Openai: "openai";
        readonly Anthropic: "anthropic";
    };
    type Protocol = (typeof Protocol)[keyof typeof Protocol];
}
