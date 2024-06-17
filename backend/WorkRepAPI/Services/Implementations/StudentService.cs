using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.JobOfferDTOs;
using WorkRepAPI.Models.CompanyDTOs;
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

        public async Task<IEnumerable<JobOfferDTO>> GetJobOffersByLegajoAsync(int legajo)
        {
            var jobOffers = await _studentRepository.GetJobOffersByLegajoAsync(legajo);

            return jobOffers.Select(jo => new JobOfferDTO
            {
                ContractType = jo.ContractType,
                EmploymentType = jo.EmploymentType,
                WorkLocation = jo.WorkLocation,
                Description = jo.Description,
                Cuitcompany = jo.Cuitcompany,
                State = jo.State,
                Finallydate = jo.Finallydate,
                WorkPlace = jo.WorkPlace,
                MinSubjects = jo.MinSubjects,
                EstimatedDate = jo.EstimatedDate,
                InternshipDuration = jo.InternshipDuration
            });
        }

    }
}
