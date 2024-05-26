using WorkRepAPI.Entities;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IAuthService
    {
        object Authenticate(string identifier, string password);
        Student ValidateStudent(int legajo, string password);
        Company ValidateCompany(string email, string password);
        Administrator ValidateAdmin(int legajo, string password);
    }
}
