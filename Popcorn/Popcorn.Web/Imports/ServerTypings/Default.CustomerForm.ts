namespace Popcorn.Default {
    export interface CustomerForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CustomerForm, [
                    'FirstName', w0,
                    'LastName', w0,
                    'City', w0,
                    'Country', w0,
                    'Phone', w0
                ]);
            }
        }
    }
}

