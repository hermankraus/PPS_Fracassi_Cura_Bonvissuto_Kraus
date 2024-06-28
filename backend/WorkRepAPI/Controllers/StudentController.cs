using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class StudentController : Controller
    {
        private readonly IStudentService _studentService;
        private readonly IJobApplicationService _jobApplicationService;
        public StudentController(IStudentService studentService, IJobApplicationService jobApplicationService)
        {
            _studentService = studentService;
            _jobApplicationService = jobApplicationService;
        }


        [HttpPut("UpdStudentState")]
        [Authorize(Roles = "Admin")]
        public ActionResult SetStudentState(setStudentStateDTO student)
        {
            try
            {
                _studentService.SetStudentState(student);
                return Ok("Actualizado con exito");

            }
            catch
            {
                return BadRequest("Error al actualizar");
            }
        }

        [HttpGet("GetStudents")]
        [Authorize(Roles = "Admin")]
        public ActionResult<IEnumerable<GetStudentsDTO>> GetStudents()
        {
            var studentDtos = _studentService.GetStudents();
            return Ok(studentDtos);
        }

        [HttpGet("{legajo}")]
        [Authorize(Roles = "Admin")]
        public ActionResult GetStudentByLegajo(int legajo)
        {
            var student = _studentService.GetStudentbyLegajo(legajo);
            if (student == null)
            {
                return BadRequest("No existe el estudiante");
            }
            return Ok(student);
        }

        [HttpPost("apply")]
        [Authorize(Roles = "Student")]
        public async Task<IActionResult> Apply([FromBody] StudentApplicationDTO studentApplication)
        {
            try
            {
                await _jobApplicationService.Apply(studentApplication);
                return Ok(new { message = "Has aplicado al empleo" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("skill")]
        [Authorize(Roles = "Student")]

        public async Task<IActionResult> Apply([FromBody] StudentSkillApplicationDTO studentskillApplication)
        {
            try
            {
                await _jobApplicationService.Apply(studentskillApplication);
                return Ok(new { message = "Habilidad agregada" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("joboffers/{legajo}")]
        [Authorize(Roles = "Student")]
        public async Task<IActionResult> GetJobOffersByLegajo(int legajo)
        {
            var jobOffers = await _studentService.GetJobOffersByLegajoAsync(legajo);
            if (jobOffers == null || !jobOffers.Any())
            {
                return NotFound();
            }
            return Ok(jobOffers);
        }

        [HttpPut("completeprofile")]
        [Authorize(Roles = "Student")]
        public ActionResult CompleteProfile(CompleteProfileDTO student){

            try{
                    _studentService.CompleteProfile(student);
                    return Ok("Perfil Actualizado con Éxito");
                }
            catch{
                    return BadRequest("No pudimos actualizar tu perfil.");
                }
        } 


    }
}
