using System.Collections.Generic;
using System.Linq;
using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.CompanyDTOs;

namespace WorkRepAPI.Data.Implementations
{
    public class CompanyRepository : Repository, ICompanyRepository
    {
        private readonly pps_databaseContext _context;

        public CompanyRepository(pps_databaseContext context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<Company> GetAllCompanies()
        {
            return _context.Companies.ToList();
        }

        public Company GetCompanyByCuit(string cuit)
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

        public void SetCompanyState(Company companyEntity)
        {
            _context.Companies.Update(companyEntity);
            _context.SaveChanges();
        }

    }
}
