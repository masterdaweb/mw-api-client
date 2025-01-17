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
 * @interface DatacenterEntity
 */
export interface DatacenterEntity {
    /**
     * 
     * @type {number}
     * @memberof DatacenterEntity
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof DatacenterEntity
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof DatacenterEntity
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof DatacenterEntity
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof DatacenterEntity
     */
    image: string;
    /**
     * 
     * @type {boolean}
     * @memberof DatacenterEntity
     */
    hidden: boolean;
    /**
     * 
     * @type {string}
     * @memberof DatacenterEntity
     */
    regionName: string;
}

/**
 * Check if a given object implements the DatacenterEntity interface.
 */
export function instanceOfDatacenterEntity(value: object): value is DatacenterEntity {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('image' in value) || value['image'] === undefined) return false;
    if (!('hidden' in value) || value['hidden'] === undefined) return false;
    if (!('regionName' in value) || value['regionName'] === undefined) return false;
    return true;
}

export function DatacenterEntityFromJSON(json: any): DatacenterEntity {
    return DatacenterEntityFromJSONTyped(json, false);
}

export function DatacenterEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatacenterEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'image': json['image'],
        'hidden': json['hidden'],
        'regionName': json['region_name'],
    };
}

  export function DatacenterEntityToJSON(json: any): DatacenterEntity {
      return DatacenterEntityToJSONTyped(json, false);
  }

  export function DatacenterEntityToJSONTyped(value?: DatacenterEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'created_at': ((value['createdAt']).toISOString()),
        'updated_at': ((value['updatedAt']).toISOString()),
        'image': value['image'],
        'hidden': value['hidden'],
        'region_name': value['regionName'],
    };
}

