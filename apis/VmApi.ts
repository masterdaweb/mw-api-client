/* tslint:disable */
/* eslint-disable */
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
import type {
  VmEntity,
} from '../models/index';
import {
    VmEntityFromJSON,
    VmEntityToJSON,
} from '../models/index';

export interface VmControllerFindVmsRequest {
    clusterId?: string;
    id?: string;
}

export interface VmControllerListRequest {
    vmId: Array<string>;
}

/**
 * 
 */
export class VmApi extends runtime.BaseAPI {

    /**
     */
    async vmControllerFindVmsRaw(requestParameters: VmControllerFindVmsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VmEntity>>> {
        const queryParameters: any = {};

        if (requestParameters['clusterId'] != null) {
            queryParameters['cluster_id'] = requestParameters['clusterId'];
        }

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/vm/filter`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VmEntityFromJSON));
    }

    /**
     */
    async vmControllerFindVms(requestParameters: VmControllerFindVmsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VmEntity>> {
        const response = await this.vmControllerFindVmsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async vmControllerListRaw(requestParameters: VmControllerListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VmEntity>>> {
        if (requestParameters['vmId'] == null) {
            throw new runtime.RequiredError(
                'vmId',
                'Required parameter "vmId" was null or undefined when calling vmControllerList().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/vm`.replace(`{${"vm_id"}}`, encodeURIComponent(String(requestParameters['vmId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VmEntityFromJSON));
    }

    /**
     */
    async vmControllerList(requestParameters: VmControllerListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VmEntity>> {
        const response = await this.vmControllerListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async vmControllerListVmRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VmEntity>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/vm/{vm_id}`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VmEntityFromJSON));
    }

    /**
     */
    async vmControllerListVm(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VmEntity>> {
        const response = await this.vmControllerListVmRaw(initOverrides);
        return await response.value();
    }

}
