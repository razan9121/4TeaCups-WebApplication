using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class WelcomeUserModel : PageModel
    {
        public string? username { get; set; }
        public void OnGet()
        {
            username = HttpContext.Session.GetString("name");
        }

        public IActionResult OnGetLogout()
        {
            HttpContext.Session.Remove("name");
            return RedirectToPage("Index");
        }
    }
}
