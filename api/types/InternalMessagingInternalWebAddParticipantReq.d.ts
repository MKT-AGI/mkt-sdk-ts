/**
 * Request to add a new participant to a conversation.
 */
export interface InternalMessagingInternalWebAddParticipantReq {
    /** Role is the participant's role (e.g. "member", "admin"). */
    role?: string | undefined;
    /** UserID is the user to add as a participant. */
    user_id?: number | undefined;
}
