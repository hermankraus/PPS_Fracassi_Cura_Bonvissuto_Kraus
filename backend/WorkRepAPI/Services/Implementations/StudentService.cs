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
        private readonly ISubject _notifier;

        public StudentService(IStudentRepository studentRepository, IMapper mapper, ISubject notifier)
        {
            _studentRepository = studentRepository;
            _mapper = mapper;
            _notifier = notifier;
        }

        public void SetStudentState(setStudentStateDTO studentDto)
        {
            var student = _mapper.Map<Student>(studentDto);
            _studentRepository.SetStudentState(student);
            var message = "Estudiante modificado";
            _notifier.Notify(message, studentDto.Legajo);

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

        public async Task<IEnumerable<JobOfferGetAllDTO>> GetJobOffersByLegajoAsync(int legajo)
        {
            var jobOffers = await _studentRepository.GetJobOffersByLegajoAsync(legajo);

            return jobOffers.Select(jo => new JobOfferGetAllDTO
            {
                IdJobOffer = jo.IdJobOffer,
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

        public void CompleteProfile(CompleteProfileDTO completeProfile)
        {
            var student = _mapper.Map<Student>(completeProfile);
            _studentRepository.CompleteProfile(student);
            
        }
    }
}
