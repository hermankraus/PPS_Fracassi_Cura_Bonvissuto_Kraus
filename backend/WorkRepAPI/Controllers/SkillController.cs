using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WorkRepAPI.Models.CareerDTOs;
using WorkRepAPI.Models.SkillDTOs;
using WorkRepAPI.Models.StudentsDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillController : ControllerBase
    {
        private readonly ISkillService _skillService;
        private readonly IJobApplicationService _jobApplicationService;

        public SkillController(ISkillService skillService, IJobApplicationService jobApplicationService)
        {
            _skillService = skillService;
            _jobApplicationService = jobApplicationService;
        }

        [HttpPost("create")]
        [Authorize(Roles = "Admin")]

        public ActionResult CreateSkill(SkillDTO skill)
        {
            bool newSkill = _skillService.CreateSkill(skill);

            if (newSkill)
            {
                return Ok("Habilidad Registrada");
            }
            return BadRequest("Error al ingresar la habilidad");
        }

        [HttpPost("apply")]
        [Authorize(Roles = "Company")]

        public async Task<IActionResult> Apply([FromBody] SkillApplicationDTO skillApplication)
        {
            try
            {
                await _jobApplicationService.Apply(skillApplication);
                return Ok(new { message = "Has aplicado la habilidad al empleo" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
