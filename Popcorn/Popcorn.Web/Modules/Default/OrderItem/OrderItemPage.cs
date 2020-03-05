
namespace Popcorn.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/OrderItem"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrderItemRow))]
    public class OrderItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/OrderItem/OrderItemIndex.cshtml");
        }
    }
}