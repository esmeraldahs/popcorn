
namespace Popcorn.Default {
    export interface OrderItemRow {
        Id?: number;
        OrderId?: number;
        ProductId?: number;
        UnitPrice?: number;
        OrderOrderData?: string;
        OrderOrderNumber?: string;
        OrderCustomerId?: number;
        OrderTotalAmount?: number;
        ProductProductName?: string;
        ProductSupplierId?: number;
        ProductUnitPrice?: number;
        ProductPackage?: string;
        ProductIsDiscontinued?: boolean;
    }

    export namespace OrderItemRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.OrderItem';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const OrderId;
            export declare const ProductId;
            export declare const UnitPrice;
            export declare const OrderOrderData;
            export declare const OrderOrderNumber;
            export declare const OrderCustomerId;
            export declare const OrderTotalAmount;
            export declare const ProductProductName;
            export declare const ProductSupplierId;
            export declare const ProductUnitPrice;
            export declare const ProductPackage;
            export declare const ProductIsDiscontinued;
        }

        [
            'Id',
            'OrderId',
            'ProductId',
            'UnitPrice',
            'OrderOrderData',
            'OrderOrderNumber',
            'OrderCustomerId',
            'OrderTotalAmount',
            'ProductProductName',
            'ProductSupplierId',
            'ProductUnitPrice',
            'ProductPackage',
            'ProductIsDiscontinued'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}