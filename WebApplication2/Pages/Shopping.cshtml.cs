using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication2.Data;

namespace WebApplication2.Pages
{
    public class ShoppingModel : PageModel
    {
        public string WelcomeUsername { get; set; }

        private WebApplication2Context context;
        public List<TeaSet> allTeaSets;

        public int GetProductColumns()
        {
            // Adjust this logic based on your preference (e.g., return 3 for 3 columns per row)
            return 4;
        }

        public ShoppingModel(WebApplication2Context _context)
        {
            context = _context;
        }

        public void OnGet()
        {
            WelcomeUsername = HttpContext.Session.GetString("username");

            allTeaSets = context.TeaSet.ToList();
        }

        public IActionResult OnGetLogout()
        {

            HttpContext.Session.Remove("username");

            return RedirectToPage("Index");
        }

    }
}
