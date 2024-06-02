using Mysqlx;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Models.StudentsDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Services.Implementations
{
    public class CompanyService : ICompanyService
    {

        private readonly ICompanyRepository _companyRepository;

        public CompanyService ( ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        public IEnumerable<ReadAllCompaniesDTO> GetAllCompanies()
        {
            var companies = _companyRepository.GetAllCompanies();

            var companyDto = companies.Select(c => new ReadAllCompaniesDTO
            {
                Cuit = c.Cuit,
                CompanyName = c.CompanyName,
                BusinessName = c.BusinessName,
                ContactEmail = c.ContactEmail,
                State = c.State,
            }).ToList();

            return companyDto;
        }

        public ReadAllCompaniesDTO GetCompanyByCuit(string cuit) {
            
            var company  = new ReadAllCompaniesDTO { Cuit = cuit };
            
            return company;
        }
    }
}
