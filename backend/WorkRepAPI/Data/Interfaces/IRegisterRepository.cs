using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Interfaces
{
    public interface IRegisterRepository
    {
        bool CreateStudent(Student newStudent);
        bool CreateCompany(Company newCompany);
    }
}
