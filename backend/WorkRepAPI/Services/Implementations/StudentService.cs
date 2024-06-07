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

        public IEnumerable<GetStudentsDTO> GetStudents()
        {
            var students = _studentRepository.GetStudents();
            var studentDto = students.Select(s => new GetStudentsDTO
            {
                Legajo = s.Legajo,
                Name = s.Name,
                Lastname = s.LastName,
                Email = s.Email,
                State = Enums.State.Pending,
            }).ToList();

            return studentDto;
        }

        public GetStudentsDTO GetStudentbyLegajo(int legajo)
        {
            var student = _studentRepository.GetStudentbyLegajo(legajo);

            if (student == null)
            {
                return null;
            }
            var studentDto = new GetStudentsDTO
            {
                Legajo = student.Legajo,
                Name = student.Name,
                Lastname = student.LastName,
                Email = student.Email,
                State = student.State,
            };
            return studentDto;
        }



    }
}
