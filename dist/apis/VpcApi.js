"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class VpcApi extends runtime.BaseAPI {
    /**
     */
    async vpcControllerAddVmToVpcRaw(requestParameters, initOverrides) {
        if (requestParameters['addVmToVpcDto'] == null) {
            throw new runtime.RequiredError('addVmToVpcDto', 'Required parameter "addVmToVpcDto" was null or undefined when calling vpcControllerAddVmToVpc().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/vpc/vm`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.AddVmToVpcDtoToJSON)(requestParameters['addVmToVpcDto']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.VpcVmsEntityFromJSON)(jsonValue));
    }
    /**
     */
    async vpcControllerAddVmToVpc(requestParameters, initOverrides) {
        const response = await this.vpcControllerAddVmToVpcRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async vpcControllerCreateRaw(requestParameters, initOverrides) {
        if (requestParameters['vpcCreateDto'] == null) {
            throw new runtime.RequiredError('vpcCreateDto', 'Required parameter "vpcCreateDto" was null or undefined when calling vpcControllerCreate().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/vpc`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.VpcCreateDtoToJSON)(requestParameters['vpcCreateDto']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.VpcEntityFromJSON)(jsonValue));
    }
    /**
     */
    async vpcControllerCreate(requestParameters, initOverrides) {
        const response = await this.vpcControllerCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async vpcControllerIndexRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/vpc`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.VpcEntityFromJSON));
    }
    /**
     */
    async vpcControllerIndex(initOverrides) {
        const response = await this.vpcControllerIndexRaw(initOverrides);
        return await response.value();
    }
}
exports.VpcApi = VpcApi;
