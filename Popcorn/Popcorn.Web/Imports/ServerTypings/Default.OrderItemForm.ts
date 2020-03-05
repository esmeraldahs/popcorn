
namespace Popcorn.Default {
    export class OrderItemForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OrderItem';
    }

    export interface OrderItemForm {
        OrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        UnitPrice: Serenity.IntegerEditor;
    }

    [,
        ['OrderId', () => Serenity.IntegerEditor],
        ['ProductId', () => Serenity.IntegerEditor],
        ['UnitPrice', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(OrderItemForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}