
namespace Popcorn.Default {
    export class OrdersForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Orders';
    }

    export interface OrdersForm {
        OrderData: Serenity.DateEditor;
        OrderNumber: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        TotalAmount: Serenity.DecimalEditor;
    }

    [,
        ['OrderData', () => Serenity.DateEditor],
        ['OrderNumber', () => Serenity.StringEditor],
        ['CustomerId', () => Serenity.IntegerEditor],
        ['TotalAmount', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(OrdersForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}