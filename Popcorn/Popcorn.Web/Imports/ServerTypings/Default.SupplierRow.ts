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

        export declare const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            City = "City",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax"
        }
    }
}

