using WorkRepAPI.Entities;
using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Data.Interfaces
{
    public interface IJobApplicationRepository
    {
        Task<Joboffer> GetJobOfferByIdAsync(int jobofferId);
        Task<Student> GetStudentByLegAsync(int Legajo);
        Task ApplyAsync(StudentApplicationDTO studentApplication);
    }
}
