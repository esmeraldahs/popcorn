namespace Popcorn.Default {
    export interface OrdersForm {
        OrderData: Serenity.DateEditor;
        OrderNumber: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        TotalAmount: Serenity.DecimalEditor;
    }

    export class OrdersForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Orders';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrdersForm.init)  {
                OrdersForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(OrdersForm, [
                    'OrderData', w0,
                    'OrderNumber', w1,
                    'CustomerId', w2,
                    'TotalAmount', w3
                ]);
            }
        }
    }
}

