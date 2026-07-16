export interface GithubComMktAgiAixInternalBugreportsInternalDomainBugReport {
    client_timestamp?: number | undefined;
    context?: number[] | undefined;
    created_at?: number | undefined;
    description?: string | undefined;
    domain_label?: string | undefined;
    github_issue_number?: number | undefined;
    github_issue_url?: string | undefined;
    id?: number | undefined;
    label?: string | undefined;
    reporter_id?: number | undefined;
    /** populated via service-layer JOIN */
    reporter_name?: string | undefined;
    review_notes?: string | undefined;
    reviewer_id?: number | undefined;
    status?: string | undefined;
    title?: string | undefined;
    updated_at?: number | undefined;
    url?: string | undefined;
}
