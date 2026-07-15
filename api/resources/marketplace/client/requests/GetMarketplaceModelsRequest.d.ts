/**
 * @example
 *     {}
 */
export interface GetMarketplaceModelsRequest {
    /** Search by name or description */
    search?: string;
    /** Minimum output price filter */
    min_price?: number;
    /** Maximum output price filter */
    max_price?: number;
    /** Sort field: listed_at, call_count, output_price (default listed_at) */
    sort?: string;
    /** Sort order: asc, desc (default desc) */
    order?: string;
    /** Page number (default 1) */
    page?: number;
    /** Page size (default 20, max 100) */
    limit?: number;
}
