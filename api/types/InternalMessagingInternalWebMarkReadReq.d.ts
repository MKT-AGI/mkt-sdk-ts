/**
 * Request to mark messages as read up to a given sequence number.
 */
export interface InternalMessagingInternalWebMarkReadReq {
    /** ConvID identifies the conversation to mark as read. */
    conv_id?: number | undefined;
    /** Seq is the sequence number up to which messages are marked as read. */
    seq?: number | undefined;
}
