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
     
    }
}
