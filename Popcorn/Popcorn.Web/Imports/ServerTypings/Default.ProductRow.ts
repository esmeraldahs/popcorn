
namespace Popcorn.Default {
    export interface ProductRow {
        Id?: number;
        ProductName?: string;
        SupplierId?: number;
        UnitPrice?: number;
        Package?: string;
        IsDiscontinued?: boolean;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierCity?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Default.Product';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const ProductName;
            export declare const SupplierId;
            export declare const UnitPrice;
            export declare const Package;
            export declare const IsDiscontinued;
            export declare const SupplierCompanyName;
            export declare const SupplierContactName;
            export declare const SupplierContactTitle;
            export declare const SupplierCity;
            export declare const SupplierCountry;
            export declare const SupplierPhone;
            export declare const SupplierFax;
        }

        [
            'Id',
            'ProductName',
            'SupplierId',
            'UnitPrice',
            'Package',
            'IsDiscontinued',
            'SupplierCompanyName',
            'SupplierContactName',
            'SupplierContactTitle',
            'SupplierCity',
            'SupplierCountry',
            'SupplierPhone',
            'SupplierFax'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}