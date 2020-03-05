
namespace Popcorn.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.OrderItem")]
    [BasedOnRow(typeof(Entities.OrderItemRow), CheckNames = true)]
    public class OrderItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String OrderOrderNumber { get; set; }
        public String ProductProductName { get; set; }
        public Int32 UnitPrice { get; set; }
    }
}