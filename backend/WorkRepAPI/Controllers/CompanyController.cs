using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : Controller
    {
        private readonly ICompanyService _companyService;
        private readonly IMapper _mapper;

        public CompanyController(ICompanyService companyService, IMapper mapper)
        {
            _companyService = companyService;
            _mapper = mapper;
        }

        [HttpGet("companies")]
        //[Authorize(Roles = "Admin")]
        public ActionResult<ICollection<ReadAllCompaniesDTO>> GetCompanies()
        {
            try
            {
                var companies = _companyService.GetAllCompanies();
                return Ok(companies);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("updstate")]
        //[Authorize(Roles = "Admin")]
        public ActionResult SetCompanyState(UpdCompanyDTO company)
        {
            try
            {
                _companyService.SetCompanyState(company);
                return Ok("actualizado con exito");
            }
            catch
            {
                return BadRequest("No se pudo actualizar la compañia");
            }
        }

        [HttpPut("completeprofile")]

        public ActionResult CompleteProfile(CompleteCompanyProfileDTO company)
        {

            try
            {
                _companyService.CompleteProfile(company);
                return Ok("Perfil Actualizado con Éxito");
            }
            catch
            {
                return BadRequest("No pudimos actualizar tu perfil.");
            }
        }

        [HttpGet("postulations")]

        public ActionResult Postulations(string cuit)
        {
            var students = _companyService.Postulations(cuit);
            return Ok(students);
        }

        [HttpGet("getCompany")]

        public ReadAllCompaniesDTO GetCompanyByCuit(string Cuit)
        {
            var company = _companyService.GetCompanyByCuit(Cuit);

            return (company);

        }

        [HttpGet("postulationsbycuit")]
        public ActionResult GetPostulationsbyCuit(string cuit)
        {
            var offers = _companyService.getPostulationsbyCompany(cuit);

            return Ok(offers);
        }
        [HttpGet("postulatedstudents/{idJobOffer}")]
        public async Task<IActionResult>GetPostulatedStudents(int idJobOffer)
        {
            var students = await _companyService.getPostulatedStudents(idJobOffer);
           
            return Ok(students);
        }
    }
}
