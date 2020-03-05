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

        export declare const enum Fields {
            Id = "Id",
            ProductName = "ProductName",
            SupplierId = "SupplierId",
            UnitPrice = "UnitPrice",
            Package = "Package",
            IsDiscontinued = "IsDiscontinued",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierCity = "SupplierCity",
            SupplierCountry = "SupplierCountry",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax"
        }
    }
}

