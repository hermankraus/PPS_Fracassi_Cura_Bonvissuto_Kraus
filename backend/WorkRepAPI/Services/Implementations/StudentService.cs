using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Models.StudentsDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Services.Implementations
{
    public class StudentService: IStudentService
    {
        private readonly IStudentRepository _studentRepository;

        public StudentService(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }
        public void SetStudentState(setStudentStateDTO student)
        {
            _studentRepository.SetStudentState(student);   
        }
    }
}
