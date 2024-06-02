using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Implementations
{
    public class CompanyRepository : Repository, ICompanyRepository
    {
        public CompanyRepository(pps_databaseContext context) : base(context) { }

        public IEnumerable<Company> GetAllCompanies() {
            return _context.Companies.ToList();
        }

        public Company? GetCompanyByCuit(string cuit)
        {
            return _context.Companies.FirstOrDefault(c => c.Cuit == cuit);
        }
    }
}
