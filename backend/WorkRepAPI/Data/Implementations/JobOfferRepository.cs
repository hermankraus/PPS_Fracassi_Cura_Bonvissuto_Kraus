using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Implementations
{
    public class JobOfferRepository : IJobOfferRepository
    {
        private readonly pps_databaseContext _context;

        public JobOfferRepository(pps_databaseContext context)
        {
            _context = context;
        }

        public bool CreateJobOffer(Joboffer jobofferData)
        {
            Joboffer joboffer = _context.Joboffers.FirstOrDefault(j => j.IdJobOffer == jobofferData.IdJobOffer);

            if (joboffer == null)
            {
                _context.Joboffers.Add(jobofferData);
                _context.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public List<Joboffer> GetAllJobOffers()
        {
            return _context.Joboffers.ToList();
        }
    }
}
