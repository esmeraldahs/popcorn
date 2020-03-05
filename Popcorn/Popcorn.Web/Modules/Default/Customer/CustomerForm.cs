
namespace Popcorn.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerForm
    {
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
        public String Phone { get; set; }
    }
}