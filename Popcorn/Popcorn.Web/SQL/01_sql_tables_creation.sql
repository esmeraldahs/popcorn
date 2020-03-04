create table dbo.Customer(
	Id int not null primary key identity(1,1),
	FirstName nvarchar(40) not null,
	LastName nvarchar(40) not null,
	City nvarchar(40) not null,
	Country nvarchar(40) not null,
	Phone nvarchar(20) not null
)


insert into dbo.Customer(FirstName, LastName,City,Country,Phone)
values
	(N'Andi', N'Zaimaj','Durres','Durres','123456789'),
	(N'Marjo', N'Tori','Tirane','Tirane','123456789'),
	(N'Ornela', N'Torra','Tirane','Tirane','123456789'),
	(N'Erjon', N'Zenelaj','Tirane','Tirane','123456789'),
	(N'Fabiano', N'Meco','Tirane','Tirane','123456789')


create table dbo.Supplier (
	Id int not null primary key identity(1,1),
	CompanyName nvarchar(40) not null, 
	ContactName nvarchar(40) not null,
	ContactTitle nvarchar(40) not null,
	City nvarchar(40) not null,
	Country nvarchar(40) not null,
	Phone nvarchar(40) not null,
	Fax nvarchar(40) not null
);

insert into dbo.Supplier(CompanyName, ContactName, ContactTitle, City, Country, Phone, Fax)
values
	(N'A', N'Andi', N'Mr.', N'Durres', N'AL', N'+355', N'031'),
	(N'B', N'Esmeralda', N'Mrs.', N'Tirane', N'AL', N'+355', N'031'),
	(N'C', N'Marjo', N'Mr.', N'Tirane', N'AL', N'+355', N'031'),
	(N'D', N'Fabiano', N'Mr.', N'Tirane', N'AL', N'+355', N'031'),
	(N'E', N'Erjon', N'Mr.', N'Rinas', N'AL', N'+355', N'031')


create table dbo.Product(
	Id int not null primary key identity(1,1),
	ProductName nvarchar (50) not null,
	SupplierId int not null,
	UnitPrice decimal(12,2) not null,
	Package nvarchar(30) not null,
	IsDiscontinued bit DEFAULT 0

	constraint FK_Supplier_Product foreign key (SupplierId)
	references Supplier(Id)
	on delete cascade
	on update cascade
)

create table dbo.Orders (
	Id int not null primary key identity(1,1),
	OrderData datetime not null DEFAULT getutcdate(),
	OrderNumber nvarchar(max) not null,
	CustomerId int not null,
	TotalAmount decimal(12,2) not null

	constraint FK_IndexOrderCustomerId foreign key (CustomerId)
	references Customer (Id)
	on delete cascade
	on update cascade,

)

Create table dbo.OrderItem (
	Id int not null primary key identity(1,1),
	OrderId int not null,
	ProductId int not null,
	UnitPrice int not null

	constraint FK_OrderItem_Order foreign key (OrderId)
	references Orders (Id)
	on delete cascade
	on update cascade,

	constraint FK_OrderItem_Product foreign key (ProductId)
	references Product (Id)
	on delete cascade
	on update cascade
)