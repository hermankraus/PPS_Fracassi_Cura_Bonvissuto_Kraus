using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Models.CompanyDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IRegisterService
    {
        bool CreateStudent(CreateNewStudentDTO studentDTO);
        bool CreateCompany(CreateNewCompanyDTO companyDTO);
       
    }
}
