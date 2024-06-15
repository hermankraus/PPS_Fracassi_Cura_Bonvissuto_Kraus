using AutoMapper;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Student, GetStudentsDTO>();
            CreateMap<setStudentStateDTO, Student>();
        }
    }
}
