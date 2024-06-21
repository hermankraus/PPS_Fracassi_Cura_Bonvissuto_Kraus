using AutoMapper;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Services.Interfaces;
using System.Collections.Generic;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Data.Implementations;
using WorkRepAPI.Models.CompanyDTOs;

namespace WorkRepAPI.Services.Implementations
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository _companyRepository;
        private readonly IMapper _mapper;

        public CompanyService(ICompanyRepository companyRepository, IMapper mapper)
        {
            _companyRepository = companyRepository;
            _mapper = mapper;
        }

        public void CompleteProfile(CompleteCompanyProfileDTO completeProfile)
        {
             var company = _mapper.Map<Company>(completeProfile);
             _companyRepository.CompleteProfile(company);
        }

        public IEnumerable<ReadAllCompaniesDTO> GetAllCompanies()
        {
            var companies = _companyRepository.GetAllCompanies();
            var companyDto = _mapper.Map<List<ReadAllCompaniesDTO>>(companies);
            return companyDto;
        }

        public ReadAllCompaniesDTO GetCompanyByCuit(string cuit)
        {
            var company = _companyRepository.GetCompanyByCuit(cuit);
            var companyDto = _mapper.Map<ReadAllCompaniesDTO>(company);
            return companyDto;
        }

        public void SetCompanyState(UpdCompanyDTO company)
        {
            var companyEntity = _mapper.Map<UpdCompanyDTO>(company);
            _companyRepository.SetCompanyState(companyEntity);
        }

    }
}
