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

        export declare const enum Fields {
            Id = "Id",
            FirstName = "FirstName",
            LastName = "LastName",
            City = "City",
            Country = "Country",
            Phone = "Phone"
        }
    }
}

