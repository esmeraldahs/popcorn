
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

        export namespace Fields {
            export declare const Id;
            export declare const OrderData;
            export declare const OrderNumber;
            export declare const CustomerId;
            export declare const TotalAmount;
            export declare const CustomerFirstName;
            export declare const CustomerLastName;
            export declare const CustomerCity;
            export declare const CustomerCountry;
            export declare const CustomerPhone;
        }

        [
            'Id',
            'OrderData',
            'OrderNumber',
            'CustomerId',
            'TotalAmount',
            'CustomerFirstName',
            'CustomerLastName',
            'CustomerCity',
            'CustomerCountry',
            'CustomerPhone'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}