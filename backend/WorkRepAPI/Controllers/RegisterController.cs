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
        public async Task<ActionResult<bool>>CreateStudent(CreateNewStudentDTO student)
        {
            bool  newStudent =  _registerService.CreateStudent(student);
        
            if (newStudent == true) {
                return Ok(new { message = "ok" });
            }
            return BadRequest();
        }
    }
}
