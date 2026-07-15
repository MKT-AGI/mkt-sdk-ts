import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as MktAgiApi from "../../../index.js";
export declare namespace DevicesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class DevicesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DevicesClient.Options>;
    constructor(options?: DevicesClient.Options);
    /**
     * Register a push notification device for the current user
     *
     * @param {MktAgiApi.PostMessagingDevicesRequest} request
     * @param {DevicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.devices.registerDevice({
     *         "key": "value"
     *     })
     */
    registerDevice(request: MktAgiApi.PostMessagingDevicesRequest, requestOptions?: DevicesClient.RequestOptions): core.HttpResponsePromise<void>;
    private __registerDevice;
    /**
     * Unregister a push notification device
     *
     * @param {MktAgiApi.DeleteMessagingDevicesDeviceIdRequest} request
     * @param {DevicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MktAgiApi.BadRequestError}
     * @throws {@link MktAgiApi.UnauthorizedError}
     *
     * @example
     *     await client.devices.unregisterDevice({
     *         device_id: 1
     *     })
     */
    unregisterDevice(request: MktAgiApi.DeleteMessagingDevicesDeviceIdRequest, requestOptions?: DevicesClient.RequestOptions): core.HttpResponsePromise<void>;
    private __unregisterDevice;
}
