using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Interfaces
{
    public interface ISkillRepository
    {
        bool CreateSkill(Skill newSkill);
    }
}
