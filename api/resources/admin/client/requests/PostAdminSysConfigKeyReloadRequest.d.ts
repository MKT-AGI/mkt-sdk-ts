/**
 * @example
 *     {
 *         key: "key",
 *         body: {
 *             "key": "value"
 *         }
 *     }
 */
export interface PostAdminSysConfigKeyReloadRequest {
    /** 配置键 */
    key: string;
    body: Record<string, unknown>;
}
