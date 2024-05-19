using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IStudentService
    {
        void SetStudentState(setStudentStateDTO student);
    }
}
