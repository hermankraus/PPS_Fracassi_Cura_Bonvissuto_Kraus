using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Intefaces
{
    public interface IRegisterRepository
    {
        bool CreateStudent(Student newStudent);
    }
}
