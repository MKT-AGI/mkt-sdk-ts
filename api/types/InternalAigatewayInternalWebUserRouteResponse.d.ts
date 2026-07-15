/**
 * User route with target model list.
 */
export interface InternalAigatewayInternalWebUserRouteResponse {
    /** Algorithm is the routing algorithm. */
    algorithm?: string | undefined;
    /** Description is an optional description. */
    description?: string | undefined;
    /** ID is the route ID. */
    id?: number | undefined;
    /** Name is the route name. */
    name?: string | undefined;
    /** Targets is the ordered list of target model IDs. */
    targets?: number[] | undefined;
    /** UserID is the owner user ID. */
    user_id?: number | undefined;
    /** Visibility is the route visibility. */
    visibility?: string | undefined;
}
