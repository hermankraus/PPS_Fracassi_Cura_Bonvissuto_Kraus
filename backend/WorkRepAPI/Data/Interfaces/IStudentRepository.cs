using WorkRepAPI.Entities;
using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Data.Interfaces
{
    public interface IStudentRepository
    {
        void SetStudentState(setStudentStateDTO student);

        public IQueryable<Student> GetStudents();

        public Student GetStudentbyLegajo(int legajo);

        Task<IEnumerable<Joboffer>> GetJobOffersByLegajoAsync(int legajo);
    }
}
