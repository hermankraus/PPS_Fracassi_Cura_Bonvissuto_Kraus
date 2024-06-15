using WorkRepAPI.Models.JobOfferDTOs;
using System.Collections.Generic;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IJobOfferService
    {
        bool CreateJobOffer(JobOfferDTO jobofferDTO);
        List<JobOfferGetAllDTO> GetAllJobOffers();
    }
}
