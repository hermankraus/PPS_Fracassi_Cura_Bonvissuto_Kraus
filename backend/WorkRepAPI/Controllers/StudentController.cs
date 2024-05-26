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
        public ActionResult<IEnumerable<getStudentsDTO>> GetStudents()
        {
            var studentDtos = _studentService.GetStudents();
            return Ok(studentDtos);
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public ActionResult<getStudentsDTO> GetStudentById(int id)
        {
            try
            {
                var studentDto = _studentService.GetStudentById(id);
                if (studentDto == null)
                {
                    return NotFound("Estudiante no encontrado");
                }
                return Ok(studentDto);
            }
            catch
            {
                return BadRequest("Error al obtener el estudiante");
            }
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public ActionResult UpdateStudentById(int id, updateStudentDTO student)
        {
            try
            {
                var updated = _studentService.UpdateStudentById(id, student);
                if (!updated)
                {
                    return NotFound("Estudiante no encontrado");
                }
                return Ok("Actualizado con éxito");
            }
            catch
            {
                return BadRequest("Error al actualizar el estudiante");
            }
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public ActionResult DeleteStudentById(int id)
        {
            try
            {
                var deleted = _studentService.DeleteStudentById(id);
                if (!deleted)
                {
                    return NotFound("Estudiante no encontrado");
                }
                return Ok("Eliminado con éxito");
            }
            catch
            {
                return BadRequest("Error al eliminar el estudiante");
            }
        }
    }
}
