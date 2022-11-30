/**
 * Formance Stack API
 * Open, modular foundation for unique payments flows  # Introduction This API is documented in **OpenAPI format**.  # Authentication Formance Stack offers one forms of authentication:   - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. <SecurityDefinitions /> 
 *
 * OpenAPI spec version: v0.2.3
 * Contact: support@formance.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class AccountWithVolumesAndBalances {
    'address': string;
    'type'?: string;
    'metadata'?: any;
    'volumes'?: { [key: string]: { [key: string]: number; }; };
    'balances'?: { [key: string]: number; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "volumes",
            "baseName": "volumes",
            "type": "{ [key: string]: { [key: string]: number; }; }",
            "format": ""
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "{ [key: string]: number; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountWithVolumesAndBalances.attributeTypeMap;
    }

    public constructor() {
    }
}

