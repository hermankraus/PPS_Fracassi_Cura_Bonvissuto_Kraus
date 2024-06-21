using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Mysqlx;
using WorkRepAPI.Context;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Implementations
{
    public class StudentRepository : Repository, IStudentRepository
    {
        private readonly IMapper _mapper;
        
        public StudentRepository(pps_databaseContext context, IMapper mapper) : base(context) 
        {
                _mapper = mapper;
         }

        public void SetStudentState(Student student)
        {
            var studentToUpd = _context.Students.FirstOrDefault(s => s.Legajo == student.Legajo);
            if (studentToUpd != null)
            {
                studentToUpd.State = student.State;
                _context.SaveChanges();
            }
        }

        public IQueryable<Student> GetStudents()
        {
            return _context.Students;
        }

        public Student GetStudentbyLegajo(int legajo)
        {
            return _context.Students.SingleOrDefault(s => s.Legajo == legajo);
        }

        public async Task<IEnumerable<Joboffer>> GetJobOffersByLegajoAsync(int legajo)
        {
            return await _context.Joboffers
                .Where(jo => jo.IdStudents.Any(s => s.Legajo == legajo))
                .ToListAsync();
        }

        public void CompleteProfile(Student student)
        {
           var studentToUpd = _context.Students.FirstOrDefault(s => s.Legajo == student.Legajo);
           if (studentToUpd != null)
           {
                
                studentToUpd.PhoneNumber = student.PhoneNumber;
                studentToUpd.CellPhoneNumber = student.CellPhoneNumber;
                studentToUpd.Address = student.Address;
                studentToUpd.AddressNumber = student.AddressNumber;
                studentToUpd.Floor = student.Floor;
                studentToUpd.Flat = student.Flat;
                studentToUpd.Country = student.Country;
                studentToUpd.Province = student.Province;
                studentToUpd.City = student.City;
                studentToUpd.DateOfBirth = student.DateOfBirth;
                studentToUpd.MaritalStatus = student.MaritalStatus;
                studentToUpd.Gender = student.Gender;
                studentToUpd.Career = student.Career;
                studentToUpd.ApprovedSubjects = student.ApprovedSubjects;
                studentToUpd.AverageWithFails = student.AverageWithFails;
                studentToUpd.AverageWithoutFails = student.AverageWithoutFails;
                studentToUpd.YearOfStudy = student.YearOfStudy;
                studentToUpd.Turn = student.Turn;
                studentToUpd.CurriculumPlan = student.CurriculumPlan;
                studentToUpd.YearOfEntry = student.YearOfEntry;
                studentToUpd.Biography = student.Biography;
                studentToUpd.SecondaryTitle = student.SecondaryTitle;
                studentToUpd.GithubUrl = student.GithubUrl;
                studentToUpd.LinkedUrl = student.LinkedUrl;
            
            
           
            _context.SaveChanges();
           }
          

        }
    }
}
