export interface InternalWisdomInternalWebAddRelationRequest {
    /** 置信度 */
    confidence?: string | undefined;
    /** 关系类型 */
    relation: string;
    /** 目标节点 */
    target_id: number;
    /** 权重 */
    weight?: number | undefined;
}
