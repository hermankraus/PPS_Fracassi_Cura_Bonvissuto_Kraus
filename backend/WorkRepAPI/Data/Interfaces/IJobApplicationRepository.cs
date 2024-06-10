using WorkRepAPI.Entities;
using WorkRepAPI.Models.CareerDTOs;
using WorkRepAPI.Models.SkillDTOs;
using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Data.Interfaces
{
    public interface IJobApplicationRepository
    {
        Task<Joboffer> GetJobOfferByIdAsync(int jobofferId);
        Task<Student> GetStudentByLegAsync(int Legajo);
        Task ApplyAsync(StudentApplicationDTO studentApplication);

        Task <Skill> GetSkillByIdAsync (int IdSkills);
        Task ApplyAsync(SkillApplicationDTO skillApplication);

        Task<Career> GetCareerByIdAsync(int IdCareers);
        Task ApplyAsync(CareerApplicationDTO careerApplication);

        Task ApplyAsync(StudentSkillApplicationDTO studentskillApplication);
    }
}
