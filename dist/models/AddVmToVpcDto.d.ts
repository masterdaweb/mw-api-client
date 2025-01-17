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
 * @interface AddVmToVpcDto
 */
export interface AddVmToVpcDto {
    /**
     * The ID of the VM
     * @type {string}
     * @memberof AddVmToVpcDto
     */
    vmId: string;
    /**
     * The ID of the VPC
     * @type {string}
     * @memberof AddVmToVpcDto
     */
    vpcId: string;
}
/**
 * Check if a given object implements the AddVmToVpcDto interface.
 */
export declare function instanceOfAddVmToVpcDto(value: object): value is AddVmToVpcDto;
export declare function AddVmToVpcDtoFromJSON(json: any): AddVmToVpcDto;
export declare function AddVmToVpcDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddVmToVpcDto;
export declare function AddVmToVpcDtoToJSON(json: any): AddVmToVpcDto;
export declare function AddVmToVpcDtoToJSONTyped(value?: AddVmToVpcDto | null, ignoreDiscriminator?: boolean): any;
