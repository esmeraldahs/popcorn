
namespace Popcorn.Default {

    @Serenity.Decorators.registerClass()
    export class OrderItemDialog extends Serenity.EntityDialog<OrderItemRow, any> {
        protected getFormKey() { return OrderItemForm.formKey; }
        protected getIdProperty() { return OrderItemRow.idProperty; }
        protected getLocalTextPrefix() { return OrderItemRow.localTextPrefix; }
        protected getService() { return OrderItemService.baseUrl; }
        protected getDeletePermission() { return OrderItemRow.deletePermission; }
        protected getInsertPermission() { return OrderItemRow.insertPermission; }
        protected getUpdatePermission() { return OrderItemRow.updatePermission; }

        protected form = new OrderItemForm(this.idPrefix);

    }
}