using Microsoft.EntityFrameworkCore;
using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Implementations
{
    public class AuthenticationRepository : Repository, IAuthenticationRepository
    {
        public AuthenticationRepository(pps_databaseContext context) : base(context) { }

        public Student? ValidateStudent(int legajo, string password)
        {
            return _context.Students.FirstOrDefault(u => u.Legajo == legajo && u.Password == password);

        }
        public Company? ValidateCompany(string email, string password) {
            return _context.Companies.FirstOrDefault(u => u.ContactEmail == email && u.Password == password);

        }
    }
}
