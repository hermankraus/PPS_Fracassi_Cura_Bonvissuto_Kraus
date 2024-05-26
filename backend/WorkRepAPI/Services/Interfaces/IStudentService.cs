using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IStudentService
    {
        void SetStudentState(setStudentStateDTO student);

        public IEnumerable<getStudentsDTO> GetStudents();
        getStudentsDTO GetStudentById(int id);
        bool UpdateStudentById(int id, updateStudentDTO studentDto);
        bool DeleteStudentById(int id);
    }
}
