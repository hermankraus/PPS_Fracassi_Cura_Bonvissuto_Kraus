using WorkRepAPI.Entities;
using System.Collections.Generic;

namespace WorkRepAPI.Data.Interfaces
{
    public interface IJobOfferRepository
    {
        bool CreateJobOffer(Joboffer newJobOffer);
        List<Joboffer> GetAllJobOffers();

    }
}
