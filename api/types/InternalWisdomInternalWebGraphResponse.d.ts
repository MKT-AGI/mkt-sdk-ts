import type * as MktAgiApi from "../index.js";
export interface InternalWisdomInternalWebGraphResponse {
    /** 边列表 */
    edges?: MktAgiApi.InternalWisdomInternalWebRelationResponse[] | undefined;
    /** 节点列表 */
    nodes?: MktAgiApi.InternalWisdomInternalWebWisdomResponse[] | undefined;
}
