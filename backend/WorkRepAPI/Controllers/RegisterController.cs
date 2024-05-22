using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkRepAPI.Models.StudentsDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class RegisterController : Controller
    {
        private readonly IRegisterService _registerService;

        public RegisterController(IRegisterService registerService)
        {
            _registerService = registerService;
        }

        [HttpPost("RegisterStudent")]
        
        public ActionResult CreateStudent(CreateNewStudentDTO student)
        {
            bool  newStudent =   _registerService.CreateStudent(student);
        
            if (newStudent) {
                return Ok("Usuario Registrado" );
            }
            return BadRequest("Error al ingresar el user");
        }
    }
}
