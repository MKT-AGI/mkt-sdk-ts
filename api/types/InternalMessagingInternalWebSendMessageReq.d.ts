/**
 * Request to send a message in a conversation.
 */
export interface InternalMessagingInternalWebSendMessageReq {
    /** Content is the message body text. */
    content?: string | undefined;
    /** ContentType indicates the message format (e.g. "text", "markdown"). */
    content_type?: string | undefined;
    /**
     * MentionedUserIDs is the list of user IDs @-mentioned in this message.
     * Optional, defaults to empty when not provided.
     * @Interaction 客户端传入被 @ 的用户 ID 列表（由前端 @ 选人组件生成）。空数组或无此字段表示无提及。后续 AI 网关据此判断是否 @了 AI 从而触发 LLM 调用。
     */
    mentioned_user_ids?: number[] | undefined;
    /** Metadata carries optional structured metadata attached to the message. */
    metadata?: string | undefined;
    /** ReplyToSeq references the sequence number of the message being replied to. */
    reply_to_seq?: number | undefined;
}
