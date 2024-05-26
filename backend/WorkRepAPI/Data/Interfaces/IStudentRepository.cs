using WorkRepAPI.Entities;
using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Data.Interfaces
{
    public interface IStudentRepository
    {
        void SetStudentState(setStudentStateDTO student);

        public IQueryable<Student> GetStudents();

        Student GetStudentById(int id);

        bool UpdateStudentById(int id, updateStudentDTO studentDto);
        bool DeleteStudentById(int id);
    }
}
