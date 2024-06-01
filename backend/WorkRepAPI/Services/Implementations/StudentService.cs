using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
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

        public IEnumerable<getStudentsDTO> GetStudents()
        {
            var students = _studentRepository.GetStudents();
            var studentDto = students.Select(s => new getStudentsDTO
            {
                Legajo = s.Legajo,
                Name = s.Name,
                Lastname = s.LastName,
                email = s.Email,
                State = Enums.State.Pending,
            }).ToList();

            return studentDto;
        }
           


            
    }
}
