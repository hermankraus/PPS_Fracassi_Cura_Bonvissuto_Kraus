using WorkRepAPI.Models.JobOfferDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IJobOfferService
    {
        bool CreateJobOffer(JobOfferDTO jobofferDTO);
        List<JobOfferGetAllDTO> GetAllJobOffers();
    }
}
