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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DeleteFloatingIpDto
 */
export interface DeleteFloatingIpDto {
    /**
     * 
     * @type {number}
     * @memberof DeleteFloatingIpDto
     */
    vmId: number;
}

/**
 * Check if a given object implements the DeleteFloatingIpDto interface.
 */
export function instanceOfDeleteFloatingIpDto(value: object): value is DeleteFloatingIpDto {
    if (!('vmId' in value) || value['vmId'] === undefined) return false;
    return true;
}

export function DeleteFloatingIpDtoFromJSON(json: any): DeleteFloatingIpDto {
    return DeleteFloatingIpDtoFromJSONTyped(json, false);
}

export function DeleteFloatingIpDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFloatingIpDto {
    if (json == null) {
        return json;
    }
    return {
        
        'vmId': json['vm_id'],
    };
}

  export function DeleteFloatingIpDtoToJSON(json: any): DeleteFloatingIpDto {
      return DeleteFloatingIpDtoToJSONTyped(json, false);
  }

  export function DeleteFloatingIpDtoToJSONTyped(value?: DeleteFloatingIpDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'vm_id': value['vmId'],
    };
}

