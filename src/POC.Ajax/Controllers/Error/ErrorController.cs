using Microsoft.AspNetCore.Mvc;
using POC.Ajax.Models.Error;
using System.Diagnostics;

namespace POC.Ajax.Controllers.Error;

public class ErrorController : Controller
{
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error() => View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
}