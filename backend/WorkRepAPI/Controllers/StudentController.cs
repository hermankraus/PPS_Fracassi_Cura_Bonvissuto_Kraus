using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkRepAPI.Models.StudentsDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class StudentController : Controller
    {
        private readonly IStudentService _studentService;

        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
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
    }
}
