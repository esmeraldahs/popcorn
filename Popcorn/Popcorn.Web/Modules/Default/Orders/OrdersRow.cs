
namespace Popcorn.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Orders]")]
    [DisplayName("Orders"), InstanceName("Orders")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OrdersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Order Data"), NotNull]
        public DateTime? OrderData
        {
            get { return Fields.OrderData[this]; }
            set { Fields.OrderData[this] = value; }
        }

        [DisplayName("Order Number"), NotNull, QuickSearch]
        public String OrderNumber
        {
            get { return Fields.OrderNumber[this]; }
            set { Fields.OrderNumber[this] = value; }
        }

        [DisplayName("Customer"), NotNull, ForeignKey("[dbo].[Customer]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerFirstName")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Total Amount"), Size(12), Scale(2), NotNull]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Customer First Name"), Expression("jCustomer.[FirstName]")]
        public String CustomerFirstName
        {
            get { return Fields.CustomerFirstName[this]; }
            set { Fields.CustomerFirstName[this] = value; }
        }

        [DisplayName("Customer Last Name"), Expression("jCustomer.[LastName]")]
        public String CustomerLastName
        {
            get { return Fields.CustomerLastName[this]; }
            set { Fields.CustomerLastName[this] = value; }
        }

        [DisplayName("Customer City"), Expression("jCustomer.[City]")]
        public String CustomerCity
        {
            get { return Fields.CustomerCity[this]; }
            set { Fields.CustomerCity[this] = value; }
        }

        [DisplayName("Customer Country"), Expression("jCustomer.[Country]")]
        public String CustomerCountry
        {
            get { return Fields.CustomerCountry[this]; }
            set { Fields.CustomerCountry[this] = value; }
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get { return Fields.CustomerPhone[this]; }
            set { Fields.CustomerPhone[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrdersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField OrderData;
            public StringField OrderNumber;
            public Int32Field CustomerId;
            public DecimalField TotalAmount;

            public StringField CustomerFirstName;
            public StringField CustomerLastName;
            public StringField CustomerCity;
            public StringField CustomerCountry;
            public StringField CustomerPhone;
        }
    }
}
