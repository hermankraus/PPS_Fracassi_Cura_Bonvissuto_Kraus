using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.StudentsDTOs;
using WorkRepAPI.Services.Interfaces;
using AutoMapper;

namespace WorkRepAPI.Services.Implementations
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _studentRepository;
        private readonly IMapper _mapper;

        public StudentService(IStudentRepository studentRepository, IMapper mapper)
        {
            _studentRepository = studentRepository;
            _mapper = mapper;
        }

        public void SetStudentState(setStudentStateDTO studentDto)
        {
            var student = _mapper.Map<Student>(studentDto);
            _studentRepository.SetStudentState(student);
        }

        public IEnumerable<GetStudentsDTO> GetStudents()
        {
            var students = _studentRepository.GetStudents();
            var studentDtos = students.Select(s => _mapper.Map<GetStudentsDTO>(s)).ToList();
            return studentDtos;
        }

        public GetStudentsDTO GetStudentbyLegajo(int legajo)
        {
            var student = _studentRepository.GetStudentbyLegajo(legajo);
            if (student == null)
            {
                return null;
            }
            var studentDto = _mapper.Map<GetStudentsDTO>(student);
            return studentDto;
        }
    }
}
