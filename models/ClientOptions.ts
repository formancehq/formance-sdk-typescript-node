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

export class ClientOptions {
    '_public'?: boolean;
    'redirectUris'?: Array<string>;
    'description'?: string;
    'name': string;
    'trusted'?: boolean;
    'postLogoutRedirectUris'?: Array<string>;
    'metadata'?: { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_public",
            "baseName": "public",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "redirectUris",
            "baseName": "redirectUris",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "trusted",
            "baseName": "trusted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "postLogoutRedirectUris",
            "baseName": "postLogoutRedirectUris",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClientOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

