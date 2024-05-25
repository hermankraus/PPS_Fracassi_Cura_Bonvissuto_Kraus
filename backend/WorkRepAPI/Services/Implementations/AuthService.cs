using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Services.Implementations
{
    public class AuthenticationService : IAuthService
    {
        private readonly IAuthenticationRepository _authenticationRepository;
        private readonly IPasswordHasher _passwordHasher;
        public AuthenticationService(IAuthenticationRepository authenticationRepository, IPasswordHasher passwordHasher)
        {
            _authenticationRepository = authenticationRepository;
            _passwordHasher = passwordHasher;
        }

        public object Authenticate(string identifier, string password)
        {
            if (string.IsNullOrEmpty(identifier) || string.IsNullOrEmpty(password))
                return null;
            if (int.TryParse(identifier, out int legajo))
            {
                var student = ValidateStudent(legajo, password);
                if (student != null)
                {
                    return student;
                }
                var admin = ValidateAdmin(legajo, password);
                if (admin != null)
                {
                    return admin;
                }

                return null;
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

        public Administrator ValidateAdmin(int legajo, string password)
        {
            if (legajo < 0 || string.IsNullOrEmpty(password))
                return null;
            return _authenticationRepository.ValidateAdmin(legajo, password);
        }
    }
}
