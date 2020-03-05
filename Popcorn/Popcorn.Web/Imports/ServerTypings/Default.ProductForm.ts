namespace Popcorn.Default {
    export interface ProductForm {
        ProductName: Serenity.StringEditor;
        SupplierId: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Package: Serenity.StringEditor;
        IsDiscontinued: Serenity.BooleanEditor;
    }

    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Product';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductForm.init)  {
                ProductForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ProductForm, [
                    'ProductName', w0,
                    'SupplierId', w1,
                    'UnitPrice', w2,
                    'Package', w0,
                    'IsDiscontinued', w3
                ]);
            }
        }
    }
}

