
namespace Popcorn.Default {
    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Product';
    }

    export interface ProductForm {
        ProductName: Serenity.StringEditor;
        SupplierId: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Package: Serenity.StringEditor;
        IsDiscontinued: Serenity.BooleanEditor;
    }

    [,
        ['ProductName', () => Serenity.StringEditor],
        ['SupplierId', () => Serenity.IntegerEditor],
        ['UnitPrice', () => Serenity.DecimalEditor],
        ['Package', () => Serenity.StringEditor],
        ['IsDiscontinued', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(ProductForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}