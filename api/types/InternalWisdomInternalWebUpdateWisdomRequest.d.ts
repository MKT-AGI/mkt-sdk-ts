export interface InternalWisdomInternalWebUpdateWisdomRequest {
    /** 正文 */
    body?: string | undefined;
    /** 变更日志 */
    changelog?: string | undefined;
    /** 所属社区 */
    community_id?: number | undefined;
    /** 防御 */
    defencer?: string | undefined;
    /** 描述 */
    description?: string | undefined;
    /** 分类 */
    kind?: string | undefined;
    /** 承诺 */
    promise?: string | undefined;
    /** 扩展属性 */
    props?: number[] | undefined;
    /** 反思 */
    reflector?: string | undefined;
    /** 标识 */
    slug?: string | undefined;
    /** 标题 */
    title?: string | undefined;
    /** 类型 */
    type?: string | undefined;
    /** 版本号 */
    version: number;
}
