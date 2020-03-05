
namespace Popcorn.Default {
    export class SupplierForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Supplier';
    }

    export interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
    }

    [,
        ['CompanyName', () => Serenity.StringEditor],
        ['ContactName', () => Serenity.StringEditor],
        ['ContactTitle', () => Serenity.StringEditor],
        ['City', () => Serenity.StringEditor],
        ['Country', () => Serenity.StringEditor],
        ['Phone', () => Serenity.StringEditor],
        ['Fax', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SupplierForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}