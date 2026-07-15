/**
 * image source
 */
export interface AnthropicImageSource {
    data?: string | undefined;
    /** e.g. "image/jpeg" */
    media_type?: string | undefined;
    /** "base64" or "url" */
    type?: string | undefined;
    url?: string | undefined;
}
