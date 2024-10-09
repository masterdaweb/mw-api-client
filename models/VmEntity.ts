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
import type { ServerEntity } from './ServerEntity';
import {
    ServerEntityFromJSON,
    ServerEntityFromJSONTyped,
    ServerEntityToJSON,
    ServerEntityToJSONTyped,
} from './ServerEntity';
import type { VmHostnameEntity } from './VmHostnameEntity';
import {
    VmHostnameEntityFromJSON,
    VmHostnameEntityFromJSONTyped,
    VmHostnameEntityToJSON,
    VmHostnameEntityToJSONTyped,
} from './VmHostnameEntity';
import type { VmNicEntity } from './VmNicEntity';
import {
    VmNicEntityFromJSON,
    VmNicEntityFromJSONTyped,
    VmNicEntityToJSON,
    VmNicEntityToJSONTyped,
} from './VmNicEntity';

/**
 * 
 * @export
 * @interface VmEntity
 */
export interface VmEntity {
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    regionId: number;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    hostingId: number;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    proxmoxVmId: number;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    serverId: number;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    templateTypeId: number;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    templateId: number;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    vcores: number;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    ram: number;
    /**
     * 
     * @type {boolean}
     * @memberof VmEntity
     */
    running: boolean;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    port: number;
    /**
     * 
     * @type {Date}
     * @memberof VmEntity
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof VmEntity
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof VmEntity
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    projectId: number;
    /**
     * 
     * @type {number}
     * @memberof VmEntity
     */
    accountId: number;
    /**
     * 
     * @type {ServerEntity}
     * @memberof VmEntity
     */
    servers: ServerEntity;
    /**
     * 
     * @type {VmHostnameEntity}
     * @memberof VmEntity
     */
    vmHostnames: VmHostnameEntity;
    /**
     * 
     * @type {Array<VmNicEntity>}
     * @memberof VmEntity
     */
    vmNics: Array<VmNicEntity>;
}

/**
 * Check if a given object implements the VmEntity interface.
 */
export function instanceOfVmEntity(value: object): value is VmEntity {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('regionId' in value) || value['regionId'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('hostingId' in value) || value['hostingId'] === undefined) return false;
    if (!('proxmoxVmId' in value) || value['proxmoxVmId'] === undefined) return false;
    if (!('serverId' in value) || value['serverId'] === undefined) return false;
    if (!('templateTypeId' in value) || value['templateTypeId'] === undefined) return false;
    if (!('templateId' in value) || value['templateId'] === undefined) return false;
    if (!('vcores' in value) || value['vcores'] === undefined) return false;
    if (!('ram' in value) || value['ram'] === undefined) return false;
    if (!('running' in value) || value['running'] === undefined) return false;
    if (!('port' in value) || value['port'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('projectId' in value) || value['projectId'] === undefined) return false;
    if (!('accountId' in value) || value['accountId'] === undefined) return false;
    if (!('servers' in value) || value['servers'] === undefined) return false;
    if (!('vmHostnames' in value) || value['vmHostnames'] === undefined) return false;
    if (!('vmNics' in value) || value['vmNics'] === undefined) return false;
    return true;
}

export function VmEntityFromJSON(json: any): VmEntity {
    return VmEntityFromJSONTyped(json, false);
}

export function VmEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): VmEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'regionId': json['region_id'],
        'userId': json['user_id'],
        'hostingId': json['hosting_id'],
        'proxmoxVmId': json['proxmox_vm_id'],
        'serverId': json['server_id'],
        'templateTypeId': json['template_type_id'],
        'templateId': json['template_id'],
        'vcores': json['vcores'],
        'ram': json['ram'],
        'running': json['running'],
        'port': json['port'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'name': json['name'],
        'projectId': json['project_id'],
        'accountId': json['account_id'],
        'servers': ServerEntityFromJSON(json['servers']),
        'vmHostnames': VmHostnameEntityFromJSON(json['vm_hostnames']),
        'vmNics': ((json['vm_nics'] as Array<any>).map(VmNicEntityFromJSON)),
    };
}

  export function VmEntityToJSON(json: any): VmEntity {
      return VmEntityToJSONTyped(json, false);
  }

  export function VmEntityToJSONTyped(value?: VmEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'region_id': value['regionId'],
        'user_id': value['userId'],
        'hosting_id': value['hostingId'],
        'proxmox_vm_id': value['proxmoxVmId'],
        'server_id': value['serverId'],
        'template_type_id': value['templateTypeId'],
        'template_id': value['templateId'],
        'vcores': value['vcores'],
        'ram': value['ram'],
        'running': value['running'],
        'port': value['port'],
        'created_at': ((value['createdAt']).toISOString()),
        'updated_at': ((value['updatedAt']).toISOString()),
        'name': value['name'],
        'project_id': value['projectId'],
        'account_id': value['accountId'],
        'servers': ServerEntityToJSON(value['servers']),
        'vm_hostnames': VmHostnameEntityToJSON(value['vmHostnames']),
        'vm_nics': ((value['vmNics'] as Array<any>).map(VmNicEntityToJSON)),
    };
}
