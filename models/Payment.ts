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

export class Payment {
    'provider': string;
    'reference'?: string;
    'scheme': PaymentSchemeEnum;
    'status': string;
    'type': PaymentTypeEnum;
    'id': string;
    'amount': number;
    'asset': string;
    'date': Date;
    'raw'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "PaymentSchemeEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "asset",
            "baseName": "asset",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "raw",
            "baseName": "raw",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Payment.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PaymentSchemeEnum = "visa" | "mastercard" | "apple pay" | "google pay" | "sepa debit" | "sepa credit" | "sepa" | "a2a" | "ach debit" | "ach" | "rtp" | "other" ;
export type PaymentTypeEnum = "pay-in" | "payout" | "other" ;

