using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WorkRepAPI.Models.CareerDTOs;
using WorkRepAPI.Models.SkillDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillController : ControllerBase
    {
        private readonly ISkillService _skillService;

        public SkillController(ISkillService skillService)
        {
            _skillService = skillService;
        }

        [HttpPost]
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
    }
}
