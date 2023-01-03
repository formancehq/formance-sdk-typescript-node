/**
 * Formance Stack API
 * Open, modular foundation for unique payments flows  # Introduction This API is documented in **OpenAPI format**.  # Authentication Formance Stack offers one forms of authentication:   - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. <SecurityDefinitions /> 
 *
 * OpenAPI spec version: v1.0.0-rc.4
 * Contact: support@formance.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebhooksCursor } from '../models/WebhooksCursor';
import { HttpFile } from '../http/http';

export class ConfigsResponse {
    'cursor': WebhooksCursor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "WebhooksCursor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConfigsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
