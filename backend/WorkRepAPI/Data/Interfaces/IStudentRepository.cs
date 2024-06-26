﻿using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Interfaces
{
    public interface IStudentRepository
    {
        void SetStudentState(Student student);
        IQueryable<Student> GetStudents();
        Student GetStudentbyLegajo(int legajo);

        Task<IEnumerable<Joboffer>> GetJobOffersByLegajoAsync(int legajo);

        void CompleteProfile(Student student);
        

    }
}
