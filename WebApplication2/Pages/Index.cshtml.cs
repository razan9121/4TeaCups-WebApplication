using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class IndexModel : PageModel
    {
        private readonly WebApplication2.Data.WebApplication2Context _context;

        public IndexModel(WebApplication2.Data.WebApplication2Context context)
        {
            _context = context;
        }

        [BindProperty]
        public string username { get; set; }
        [BindProperty]
        public string password { get; set; }
        public string Msg { get; set; }
        public void OnGet()
        {

        }
        public IActionResult OnPost()
        {
            var tempUser = _context.User.FirstOrDefault(u => u.username == username && u.password == password);
            if (tempUser != null)
            {
                HttpContext.Session.SetString("username", username);
                return RedirectToPage("Shopping");
            }
            else
            {
                Msg = "Inavalid username or password.";
                return Page();
            }
        }
    }
}
