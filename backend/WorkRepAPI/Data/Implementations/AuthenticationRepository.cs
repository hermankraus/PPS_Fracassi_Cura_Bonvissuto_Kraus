using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Data.Implementations
{
    public class AuthenticationRepository : Repository, IAuthenticationRepository
    {
        private readonly IPasswordHasher _passwordHasher;
        public AuthenticationRepository(pps_databaseContext context, IPasswordHasher passwordHasher) : base(context) { 
                _passwordHasher = passwordHasher; 
        }

        public Student? ValidateStudent(int legajo, string password)
        {
            var student =  _context.Students.FirstOrDefault(u => u.Legajo == legajo);
            if (student != null && _passwordHasher.Verify(student.Password, password))
            { 
                return student;
            }
            return null;
             

        }
        public Company? ValidateCompany(string email, string password) {

            var company = _context.Companies.FirstOrDefault(u => u.ContactEmail == email);
            if (company != null &&  _passwordHasher.Verify(company.Password, password))
            {
                return company;
            }
            return null;
        }
        public Administrator? ValidateAdmin(int legajo, string password)
        {
            return _context.Administrators.FirstOrDefault(a => a.Legajo == legajo &&  a.Password == password);
        }
    }
}
