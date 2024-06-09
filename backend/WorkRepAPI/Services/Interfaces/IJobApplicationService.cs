using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IJobApplicationService
    {
        Task Apply(StudentApplicationDTO studentApplication);
    }
}
