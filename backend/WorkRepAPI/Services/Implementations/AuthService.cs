using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Services.Implementations
{
    public class AuthenticationService : IAuthService
    {
        private readonly IAuthenticationRepository _authenticationRepository;

        public AuthenticationService(IAuthenticationRepository authenticationRepository)
        {
            _authenticationRepository = authenticationRepository;
        }

        public object Authenticate(string identifier, string password)
        {
            if (string.IsNullOrEmpty(identifier) || string.IsNullOrEmpty(password))
                return null;

            if (int.TryParse(identifier, out int legajo))
            {
                return ValidateStudent(legajo, password);
            }
            else
            {
                return ValidateCompany(identifier, password);
            }
        }

        public Student ValidateStudent(int legajo, string password)
        {
            if (legajo <= 0 || string.IsNullOrEmpty(password))
                return null;

            return _authenticationRepository.ValidateStudent(legajo, password);
        }

        public Company ValidateCompany(string email, string password)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
                return null;

            return _authenticationRepository.ValidateCompany(email, password);
        }
    }
}
