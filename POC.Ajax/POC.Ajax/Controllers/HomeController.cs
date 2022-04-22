using Microsoft.AspNetCore.Mvc;
using POC.Ajax.Models.Customers;
using POC.Ajax.Models.Shared;
using System.Diagnostics;

namespace POC.Ajax.Controllers
{
    public class HomeController : Controller
    {
        private static List<CustomerViewModel> customers = new();

        [HttpGet]
        public ActionResult Index()
        {
            return View(customers.OrderBy(x => x.Id));
        }

        [HttpGet]
        public ActionResult Details(int id)
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create([FromBody] CustomerViewModel[] request)
        {
            foreach(var customer in request)
            {
                customer.Id = customers.Count > 0 ? customers.Max(x => x.Id) + 1 : 1;
                customers.Add(customer);
            }

            return Json(new
            {
                success = true,
                message = "Customer inserted successfully!",
                customers = customers.OrderBy(x => x.Id)
            });
        }

        [HttpGet]
        public ActionResult Edit(int id)
        {
            var customer = customers.Where(x => x.Id == id).FirstOrDefault();
            return Json(customer);
        }

        [HttpPost]
        public ActionResult Edit([FromBody] CustomerViewModel request)
        {
            var customer = customers.Where(x => x.Id == request.Id).FirstOrDefault();
            if(customer != null)
            {
                customers.Remove(customer);
                customer.Name = request.Name;
                customer.Birth = request.Birth;
                customer.Gender = request.Gender;
                customers.Add(customer);
            }

            return Json(new
            {
                success = true,
                message = "Customer edited successfully!",
                customers = customers.OrderBy(x => x.Id)
            });
        }

        [HttpGet]
        public ActionResult Delete(int id)
        {
            return View();
        }

        [HttpPost]
        public ActionResult Delete([FromBody] CustomerViewModel request)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}