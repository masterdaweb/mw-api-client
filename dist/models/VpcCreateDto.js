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
exports.instanceOfVpcCreateDto = instanceOfVpcCreateDto;
exports.VpcCreateDtoFromJSON = VpcCreateDtoFromJSON;
exports.VpcCreateDtoFromJSONTyped = VpcCreateDtoFromJSONTyped;
exports.VpcCreateDtoToJSON = VpcCreateDtoToJSON;
exports.VpcCreateDtoToJSONTyped = VpcCreateDtoToJSONTyped;
/**
 * Check if a given object implements the VpcCreateDto interface.
 */
function instanceOfVpcCreateDto(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('clusterId' in value) || value['clusterId'] === undefined)
        return false;
    return true;
}
function VpcCreateDtoFromJSON(json) {
    return VpcCreateDtoFromJSONTyped(json, false);
}
function VpcCreateDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'dhcpSubnet': json['dhcp_subnet'] == null ? undefined : json['dhcp_subnet'],
        'clusterId': json['cluster_id'],
    };
}
function VpcCreateDtoToJSON(json) {
    return VpcCreateDtoToJSONTyped(json, false);
}
function VpcCreateDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
        'dhcp_subnet': value['dhcpSubnet'],
        'cluster_id': value['clusterId'],
    };
}
