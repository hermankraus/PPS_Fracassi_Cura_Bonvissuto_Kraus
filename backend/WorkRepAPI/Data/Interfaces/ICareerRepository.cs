using WorkRepAPI.Entities;

namespace WorkRepAPI.Data.Interfaces
{
    public interface ICareerRepository
    {
        bool CreateCareer(Career newCareer);
    }
}
