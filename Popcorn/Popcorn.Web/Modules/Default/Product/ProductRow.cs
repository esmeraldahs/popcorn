
namespace Popcorn.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Product]")]
    [DisplayName("Product"), InstanceName("Product")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProductRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Product Name"), Size(50), NotNull, QuickSearch]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Supplier"), NotNull, ForeignKey("[dbo].[Supplier]", "Id"), LeftJoin("jSupplier"), TextualField("SupplierCompanyName")]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Unit Price"), Size(12), Scale(2), NotNull]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Package"), Size(30), NotNull]
        public String Package
        {
            get { return Fields.Package[this]; }
            set { Fields.Package[this] = value; }
        }

        [DisplayName("Is Discontinued")]
        public Boolean? IsDiscontinued
        {
            get { return Fields.IsDiscontinued[this]; }
            set { Fields.IsDiscontinued[this] = value; }
        }

        [DisplayName("Supplier Company Name"), Expression("jSupplier.[CompanyName]")]
        public String SupplierCompanyName
        {
            get { return Fields.SupplierCompanyName[this]; }
            set { Fields.SupplierCompanyName[this] = value; }
        }

        [DisplayName("Supplier Contact Name"), Expression("jSupplier.[ContactName]")]
        public String SupplierContactName
        {
            get { return Fields.SupplierContactName[this]; }
            set { Fields.SupplierContactName[this] = value; }
        }

        [DisplayName("Supplier Contact Title"), Expression("jSupplier.[ContactTitle]")]
        public String SupplierContactTitle
        {
            get { return Fields.SupplierContactTitle[this]; }
            set { Fields.SupplierContactTitle[this] = value; }
        }

        [DisplayName("Supplier City"), Expression("jSupplier.[City]")]
        public String SupplierCity
        {
            get { return Fields.SupplierCity[this]; }
            set { Fields.SupplierCity[this] = value; }
        }

        [DisplayName("Supplier Country"), Expression("jSupplier.[Country]")]
        public String SupplierCountry
        {
            get { return Fields.SupplierCountry[this]; }
            set { Fields.SupplierCountry[this] = value; }
        }

        [DisplayName("Supplier Phone"), Expression("jSupplier.[Phone]")]
        public String SupplierPhone
        {
            get { return Fields.SupplierPhone[this]; }
            set { Fields.SupplierPhone[this] = value; }
        }

        [DisplayName("Supplier Fax"), Expression("jSupplier.[Fax]")]
        public String SupplierFax
        {
            get { return Fields.SupplierFax[this]; }
            set { Fields.SupplierFax[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField ProductName;
            public Int32Field SupplierId;
            public DecimalField UnitPrice;
            public StringField Package;
            public BooleanField IsDiscontinued;

            public StringField SupplierCompanyName;
            public StringField SupplierContactName;
            public StringField SupplierContactTitle;
            public StringField SupplierCity;
            public StringField SupplierCountry;
            public StringField SupplierPhone;
            public StringField SupplierFax;
        }
    }
}
