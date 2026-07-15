/**
 * @example
 *     {
 *         conv_id: 1
 *     }
 */
export interface GetMessagingConversationsConvIdMessagesRequest {
    /** Conversation ID */
    conv_id: number;
    /** Only messages after this sequence number */
    after_seq?: number;
    /** Page limit (default 20, max 100) */
    limit?: number;
}
