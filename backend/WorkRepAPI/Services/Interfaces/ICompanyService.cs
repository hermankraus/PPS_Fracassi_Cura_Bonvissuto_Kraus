using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Models.StudentsDTOs;


namespace WorkRepAPI.Services.Interfaces
{
    public interface ICompanyService
    {
        public IEnumerable<ReadAllCompaniesDTO> GetAllCompanies();

        public ReadAllCompaniesDTO GetCompanyByCuit(string cuit);

        void SetCompanyState(UpdCompanyDTO company);

        void CompleteProfile(CompleteCompanyProfileDTO completeProfile);

        Task<IEnumerable<StudentProfileDTO>> Postulations(string cuit);
    }
}
