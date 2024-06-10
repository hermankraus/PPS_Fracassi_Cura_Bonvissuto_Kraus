using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Implementations
{
    public class SkillRepository : ISkillRepository
    {
        private readonly pps_databaseContext _context;
        public SkillRepository(pps_databaseContext context)
        {
            _context = context;
        }
        public bool CreateSkill(Skill skillData)
        {

            Skill skill = _context.Skills.FirstOrDefault(c => c.IdSkills == skillData.IdSkills);

            if (skill == null)
            {
                _context.Skills.Add(skillData);
                _context.SaveChanges();
                return true;
            }
            else
            {

                return false;
            }


        }
    }
}
