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
import type { AddVmToVpcDto, VpcCreateDto, VpcEntity, VpcVmsEntity } from '../models/index';
export interface VpcControllerAddVmToVpcRequest {
    addVmToVpcDto: AddVmToVpcDto;
}
export interface VpcControllerCreateRequest {
    vpcCreateDto: VpcCreateDto;
}
/**
 *
 */
export declare class VpcApi extends runtime.BaseAPI {
    /**
     */
    vpcControllerAddVmToVpcRaw(requestParameters: VpcControllerAddVmToVpcRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VpcVmsEntity>>;
    /**
     */
    vpcControllerAddVmToVpc(requestParameters: VpcControllerAddVmToVpcRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VpcVmsEntity>;
    /**
     */
    vpcControllerCreateRaw(requestParameters: VpcControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VpcEntity>>;
    /**
     */
    vpcControllerCreate(requestParameters: VpcControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VpcEntity>;
    /**
     */
    vpcControllerIndexRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VpcEntity>>>;
    /**
     */
    vpcControllerIndex(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VpcEntity>>;
}
