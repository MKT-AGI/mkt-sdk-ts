export interface InternalNotificationsInternalWebAdminSendReq {
    action_text?: string | undefined;
    action_url?: string | undefined;
    body: string;
    metadata?: string | undefined;
    title: string;
    type: string;
    user_id: number;
}
