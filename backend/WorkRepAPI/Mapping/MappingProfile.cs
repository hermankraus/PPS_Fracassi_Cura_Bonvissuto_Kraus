using AutoMapper;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //Student
            CreateMap<Student, GetStudentsDTO>();
            CreateMap<setStudentStateDTO, Student>();

            //Company
            CreateMap<Company, ReadAllCompaniesDTO>();
            CreateMap<UpdCompanyDTO, Company>();
        }
    }
}
