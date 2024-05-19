using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Data.Interfaces
{
    public interface IStudentRepository
    {
        void SetStudentState(setStudentStateDTO student);
    }
}
