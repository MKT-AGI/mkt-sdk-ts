/**
 * @example
 *     {}
 */
export interface GetGatewayUsageRequest {
    /** Filter by model ID */
    model_id?: number;
    /** Start date (YYYY-MM-DD) */
    date_from?: string;
    /** End date (YYYY-MM-DD) */
    date_to?: string;
    /** Sort field: record_date, call_count, total_cost */
    sort?: string;
    /** Sort order: asc, desc (default desc) */
    order?: string;
    /** Pagination offset (default 0) */
    offset?: number;
    /** Page size (default 20, max 100) */
    limit?: number;
}
