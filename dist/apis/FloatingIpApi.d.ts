/**
 * Master da Web API
 * The Master da Web API documentation
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
/**
 *
 */
export declare class FloatingIpApi extends runtime.BaseAPI {
    /**
     */
    floatingIpControllerEligibleVmsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    floatingIpControllerEligibleVms(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    floatingIpControllerListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    floatingIpControllerList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    floatingIpControllerMoveFloatingIpRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    floatingIpControllerMoveFloatingIp(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    floatingIpControllerSetModeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    floatingIpControllerSetMode(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
