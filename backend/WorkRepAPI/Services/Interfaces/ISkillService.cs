

using WorkRepAPI.Models.SkillDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface ISkillService
    {
        bool CreateSkill(SkillDTO skillDTO);
    }
}
