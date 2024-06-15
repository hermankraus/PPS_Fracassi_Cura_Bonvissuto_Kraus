using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
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
    }
}
