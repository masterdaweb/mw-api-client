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
/**
 *
 * @export
 * @interface Ipv6Entity
 */
export interface Ipv6Entity {
    /**
     *
     * @type {number}
     * @memberof Ipv6Entity
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof Ipv6Entity
     */
    ipv6Address: string;
    /**
     *
     * @type {number}
     * @memberof Ipv6Entity
     */
    ipv6SubnetId: number;
    /**
     *
     * @type {Date}
     * @memberof Ipv6Entity
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof Ipv6Entity
     */
    updatedAt: Date;
    /**
     *
     * @type {Date}
     * @memberof Ipv6Entity
     */
    deletedAt: Date;
}
/**
 * Check if a given object implements the Ipv6Entity interface.
 */
export declare function instanceOfIpv6Entity(value: object): value is Ipv6Entity;
export declare function Ipv6EntityFromJSON(json: any): Ipv6Entity;
export declare function Ipv6EntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ipv6Entity;
export declare function Ipv6EntityToJSON(json: any): Ipv6Entity;
export declare function Ipv6EntityToJSONTyped(value?: Ipv6Entity | null, ignoreDiscriminator?: boolean): any;