using WorkRepAPI.Entities;
using WorkRepAPI.Models.CompanyDTOs;

namespace WorkRepAPI.Data.Interfaces
{
    public interface ICompanyRepository
    {
        public IEnumerable<Company> GetAllCompanies();

        public Company GetCompanyByCuit(string cuit);

        void SetCompanyState(UpdCompanyDTO company);
        void SetCompanyState(Company companyEntity);

        void CompleteProfile(Company company);
    }
}
