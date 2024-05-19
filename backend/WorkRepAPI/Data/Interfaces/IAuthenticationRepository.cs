using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Interfaces
{
    public interface IAuthenticationRepository
    {
        Student? ValidateStudent(int legajo, string password);
        Company? ValidateCompany(string email, string password);
    }
}
