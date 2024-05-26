using System.Security.Cryptography.X509Certificates;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.StudentsDTOs;
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
    }
}
