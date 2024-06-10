using Microsoft.AspNetCore.Mvc;
using WorkRepAPI.Services.Interfaces;
using WorkRepAPI.Models.CareerDTOs;
using Microsoft.AspNetCore.Authorization;
using WorkRepAPI.Models.SkillDTOs;

namespace WorkRepAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CareerController : ControllerBase
    {
        private readonly ICareerService _careerService;
        private readonly IJobApplicationService _jobApplicationService;

        public CareerController(ICareerService careerService, IJobApplicationService jobApplicationService)
        {
            _careerService = careerService;
            _jobApplicationService = jobApplicationService;
        }

        [HttpPost("create")]
        [Authorize(Roles = "Admin")]

        public ActionResult CreateCareer(CareerDTO career)
        {
            bool newCareer = _careerService.CreateCareer(career);

            if (newCareer)
            {
                return Ok("Carrera Registrada");
            }
            return BadRequest("Error al ingresar la carrera");
        }
        [HttpPost("apply")]
        [Authorize(Roles = "Company")]

        public async Task<IActionResult> Apply([FromBody] CareerApplicationDTO careerApplication)
        {
            try
            {
                await _jobApplicationService.Apply(careerApplication);
                return Ok(new { message = "Has aplicado la carrera al empleo" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
