using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Interfaces
{
    public interface ICompanyRepository
    {
        public IEnumerable<Company> GetAllCompanies();

        public Company GetCompanyByCuit(string cuit);


    }
}
