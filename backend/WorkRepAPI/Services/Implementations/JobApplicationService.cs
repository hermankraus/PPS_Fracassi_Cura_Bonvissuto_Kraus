using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Models.StudentsDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Services.Implementations
{
    
    public class JobApplicationService : IJobApplicationService
    {
        private readonly IJobApplicationRepository _jobApplicationRepository;
        public JobApplicationService(IJobApplicationRepository jobApplicationRepository)
        {
            _jobApplicationRepository = jobApplicationRepository;
        }

        public async Task Apply(StudentApplicationDTO studentApplication)
        {
            var jobOffer = await _jobApplicationRepository.GetJobOfferByIdAsync(studentApplication.jobofferId);
            if (jobOffer == null)
            {
                throw new Exception("Id Oferta laboral incorrecta");
            }

            var student = await _jobApplicationRepository.GetStudentByLegAsync(studentApplication.Legajo);

            if(student == null)
            {
                throw new Exception("No se encontro el estudiante");
            }

            await _jobApplicationRepository.ApplyAsync(studentApplication);
        }
    }
}
