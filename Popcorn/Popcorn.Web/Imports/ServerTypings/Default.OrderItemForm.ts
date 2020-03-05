namespace Popcorn.Default {
    export interface OrderItemForm {
        OrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        UnitPrice: Serenity.IntegerEditor;
    }

    export class OrderItemForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OrderItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderItemForm.init)  {
                OrderItemForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(OrderItemForm, [
                    'OrderId', w0,
                    'ProductId', w0,
                    'UnitPrice', w0
                ]);
            }
        }
    }
}

