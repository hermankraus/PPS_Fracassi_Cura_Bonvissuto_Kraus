using WorkRepAPI.Entities;
using WorkRepAPI.Models.CompanyDTOs;

namespace WorkRepAPI.Data.Interfaces
{
    public interface ICompanyRepository
    {
        IEnumerable<Company> GetAllCompanies();

        Company GetCompanyByCuit(string cuit);
        void SetCompanyState(UpdCompanyDTO company);
        void SetCompanyState(Company companyEntity);
        void CompleteProfile(Company company);
        IEnumerable<Student> Postulations(string cuit);
        IEnumerable<Joboffer> getPostulationsbyCompany(string cuit);
        Task<IEnumerable<Student>>getPostulationsbyId(int jobofferId);

    }
}
