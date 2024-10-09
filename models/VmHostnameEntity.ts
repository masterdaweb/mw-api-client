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
import type { HostnameDomainEntity } from './HostnameDomainEntity';
import {
    HostnameDomainEntityFromJSON,
    HostnameDomainEntityFromJSONTyped,
    HostnameDomainEntityToJSON,
    HostnameDomainEntityToJSONTyped,
} from './HostnameDomainEntity';

/**
 * 
 * @export
 * @interface VmHostnameEntity
 */
export interface VmHostnameEntity {
    /**
     * 
     * @type {number}
     * @memberof VmHostnameEntity
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof VmHostnameEntity
     */
    vmId: number;
    /**
     * 
     * @type {number}
     * @memberof VmHostnameEntity
     */
    hostnameDomainId: number;
    /**
     * 
     * @type {string}
     * @memberof VmHostnameEntity
     */
    hostname: string;
    /**
     * 
     * @type {Date}
     * @memberof VmHostnameEntity
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof VmHostnameEntity
     */
    updatedAt: Date;
    /**
     * 
     * @type {HostnameDomainEntity}
     * @memberof VmHostnameEntity
     */
    hostnameDomains: HostnameDomainEntity;
}

/**
 * Check if a given object implements the VmHostnameEntity interface.
 */
export function instanceOfVmHostnameEntity(value: object): value is VmHostnameEntity {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('vmId' in value) || value['vmId'] === undefined) return false;
    if (!('hostnameDomainId' in value) || value['hostnameDomainId'] === undefined) return false;
    if (!('hostname' in value) || value['hostname'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('hostnameDomains' in value) || value['hostnameDomains'] === undefined) return false;
    return true;
}

export function VmHostnameEntityFromJSON(json: any): VmHostnameEntity {
    return VmHostnameEntityFromJSONTyped(json, false);
}

export function VmHostnameEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): VmHostnameEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'vmId': json['vm_id'],
        'hostnameDomainId': json['hostname_domain_id'],
        'hostname': json['hostname'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'hostnameDomains': HostnameDomainEntityFromJSON(json['hostname_domains']),
    };
}

  export function VmHostnameEntityToJSON(json: any): VmHostnameEntity {
      return VmHostnameEntityToJSONTyped(json, false);
  }

  export function VmHostnameEntityToJSONTyped(value?: VmHostnameEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'vm_id': value['vmId'],
        'hostname_domain_id': value['hostnameDomainId'],
        'hostname': value['hostname'],
        'created_at': ((value['createdAt']).toISOString()),
        'updated_at': ((value['updatedAt']).toISOString()),
        'hostname_domains': HostnameDomainEntityToJSON(value['hostnameDomains']),
    };
}
