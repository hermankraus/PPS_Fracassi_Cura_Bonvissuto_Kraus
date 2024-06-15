﻿using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.JobOfferDTOs;
using WorkRepAPI.Models.StudentsDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepAPI.Services.Implementations
{
    public class StudentService: IStudentService
    {
        private readonly IStudentRepository _studentRepository;

        public StudentService(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }
        public void SetStudentState(setStudentStateDTO student)
        {
            _studentRepository.SetStudentState(student);   
        }

        public IEnumerable<GetStudentsDTO> GetStudents()
        {
            var students = _studentRepository.GetStudents();
            var studentDto = students.Select(s => new GetStudentsDTO
            {
                Legajo = s.Legajo,
                Name = s.Name,
                Lastname = s.LastName,
                Email = s.Email,
                State = s.State
            }).ToList();

            return studentDto;
        }

        public GetStudentsDTO GetStudentbyLegajo(int legajo)
        {
            var student = _studentRepository.GetStudentbyLegajo(legajo);

            if (student == null)
            {
                return null;
            }
            var studentDto = new GetStudentsDTO
            {
                Legajo = student.Legajo,
                Name = student.Name,
                Lastname = student.LastName,
                Email = student.Email,
                State = student.State,
            };
            return studentDto;
        }

        public async Task<IEnumerable<JobOfferDTO>> GetJobOffersByLegajoAsync(int legajo)
        {
            var jobOffers = await _studentRepository.GetJobOffersByLegajoAsync(legajo);

            return jobOffers.Select(jo => new JobOfferDTO
            {
                ContractType = jo.ContractType,
                EmploymentType = jo.EmploymentType,
                WorkLocation = jo.WorkLocation,
                Description = jo.Description,
                Cuitcompany = jo.Cuitcompany,
                State = jo.State,
                Finallydate = jo.Finallydate,
                WorkPlace = jo.WorkPlace,
                MinSubjects = jo.MinSubjects,
                EstimatedDate = jo.EstimatedDate,
                InternshipDuration = jo.InternshipDuration
            });
        }



    }
}
