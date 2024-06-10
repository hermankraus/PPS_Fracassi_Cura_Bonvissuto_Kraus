using WorkRepAPI.Models.CareerDTOs;
using WorkRepAPI.Models.JobOfferDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IJobOfferService
    {
        bool CreateJobOffer(JobOfferDTO jobofferDTO);
    }
}
