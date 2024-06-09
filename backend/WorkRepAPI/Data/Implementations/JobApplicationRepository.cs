using Microsoft.EntityFrameworkCore;
using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Data.Implementations
{
    public class JobApplicationRepository : IJobApplicationRepository
    {
        private readonly pps_databaseContext _context;

        public  JobApplicationRepository(pps_databaseContext context)
        {
            _context = context;
        }
        public async Task ApplyAsync(StudentApplicationDTO studentApplication)
        {
            _context.Database.ExecuteSqlRaw(
           "INSERT INTO studentsjoboffers (idJobOffers, idStudents) VALUES ({0}, {1})",
           studentApplication.jobofferId, studentApplication.Legajo);

            await _context.SaveChangesAsync();
        }

        public async Task<Joboffer> GetJobOfferByIdAsync(int jobofferId)
        {
            return await _context.Joboffers.FindAsync(jobofferId);
        }

        public async Task<Student> GetStudentByLegAsync(int Legajo)
        {
            return await _context.Students.FindAsync(Legajo);
        }
    }
}
