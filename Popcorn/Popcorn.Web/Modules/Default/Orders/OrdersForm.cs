
namespace Popcorn.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Orders")]
    [BasedOnRow(typeof(Entities.OrdersRow), CheckNames = true)]
    public class OrdersForm
    {
        public DateTime OrderData { get; set; }
        public String OrderNumber { get; set; }
        public Int32 CustomerId { get; set; }
        public Decimal TotalAmount { get; set; }
    }
}