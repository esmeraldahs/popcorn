
namespace Popcorn.Default {
    export interface SupplierRow {
        Id?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        City?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
    }

    export namespace SupplierRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Default.Supplier';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const CompanyName;
            export declare const ContactName;
            export declare const ContactTitle;
            export declare const City;
            export declare const Country;
            export declare const Phone;
            export declare const Fax;
        }

        [
            'Id',
            'CompanyName',
            'ContactName',
            'ContactTitle',
            'City',
            'Country',
            'Phone',
            'Fax'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}