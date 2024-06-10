using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Interfaces
{
    public interface IJobOfferRepository
    {
        bool CreateJobOffer(Joboffer newJobOffer);
    }
}
