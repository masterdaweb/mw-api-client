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
exports.instanceOfAuthEntity = instanceOfAuthEntity;
exports.AuthEntityFromJSON = AuthEntityFromJSON;
exports.AuthEntityFromJSONTyped = AuthEntityFromJSONTyped;
exports.AuthEntityToJSON = AuthEntityToJSON;
exports.AuthEntityToJSONTyped = AuthEntityToJSONTyped;
/**
 * Check if a given object implements the AuthEntity interface.
 */
function instanceOfAuthEntity(value) {
    if (!('accessToken' in value) || value['accessToken'] === undefined)
        return false;
    return true;
}
function AuthEntityFromJSON(json) {
    return AuthEntityFromJSONTyped(json, false);
}
function AuthEntityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'accessToken': json['accessToken'],
    };
}
function AuthEntityToJSON(json) {
    return AuthEntityToJSONTyped(json, false);
}
function AuthEntityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'accessToken': value['accessToken'],
    };
}
