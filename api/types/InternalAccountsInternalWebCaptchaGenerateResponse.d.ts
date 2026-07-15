/**
 * Captcha token and base64-encoded PNG image.
 */
export interface InternalAccountsInternalWebCaptchaGenerateResponse {
    /** ImageB64 is the base64-encoded PNG captcha image. */
    image_base64?: string | undefined;
    /** Token is the captcha verification token. */
    token?: string | undefined;
}
