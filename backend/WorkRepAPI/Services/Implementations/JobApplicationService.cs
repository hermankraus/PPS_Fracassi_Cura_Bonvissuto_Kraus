using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Models.CareerDTOs;
using WorkRepAPI.Models.SkillDTOs;
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

        public async Task Apply(SkillApplicationDTO skillApplication)
        {
            var jobOffer = await _jobApplicationRepository.GetJobOfferByIdAsync(skillApplication.jobofferId);
            if (jobOffer == null)
            {
                throw new Exception("Id Oferta laboral incorrecta");
            }

            var skill = await _jobApplicationRepository.GetSkillByIdAsync(skillApplication.IdSkills);

            if (skill == null)
            {
                throw new Exception("No se encontro la habilidad");
            }

            await _jobApplicationRepository.ApplyAsync(skillApplication);
        }
        public async Task Apply(CareerApplicationDTO careerApplication)
        {
            var jobOffer = await _jobApplicationRepository.GetCareerByIdAsync(careerApplication.jobofferId);
            if (jobOffer == null)
            {
                throw new Exception("Id Oferta laboral incorrecta");
            }

            var career = await _jobApplicationRepository.GetCareerByIdAsync(careerApplication.IdCareers);

            if (career == null)
            {
                throw new Exception("No se encontro la carrera");
            }

            await _jobApplicationRepository.ApplyAsync(careerApplication);
        }

        public async Task Apply(StudentSkillApplicationDTO studentskillApplication)
        {
            var student = await _jobApplicationRepository.GetStudentByLegAsync(studentskillApplication.Legajo);
            if (student == null)
            {
                throw new Exception("Legajo incorrecto");
            }

            var skill = await _jobApplicationRepository.GetSkillByIdAsync(studentskillApplication.IdSkills);

            if (skill == null)
            {
                throw new Exception("No se encontro la habilidad");
            }

            await _jobApplicationRepository.ApplyAsync(studentskillApplication);
        }
    }
}
