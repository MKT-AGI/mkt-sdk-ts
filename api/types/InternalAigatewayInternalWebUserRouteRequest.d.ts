export interface InternalAigatewayInternalWebUserRouteRequest {
    /** Algorithm is the routing algorithm (currently only targets[0] is used). */
    algorithm?: string | undefined;
    /** Name is the route name (unique per user). */
    name: string;
    /** Targets is the ordered list of model IDs for this route. */
    targets: number[];
    /** Visibility is the route visibility (private or public). */
    visibility?: string | undefined;
}
