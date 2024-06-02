using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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

        public CompanyController(ICompanyService companyService)
        {
            _companyService = companyService;
        }


        [HttpGet("companies")]
        [Authorize(Roles = "Admin")]
        public ActionResult<ICollection<ReadAllCompaniesDTO>> GetCompanies()
        {
            try
            {
                var companies = _companyService.GetAllCompanies();
                return Ok(companies);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
    }
}
