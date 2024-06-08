using Microsoft.AspNetCore.Mvc;
using WorkRepAPI.Entities;
using WorkRepAPI.Services.Interfaces;
using System.Collections.Generic;
using WorkRepAPI.Enums;
using WorkRepAPI.Models.StudentsDTOs;
using WorkRepAPI.Models.CareerDTOs;
using Microsoft.AspNetCore.Authorization;

namespace WorkRepAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CareerController : ControllerBase
    {
        private readonly ICareerService _careerService;

        public CareerController(ICareerService careerService)
        {
            _careerService = careerService;
        }

        [HttpPost]
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
    }
}
