using System.Collections.Generic;
using System.Linq;
using WebApplication2.Helpers;
using WebApplication2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class CartModel : PageModel
    {
        public List<Item> cart { get; set; }
        public double Total { get; set; }

        private WebApplication2.Data.WebApplication2Context context;

        public CartModel(WebApplication2.Data.WebApplication2Context _context)
        {
            context = _context;
        }

        public void OnGet()
        {
            cart = SessionHelper.GetObjectFromJson<List<Item>>(HttpContext.Session, "cart");

            // Check for empty cart
            if (cart == null || cart.Count == 0)
            {
                ViewData["EmptyCartMessage"] = "Your shopping cart is currently empty. Start adding some awesome products!";
            }
            else
            {
                Total = (double)cart.Sum(i => i.Product.Price * i.Quantity);
            }

            Total = (double)cart.Sum(i => i.Product.Price * i.Quantity);
        }

        public IActionResult OnGetBuyNow(int id)
        {
            var Ord = context.TeaSet.Where(a => a.Id == id).Single();

            cart = SessionHelper.GetObjectFromJson<List<Item>>(HttpContext.Session, "cart");

            if (cart == null)
            {
                cart = new List<Item>();
                cart.Add(new Item
                {
                    Product = Ord,
                    Quantity = 1
                });

                SessionHelper.SetObjectAsJson(HttpContext.Session, "cart", cart);
            }
            else
            {
                int index = Exists(cart, id);
                if (index == -1)
                {
                    cart.Add(new Item
                    {
                        Product = Ord,
                        Quantity = 1
                    });

                }
                else
                {
                    cart[index].Quantity++;
                }

                SessionHelper.SetObjectAsJson(HttpContext.Session, "cart", cart);
            }
            return RedirectToPage("cart");

        }



        public IActionResult OnGetDelete(int id)
        {
            cart = SessionHelper.GetObjectFromJson<List<Item>>(HttpContext.Session, "cart");
            int index = Exists(cart, id);
            cart.RemoveAt(index);
            SessionHelper.SetObjectAsJson(HttpContext.Session, "cart", cart);
            return RedirectToPage("cart");
        }

        public IActionResult OnPostUpdate(int quantities, int id)
        {
            cart = SessionHelper.GetObjectFromJson<List<Item>>(HttpContext.Session, "cart");
            int index = Exists(cart, id);
            cart[index].Quantity = quantities;

            SessionHelper.SetObjectAsJson(HttpContext.Session, "cart", cart);
            return RedirectToPage("cart");
        }

        private int Exists(List<Item> cart, int id)
        {
            for (var i = 0; i < cart.Count; i++)
            {
                if (cart[i].Product.Id == id)
                {
                    return i;
                }

            }
            return -1;
        }

    }
}
