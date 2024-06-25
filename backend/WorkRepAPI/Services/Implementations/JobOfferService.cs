using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.JobOfferDTOs;
using WorkRepAPI.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace WorkRepAPI.Services.Implementations
{
    public class JobOfferService : IJobOfferService
    {
        private readonly IJobOfferRepository _jobofferRepository;

        public JobOfferService(IJobOfferRepository jobofferRepository)
        {
            _jobofferRepository = jobofferRepository;
        }

        public bool CreateJobOffer(JobOfferDTO joboffer)
        {
            Joboffer jobofferData = new Joboffer
            {
                ContractType = joboffer.ContractType,
                EmploymentType = joboffer.EmploymentType,
                WorkLocation = joboffer.WorkLocation,
                Description = joboffer.Description,
                Cuitcompany = joboffer.Cuitcompany,
                State = Enums.OfferState.inprogress,
                Finallydate = joboffer.Finallydate,
                WorkPlace = joboffer.WorkPlace,
                MinSubjects = joboffer.MinSubjects,
                EstimatedDate = joboffer.EstimatedDate,
                InternshipDuration = joboffer.InternshipDuration
            };

            bool newJobOffer = _jobofferRepository.CreateJobOffer(jobofferData);

            return newJobOffer;
        }

        public List<JobOfferGetAllDTO> GetAllJobOffers()
        {
            var jobOffers = _jobofferRepository.GetAllJobOffers();
            return jobOffers.Select(joboffer => new JobOfferGetAllDTO
            {
                IdJobOffer = joboffer.IdJobOffer,
                ContractType = joboffer.ContractType,
                EmploymentType = joboffer.EmploymentType,
                WorkLocation = joboffer.WorkLocation,
                Description = joboffer.Description,
                State = joboffer.State,
                Finallydate = joboffer.Finallydate,
                WorkPlace = joboffer.WorkPlace,
                MinSubjects = joboffer.MinSubjects,
                EstimatedDate = joboffer.EstimatedDate,
                InternshipDuration = joboffer.InternshipDuration
            }).ToList();
        }
    }
}
