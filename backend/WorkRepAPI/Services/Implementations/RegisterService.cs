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

        public RegisterService(IRegisterRepository registerRepository) {

            _registerRepository = registerRepository;
            
        }
        public bool CreateStudent(CreateNewStudentDTO student)
        {
            Student studentData = new Student
            {
                Legajo = student.Legajo,
                Name = student.Name,
                LastName = student.Lastname,
                Email = student.email,
                Password = student.password,
                Cuil = student.Cuil,
                Gender = student.Gender,
                DocumentType = student.DocumentType,
                DocumentNumber = student.DocumentNumber,
                State = student.State,
            };

            bool newStudent = _registerRepository.CreateStudent(studentData);
         
            return newStudent;
        }
    }
}
