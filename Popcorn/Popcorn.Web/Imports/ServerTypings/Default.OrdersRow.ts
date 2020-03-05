namespace Popcorn.Default {
    export interface OrdersRow {
        Id?: number;
        OrderData?: string;
        OrderNumber?: string;
        CustomerId?: number;
        TotalAmount?: number;
        CustomerFirstName?: string;
        CustomerLastName?: string;
        CustomerCity?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
    }

    export namespace OrdersRow {
        export const idProperty = 'Id';
        export const nameProperty = 'OrderNumber';
        export const localTextPrefix = 'Default.Orders';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            OrderData = "OrderData",
            OrderNumber = "OrderNumber",
            CustomerId = "CustomerId",
            TotalAmount = "TotalAmount",
            CustomerFirstName = "CustomerFirstName",
            CustomerLastName = "CustomerLastName",
            CustomerCity = "CustomerCity",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone"
        }
    }
}

