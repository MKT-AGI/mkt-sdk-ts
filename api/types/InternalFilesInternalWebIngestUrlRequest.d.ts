export interface InternalFilesInternalWebIngestUrlRequest {
    /** business context ID */
    biz_id?: string | undefined;
    /** target directory path, defaults to "/" */
    dir_path?: string | undefined;
    /** target filename */
    filename: string;
    /** source URL to download */
    url: string;
    /** Visibility constant (domain.VisibilityPrivate|Public) */
    visibility?: string | undefined;
}
