using WorkRepAPI.Models.CompanyDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface ICompanyService
    {
        public IEnumerable<ReadAllCompaniesDTO> GetAllCompanies();

        public ReadAllCompaniesDTO GetCompanyByCuit(string cuit);

        void SetCompanyState(UpdCompanyDTO company);
    }
}
