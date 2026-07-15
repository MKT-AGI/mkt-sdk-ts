/**
 * Upload parameters for generating a presigned avatar upload URL.
 */
export interface InternalAccountsInternalWebAvatarUploadUrlReq {
    /** ContentLength is the file size in bytes (max 5MB). */
    content_length: number;
    /** ContentType is the MIME type of the image (image/png, image/jpeg, or image/webp). */
    content_type: string;
}
