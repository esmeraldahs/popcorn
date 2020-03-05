using Serenity.Navigation;
using MyPages = Popcorn.Default.Pages;

[assembly: NavigationLink(int.MaxValue, "Default/Customer", typeof(MyPages.CustomerController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Order Item", typeof(MyPages.OrderItemController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Orders", typeof(MyPages.OrdersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Product", typeof(MyPages.ProductController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Supplier", typeof(MyPages.SupplierController), icon: null)]