
using WorkRepAPI.Entities;
using WorkRepAPI.Data.Interfaces;
using System.Linq;
using WorkRepAPI.Context;

namespace WorkRepAPI.Data.Implementations
{
    public class CareerRepository : ICareerRepository
    {
        private readonly pps_databaseContext _context;
        public CareerRepository(pps_databaseContext context)
        {
            _context = context;
        }
        public bool CreateCareer(Career careerData)
        {

            Career career = _context.Careers.FirstOrDefault(c => c.IdCareers == careerData.IdCareers);

            if (career == null)
            {
                _context.Careers.Add(careerData);
                _context.SaveChanges();
                return true;
            }
            else
            {

                return false;
            }


        }
    }
}
