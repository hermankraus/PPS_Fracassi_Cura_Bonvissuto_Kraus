using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.CompanyDTOs;

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

        public void SetCompanyState(UpdCompanyDTO company)
        {
            var companyToUpd = _context.Companies.FirstOrDefault(s => s.Cuit == company.Cuit);

            if (companyToUpd != null)
            {
                companyToUpd.State = company.State;
            }
            _context.SaveChanges();
        }
    }
}
