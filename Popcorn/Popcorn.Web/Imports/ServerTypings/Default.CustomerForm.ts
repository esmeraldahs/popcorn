
namespace Popcorn.Default {
    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Customer';
    }

    export interface CustomerForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
    }

    [,
        ['FirstName', () => Serenity.StringEditor],
        ['LastName', () => Serenity.StringEditor],
        ['City', () => Serenity.StringEditor],
        ['Country', () => Serenity.StringEditor],
        ['Phone', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(CustomerForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}