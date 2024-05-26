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

        public Student GetStudentById(int Legajo)
        {
            return _context.Students.FirstOrDefault(s => s.Legajo == Legajo);
        }

        public bool UpdateStudentById(int Legajo, updateStudentDTO studentDto)
            // hay que hacer el dto correcto porq no me lo lee el swagger
        {
            var studentToUpdate = _context.Students.FirstOrDefault(s => s.Legajo == Legajo);

            if (studentToUpdate == null)
            {
                return false;
            }

            studentToUpdate.Name = studentDto.Name;
            studentToUpdate.Email = studentDto.Email;

            _context.SaveChanges();
            return true;
        }

        public bool DeleteStudentById(int Legajo)
        {
            var studentToDelete = _context.Students.FirstOrDefault(s => s.Legajo == Legajo);

            if (studentToDelete == null)
            {
                return false;
            }

            _context.Students.Remove(studentToDelete);
            _context.SaveChanges();
            return true;
        }

        
    }
}