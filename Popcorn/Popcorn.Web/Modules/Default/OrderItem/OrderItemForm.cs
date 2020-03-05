
namespace Popcorn.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.OrderItem")]
    [BasedOnRow(typeof(Entities.OrderItemRow), CheckNames = true)]
    public class OrderItemForm
    {
        public Int32 OrderId { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 UnitPrice { get; set; }
    }
}