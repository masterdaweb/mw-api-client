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
 * @interface ProxmoxDto
 */
export interface ProxmoxDto {
    /**
     *
     * @type {number}
     * @memberof ProxmoxDto
     */
    proxmoxVmId: number;
    /**
     *
     * @type {number}
     * @memberof ProxmoxDto
     */
    vmId: number;
}
/**
 * Check if a given object implements the ProxmoxDto interface.
 */
export declare function instanceOfProxmoxDto(value: object): value is ProxmoxDto;
export declare function ProxmoxDtoFromJSON(json: any): ProxmoxDto;
export declare function ProxmoxDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProxmoxDto;
export declare function ProxmoxDtoToJSON(json: any): ProxmoxDto;
export declare function ProxmoxDtoToJSONTyped(value?: ProxmoxDto | null, ignoreDiscriminator?: boolean): any;
