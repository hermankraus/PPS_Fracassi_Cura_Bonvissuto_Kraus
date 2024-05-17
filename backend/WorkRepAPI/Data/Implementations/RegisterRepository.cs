﻿
using WorkRepAPI.Data.Intefaces;
using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Implementations
{
    public class RegisterRepository: IRegisterRepository
    {
        private readonly pps_databaseContext _context;
        public RegisterRepository(pps_databaseContext context) {
            _context = context;
        }

        public bool CreateStudent(Student studentData) {

            Student student = _context.Students.FirstOrDefault(s => s.Legajo == studentData.Legajo);

            if (student == null) { 
                _context.Students.Add(studentData);
                _context.SaveChanges();
                return true;
            }
            else
            {
                
                return false;
            }

            
        }
    }
}
