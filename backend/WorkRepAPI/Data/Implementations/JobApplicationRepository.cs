using Microsoft.EntityFrameworkCore;
using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models.CareerDTOs;
using WorkRepAPI.Models.SkillDTOs;
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

        public async Task ApplyAsync(SkillApplicationDTO skillApplication)
        {
            _context.Database.ExecuteSqlRaw(
           "INSERT INTO offerskills (idJobOffer, idSkills) VALUES ({0}, {1})",
           skillApplication.jobofferId, skillApplication.IdSkills);

            await _context.SaveChangesAsync();
        }
        public async Task<Skill> GetSkillByIdAsync(int IdSkills)
        {
            return await _context.Skills.FindAsync(IdSkills);
        }

        public async Task ApplyAsync(CareerApplicationDTO careerApplication)
        {
            _context.Database.ExecuteSqlRaw(
           "INSERT INTO careerjoboffer (idOffer, idCarreer) VALUES ({0}, {1})",
           careerApplication.jobofferId, careerApplication.IdCareers);

            await _context.SaveChangesAsync();
        }
        public async Task<Career> GetCareerByIdAsync(int IdCareers)
        {
            return await _context.Careers.FindAsync(IdCareers);
        }

        public async Task ApplyAsync(StudentSkillApplicationDTO studentskillApplication)
        {
            _context.Database.ExecuteSqlRaw(
           "INSERT INTO studentsskills (idStudents, idSkills) VALUES ({0}, {1})",
           studentskillApplication.Legajo, studentskillApplication.IdSkills);

            await _context.SaveChangesAsync();
        }
    }
}
