using System.Security.Cryptography.X509Certificates;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Services.Implementations
{
    public class RegisterService : IRegisterService
    {
        private readonly IRegisterRepository _registerRepository;
        private readonly IPasswordHasher _passwordHasher;
        public RegisterService(IRegisterRepository registerRepository, IPasswordHasher passwordHasher = null)
        {

            _registerRepository = registerRepository;
            _passwordHasher = passwordHasher;
        }
        public bool CreateStudent(CreateNewStudentDTO student)
        {
            var passwordHashed = _passwordHasher.Hash(student.password);

            Student studentData = new Student
            {
                Legajo = student.Legajo,
                Name = student.Name,
                LastName = student.Lastname,
                Email = student.email,
                Password = passwordHashed,
                Cuil = student.Cuil,
                Gender = student.Gender,
                DocumentNumber = student.DocumentNumber,
                DocumentType = student.DocumentType,
                State = Enums.State.Pending,
            };

            bool newStudent = _registerRepository.CreateStudent(studentData);
         
            return newStudent;
        }

        public bool CreateCompany(CreateNewCompanyDTO company)
        {
            var passwordHashed = _passwordHasher.Hash(company.password);

            Company companyData = new Company
            {
                Cuit = company.Cuit,
                CompanyName=company.CompanyName,
                BusinessName=company.BusinessName,
                Address=company.Address,
                ContactEmail=company.ContactEmail,
                Password = passwordHashed, 
                State = Enums.State.Pending,
            };

            bool newCompany = _registerRepository.CreateCompany(companyData);

            return newCompany;
        }
    }
}
