using WorkRepAPI.Models.CareerDTOs;
using WorkRepAPI.Models.SkillDTOs;
using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IJobApplicationService
    {
        Task Apply(StudentApplicationDTO studentApplication);
        Task Apply(SkillApplicationDTO skillApplication);
        Task Apply(CareerApplicationDTO careerApplication);
        Task Apply(StudentSkillApplicationDTO studentSkillApplication);
    }
}
