using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.CareerDTOs;
using WorkRepAPI.Models.SkillDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Services.Implementations
{
    public class SkillService : ISkillService
    {
        private readonly ISkillRepository _skillRepository;

        public SkillService(ISkillRepository skillRepository)
        {

            _skillRepository = skillRepository;
        }
        public bool CreateSkill(SkillDTO skill)
        {

            Skill skillData = new Skill
            {
             
                DescriptionSkills = skill.DescriptionSkills,
                State = Enums.State.Accepted,
            };

            bool newSkill= _skillRepository.CreateSkill(skillData);

            return newSkill;
        }


    }
}
