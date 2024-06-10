using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.CareerDTOs;
using WorkRepAPI.Models.JobOfferDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Services.Implementations
{
    public class JobOfferService : IJobOfferService
    {
        private readonly IJobOfferRepository _jobofferRepository;
        /*private readonly ISkillRepository _skillRepository;
        private readonly ICareerRepository _careerRepository;
        private readonly ICompanyRepository _companyRepository;*/

        public JobOfferService(IJobOfferRepository jobofferRepository/*, ISkillRepository skillRepository, ICareerRepository careerRepository, ICompanyRepository companyRepository*/)
        {

            _jobofferRepository = jobofferRepository;
           /*_skillRepository = skillRepository;
            _careerRepository = careerRepository;
            _companyRepository = companyRepository;*/
        }
        public bool CreateJobOffer(JobOfferDTO joboffer)
        {

            Joboffer jobofferData = new Joboffer
            {
                IdJobOffer = joboffer.IdJobOffer,
                ContractType= joboffer.ContractType,
                EmploymentType= joboffer.EmploymentType,
                WorkLocation = joboffer.WorkLocation,
                Description = joboffer.Description,
                Cuitcompany = joboffer.Cuitcompany,
                State = Enums.OfferState.inprogress,
                Finallydate = joboffer.Finallydate,
                WorkPlace=joboffer.WorkPlace,
                MinSubjects= joboffer.MinSubjects,
                EstimatedDate=joboffer.EstimatedDate,
                InternshipDuration=joboffer.InternshipDuration
                
                
            };

            bool newJobOffer = _jobofferRepository.CreateJobOffer(jobofferData);

            return newJobOffer;
        }
    }
}
