
namespace Popcorn.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Supplier"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SupplierRow))]
    public class SupplierController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Supplier/SupplierIndex.cshtml");
        }
    }
}