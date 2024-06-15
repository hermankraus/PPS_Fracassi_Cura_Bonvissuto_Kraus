using Microsoft.AspNetCore.Mvc;
using System;
using WorkRepAPI.Models.JobOfferDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobOfferController : ControllerBase
    {
        private readonly IJobOfferService _jobofferService;

        public JobOfferController(IJobOfferService jobofferService)
        {
            _jobofferService = jobofferService;
        }

        [HttpPost]
        public ActionResult CreateJobOffer(JobOfferDTO joboffer)
        {
            bool newJobOffer = _jobofferService.CreateJobOffer(joboffer);
            if (newJobOffer)
            {
                return Ok("Oferta Registrada");
            }
            return BadRequest("Error al ingresar la oferta");
        }

        [HttpGet]
        public ActionResult GetJobOffer()
        {
            try
            {
                var jobOffers = _jobofferService.GetAllJobOffers();
                return Ok(jobOffers);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

