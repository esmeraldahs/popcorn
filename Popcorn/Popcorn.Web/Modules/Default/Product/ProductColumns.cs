
namespace Popcorn.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Product")]
    [BasedOnRow(typeof(Entities.ProductRow), CheckNames = true)]
    public class ProductColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String ProductName { get; set; }
        public String SupplierCompanyName { get; set; }
        public Decimal UnitPrice { get; set; }
        public String Package { get; set; }
        public Boolean IsDiscontinued { get; set; }
    }
}