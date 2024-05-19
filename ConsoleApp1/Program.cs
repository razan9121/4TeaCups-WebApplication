using System;
using System.Linq;
using WebApplication2.Data;
using WebApplication2.Models; // Replace with your project namespace

public class MigratePasswords
{
    static void Main(string[] args)
    {
        using (var context = new WebApplication2Context())
        {
            var users = context.User.ToList();
            foreach (var user in users)
            {
                user.PasswordHash = PasswordHasher.HashPassword(user.password); // Hash existing password
                user.password = null; // Set plain text password to null (optional)
            }
            context.SaveChanges();
        }
    }
}