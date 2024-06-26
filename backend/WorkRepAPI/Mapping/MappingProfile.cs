﻿using AutoMapper;
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
            CreateMap<Student, Student>();
            CreateMap<CompleteProfileDTO, Student>();
            CreateMap<Student, StudentProfileDTO>();

            //Company
            CreateMap<Company, ReadAllCompaniesDTO>();
            CreateMap<UpdCompanyDTO, Company>();
            CreateMap<Company,Company>();
            CreateMap<CompleteCompanyProfileDTO, Company>();

            //OFFERS
            CreateMap<Joboffer, companyOffersbyCuitDTO>();
            CreateMap<CompleteProfileDTO, Joboffer>();
        }
    }
}
