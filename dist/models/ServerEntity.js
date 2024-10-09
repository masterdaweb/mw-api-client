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
exports.instanceOfServerEntity = instanceOfServerEntity;
exports.ServerEntityFromJSON = ServerEntityFromJSON;
exports.ServerEntityFromJSONTyped = ServerEntityFromJSONTyped;
exports.ServerEntityToJSON = ServerEntityToJSON;
exports.ServerEntityToJSONTyped = ServerEntityToJSONTyped;
const DatacenterEntity_1 = require("./DatacenterEntity");
/**
 * Check if a given object implements the ServerEntity interface.
 */
function instanceOfServerEntity(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('datacenterId' in value) || value['datacenterId'] === undefined)
        return false;
    if (!('node' in value) || value['node'] === undefined)
        return false;
    if (!('host' in value) || value['host'] === undefined)
        return false;
    if (!('ip' in value) || value['ip'] === undefined)
        return false;
    if (!('clusterId' in value) || value['clusterId'] === undefined)
        return false;
    if (!('publicHost' in value) || value['publicHost'] === undefined)
        return false;
    if (!('publicInterface' in value) || value['publicInterface'] === undefined)
        return false;
    if (!('privateInterface' in value) || value['privateInterface'] === undefined)
        return false;
    if (!('bridgeInterface' in value) || value['bridgeInterface'] === undefined)
        return false;
    if (!('active' in value) || value['active'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    if (!('deletedAt' in value) || value['deletedAt'] === undefined)
        return false;
    if (!('datacenters' in value) || value['datacenters'] === undefined)
        return false;
    return true;
}
function ServerEntityFromJSON(json) {
    return ServerEntityFromJSONTyped(json, false);
}
function ServerEntityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'datacenterId': json['datacenter_id'],
        'node': json['node'],
        'host': json['host'],
        'ip': json['ip'],
        'clusterId': json['cluster_id'],
        'publicHost': json['public_host'],
        'publicInterface': json['public_interface'],
        'privateInterface': json['private_interface'],
        'bridgeInterface': json['bridge_interface'],
        'active': json['active'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'deletedAt': (new Date(json['deleted_at'])),
        'datacenters': (0, DatacenterEntity_1.DatacenterEntityFromJSON)(json['datacenters']),
    };
}
function ServerEntityToJSON(json) {
    return ServerEntityToJSONTyped(json, false);
}
function ServerEntityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'datacenter_id': value['datacenterId'],
        'node': value['node'],
        'host': value['host'],
        'ip': value['ip'],
        'cluster_id': value['clusterId'],
        'public_host': value['publicHost'],
        'public_interface': value['publicInterface'],
        'private_interface': value['privateInterface'],
        'bridge_interface': value['bridgeInterface'],
        'active': value['active'],
        'created_at': ((value['createdAt']).toISOString()),
        'updated_at': ((value['updatedAt']).toISOString()),
        'deleted_at': ((value['deletedAt']).toISOString()),
        'datacenters': (0, DatacenterEntity_1.DatacenterEntityToJSON)(value['datacenters']),
    };
}