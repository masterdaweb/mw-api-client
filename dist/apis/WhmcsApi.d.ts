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
export declare class WhmcsApi extends runtime.BaseAPI {
    /**
     */
    whmcsControllerLoginRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     */
    whmcsControllerLogin(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
    /**
     */
    whmcsControllerLogoutRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    whmcsControllerLogout(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    whmcsControllerMeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    whmcsControllerMe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    whmcsControllerRefreshTokensRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    whmcsControllerRefreshTokens(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    whmcsControllerSsoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    whmcsControllerSso(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
