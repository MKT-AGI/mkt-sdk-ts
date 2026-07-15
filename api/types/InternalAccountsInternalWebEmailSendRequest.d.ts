/**
 * Email address with optional captcha verification.
 */
export interface InternalAccountsInternalWebEmailSendRequest {
    /** CaptchaCode is the user's input for the captcha challenge. */
    captcha_code?: string | undefined;
    /** CaptchaToken is an optional captcha verification token from the frontend widget. */
    captcha_token?: string | undefined;
    /** Email is the email address to send the verification code to. */
    email: string;
}
