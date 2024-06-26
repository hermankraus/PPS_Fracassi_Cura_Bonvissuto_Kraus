﻿using WorkRepAPI.Models.JobOfferDTOs;
using WorkRepAPI.Models.CompanyDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IStudentService
    {
        void SetStudentState(setStudentStateDTO student);

        public IEnumerable<GetStudentsDTO> GetStudents();

        public GetStudentsDTO GetStudentbyLegajo(int legajo);

        Task<IEnumerable<JobOfferGetAllDTO>> GetJobOffersByLegajoAsync(int legajo);

        void CompleteProfile(CompleteProfileDTO completeProfile);
    }


}
