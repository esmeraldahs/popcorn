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

        export declare const enum Fields {
            Id = "Id",
            OrderId = "OrderId",
            ProductId = "ProductId",
            UnitPrice = "UnitPrice",
            OrderOrderData = "OrderOrderData",
            OrderOrderNumber = "OrderOrderNumber",
            OrderCustomerId = "OrderCustomerId",
            OrderTotalAmount = "OrderTotalAmount",
            ProductProductName = "ProductProductName",
            ProductSupplierId = "ProductSupplierId",
            ProductUnitPrice = "ProductUnitPrice",
            ProductPackage = "ProductPackage",
            ProductIsDiscontinued = "ProductIsDiscontinued"
        }
    }
}

