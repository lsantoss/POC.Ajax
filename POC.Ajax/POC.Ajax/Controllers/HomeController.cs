using Microsoft.AspNetCore.Mvc;
using POC.Ajax.Models.Customers;
using POC.Ajax.Models.Shared;
using System.Diagnostics;

namespace POC.Ajax.Controllers
{
    public class HomeController : Controller
    {
        private static List<CustomerViewModel> customers = new()
        {
            new CustomerViewModel() { Id = 1, Name = "Lucas", Birth = DateTime.Now, Gender = Enums.EGender.Male }
        };

        public ActionResult Index()
        {
            return View(customers);
        }

        public ActionResult Details(int id)
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create([FromBody] CustomerViewModel[] request)
        {
            foreach(var customer in request)
            {
                customer.Id = customers.Max(x => x.Id) + 1;
                customers.Add(customer);
            }

            return Json(new
            {
                sucesso = true,
                mensagem = "Customer inserted successfully!",
                customers = customers
            });
        }

        public ActionResult Edit(int id)
        {
            return View();
        }

        [HttpPost]
        public ActionResult Edit(int id, IFormCollection collection)
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

        public ActionResult Delete(int id)
        {
            return View();
        }

        [HttpPost]
        public ActionResult Delete(int id, IFormCollection collection)
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