﻿
namespace Popcorn.Default {
    export interface CustomerRow {
        Id?: number;
        FirstName?: string;
        LastName?: string;
        City?: string;
        Country?: string;
        Phone?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FirstName';
        export const localTextPrefix = 'Default.Customer';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const FirstName;
            export declare const LastName;
            export declare const City;
            export declare const Country;
            export declare const Phone;
        }

        [
            'Id',
            'FirstName',
            'LastName',
            'City',
            'Country',
            'Phone'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}