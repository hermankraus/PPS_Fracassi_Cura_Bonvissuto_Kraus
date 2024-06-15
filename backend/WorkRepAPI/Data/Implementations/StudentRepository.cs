﻿using Microsoft.EntityFrameworkCore;
using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Data.Implementations
{
    public class StudentRepository: Repository, IStudentRepository
    {
        public StudentRepository(pps_databaseContext context) : base(context) { }
        
        public void SetStudentState(setStudentStateDTO student)
        {
            var studentToUpd = _context.Students.FirstOrDefault(s=> s.Legajo == student.Legajo);

            if (studentToUpd != null)
            {
                studentToUpd.State = student.State;
            }
            _context.SaveChanges();
        }
        public IQueryable<Student> GetStudents()
        {
            return _context.Students;
        }
     
        public Student GetStudentbyLegajo(int legajo)
        {
            return _context.Students.SingleOrDefault(s => s.Legajo == legajo);

        }

        public async Task<IEnumerable<Joboffer>> GetJobOffersByLegajoAsync(int legajo)
        {
            return await _context.Joboffers
                .Where(jo => jo.IdStudents.Any(s => s.Legajo == legajo))
                .ToListAsync();
        }
    }
}
