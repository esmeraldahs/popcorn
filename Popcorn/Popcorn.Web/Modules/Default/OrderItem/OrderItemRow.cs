
namespace Popcorn.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[OrderItem]")]
    [DisplayName("Order Item"), InstanceName("Order Item")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OrderItemRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Order"), NotNull, ForeignKey("[dbo].[Orders]", "Id"), LeftJoin("jOrder"), TextualField("OrderOrderNumber")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Product"), NotNull, ForeignKey("[dbo].[Product]", "Id"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Unit Price"), NotNull]
        public Int32? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Order Order Data"), Expression("jOrder.[OrderData]")]
        public DateTime? OrderOrderData
        {
            get { return Fields.OrderOrderData[this]; }
            set { Fields.OrderOrderData[this] = value; }
        }

        [DisplayName("Order Order Number"), Expression("jOrder.[OrderNumber]")]
        public String OrderOrderNumber
        {
            get { return Fields.OrderOrderNumber[this]; }
            set { Fields.OrderOrderNumber[this] = value; }
        }

        [DisplayName("Order Customer Id"), Expression("jOrder.[CustomerId]")]
        public Int32? OrderCustomerId
        {
            get { return Fields.OrderCustomerId[this]; }
            set { Fields.OrderCustomerId[this] = value; }
        }

        [DisplayName("Order Total Amount"), Expression("jOrder.[TotalAmount]")]
        public Decimal? OrderTotalAmount
        {
            get { return Fields.OrderTotalAmount[this]; }
            set { Fields.OrderTotalAmount[this] = value; }
        }

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierId]")]
        public Int32? ProductSupplierId
        {
            get { return Fields.ProductSupplierId[this]; }
            set { Fields.ProductSupplierId[this] = value; }
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        [DisplayName("Product Package"), Expression("jProduct.[Package]")]
        public String ProductPackage
        {
            get { return Fields.ProductPackage[this]; }
            set { Fields.ProductPackage[this] = value; }
        }

        [DisplayName("Product Is Discontinued"), Expression("jProduct.[IsDiscontinued]")]
        public Boolean? ProductIsDiscontinued
        {
            get { return Fields.ProductIsDiscontinued[this]; }
            set { Fields.ProductIsDiscontinued[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderItemRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field OrderId;
            public Int32Field ProductId;
            public Int32Field UnitPrice;

            public DateTimeField OrderOrderData;
            public StringField OrderOrderNumber;
            public Int32Field OrderCustomerId;
            public DecimalField OrderTotalAmount;

            public StringField ProductProductName;
            public Int32Field ProductSupplierId;
            public DecimalField ProductUnitPrice;
            public StringField ProductPackage;
            public BooleanField ProductIsDiscontinued;
        }
    }
}
