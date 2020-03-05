
namespace Popcorn.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Product")]
    [BasedOnRow(typeof(Entities.ProductRow), CheckNames = true)]
    public class ProductForm
    {
        public String ProductName { get; set; }
        public Int32 SupplierId { get; set; }
        public Decimal UnitPrice { get; set; }
        public String Package { get; set; }
        public Boolean IsDiscontinued { get; set; }
    }
}