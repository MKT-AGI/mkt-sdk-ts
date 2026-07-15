import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace NotificationsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class NotificationsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<NotificationsClient.Options>;
    constructor(options?: NotificationsClient.Options);
    /**
     * Send a notification to a specified user (admin only)
     *
     * @param {MktAgiApi.PostApiV1AdminNotificationsRequest} request
     * @param {NotificationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.ForbiddenError}
     *
     * @example
     *     await client.notifications.adminSendNotification({
     *         "key": "value"
     *     })
     */
    adminSendNotification(request: MktAgiApi.PostApiV1AdminNotificationsRequest, requestOptions?: NotificationsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __adminSendNotification;
    /**
     * List the current user's notifications with cursor-based pagination
     *
     * @param {MktAgiApi.GetApiV1NotificationsRequest} request
     * @param {NotificationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.notifications.listNotifications()
     */
    listNotifications(request?: MktAgiApi.GetApiV1NotificationsRequest, requestOptions?: NotificationsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listNotifications;
    /**
     * Mark a single notification as read for the current user
     *
     * @param {MktAgiApi.PostApiV1NotificationsIdReadRequest} request
     * @param {NotificationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     * @throws {@link MktAgiApi.NotFoundError}
     *
     * @example
     *     await client.notifications.markNotificationAsRead({
     *         id: 1
     *     })
     */
    markNotificationAsRead(request: MktAgiApi.PostApiV1NotificationsIdReadRequest, requestOptions?: NotificationsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __markNotificationAsRead;
    /**
     * List notification preferences for the current user
     *
     * @param {MktAgiApi.GetApiV1NotificationsPreferencesRequest} request
     * @param {NotificationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.notifications.listPreferences()
     */
    listPreferences(request?: MktAgiApi.GetApiV1NotificationsPreferencesRequest, requestOptions?: NotificationsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listPreferences;
    /**
     * Set a notification preference for the current user
     *
     * @param {MktAgiApi.PutApiV1NotificationsPreferencesRequest} request
     * @param {NotificationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.notifications.setPreference({
     *         "key": "value"
     *     })
     */
    setPreference(request: MktAgiApi.PutApiV1NotificationsPreferencesRequest, requestOptions?: NotificationsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __setPreference;
    /**
     * Mark all notifications as read for the current user
     *
     * @param {NotificationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.notifications.markAllAsRead()
     */
    markAllAsRead(requestOptions?: NotificationsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __markAllAsRead;
    /**
     * Get the count of unread notifications for the current user
     *
     * @param {NotificationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.notifications.getUnreadCount()
     */
    getUnreadCount(requestOptions?: NotificationsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __getUnreadCount;
}
