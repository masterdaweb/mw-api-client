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
import type { DatacenterEntity } from './DatacenterEntity';
/**
 *
 * @export
 * @interface ServerEntity
 */
export interface ServerEntity {
    /**
     *
     * @type {number}
     * @memberof ServerEntity
     */
    id: number;
    /**
     *
     * @type {number}
     * @memberof ServerEntity
     */
    datacenterId: number;
    /**
     *
     * @type {string}
     * @memberof ServerEntity
     */
    node: string;
    /**
     *
     * @type {string}
     * @memberof ServerEntity
     */
    host: string;
    /**
     *
     * @type {string}
     * @memberof ServerEntity
     */
    ip: string;
    /**
     *
     * @type {number}
     * @memberof ServerEntity
     */
    clusterId: number;
    /**
     *
     * @type {boolean}
     * @memberof ServerEntity
     */
    publicHost: boolean;
    /**
     *
     * @type {string}
     * @memberof ServerEntity
     */
    publicInterface: string;
    /**
     *
     * @type {string}
     * @memberof ServerEntity
     */
    privateInterface: string;
    /**
     *
     * @type {string}
     * @memberof ServerEntity
     */
    bridgeInterface: string;
    /**
     *
     * @type {boolean}
     * @memberof ServerEntity
     */
    active: boolean;
    /**
     *
     * @type {Date}
     * @memberof ServerEntity
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof ServerEntity
     */
    updatedAt: Date;
    /**
     *
     * @type {Date}
     * @memberof ServerEntity
     */
    deletedAt: Date;
    /**
     *
     * @type {DatacenterEntity}
     * @memberof ServerEntity
     */
    datacenters: DatacenterEntity;
}
/**
 * Check if a given object implements the ServerEntity interface.
 */
export declare function instanceOfServerEntity(value: object): value is ServerEntity;
export declare function ServerEntityFromJSON(json: any): ServerEntity;
export declare function ServerEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerEntity;
export declare function ServerEntityToJSON(json: any): ServerEntity;
export declare function ServerEntityToJSONTyped(value?: ServerEntity | null, ignoreDiscriminator?: boolean): any;
