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
exports.instanceOfAddVmToVpcDto = instanceOfAddVmToVpcDto;
exports.AddVmToVpcDtoFromJSON = AddVmToVpcDtoFromJSON;
exports.AddVmToVpcDtoFromJSONTyped = AddVmToVpcDtoFromJSONTyped;
exports.AddVmToVpcDtoToJSON = AddVmToVpcDtoToJSON;
exports.AddVmToVpcDtoToJSONTyped = AddVmToVpcDtoToJSONTyped;
/**
 * Check if a given object implements the AddVmToVpcDto interface.
 */
function instanceOfAddVmToVpcDto(value) {
    if (!('vmId' in value) || value['vmId'] === undefined)
        return false;
    if (!('vpcId' in value) || value['vpcId'] === undefined)
        return false;
    return true;
}
function AddVmToVpcDtoFromJSON(json) {
    return AddVmToVpcDtoFromJSONTyped(json, false);
}
function AddVmToVpcDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'vmId': json['vm_id'],
        'vpcId': json['vpc_id'],
    };
}
function AddVmToVpcDtoToJSON(json) {
    return AddVmToVpcDtoToJSONTyped(json, false);
}
function AddVmToVpcDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'vm_id': value['vmId'],
        'vpc_id': value['vpcId'],
    };
}
