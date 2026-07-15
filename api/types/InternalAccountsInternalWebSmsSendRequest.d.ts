/**
 * Phone number with optional captcha verification.
 */
export interface InternalAccountsInternalWebSmsSendRequest {
    /** CaptchaCode is the user's input for the captcha challenge. */
    captcha_code?: string | undefined;
    /** CaptchaToken is an optional captcha verification token from the frontend widget. */
    captcha_token?: string | undefined;
    /** Phone is the mobile phone number to receive the verification code (E.164 format recommended). */
    phone: string;
}
