using WorkRepAPI.Entities;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Services.Interfaces;

using WorkRepAPI.Models.StudentsDTOs;
using WorkRepAPI.Models.CareerDTOs;

namespace WorkRepAPI.Services.Implementations
{
    public class CareerService : ICareerService
    {

        private readonly ICareerRepository _careerRepository;
      
        public CareerService(ICareerRepository careerRepository)
        {

            _careerRepository = careerRepository;
        }
        public bool CreateCareer(CareerDTO career)
        {

            Career careerData = new Career
            {
                IdCareers = career.IdCareers,
                NameCareers = career.NameCareers,
                InstitutionCareers = career.InstitutionCareers,
                Type = career.Type,
                State =Enums.State.Accepted,
            };

            bool newCareer = _careerRepository.CreateCareer(careerData);

            return newCareer;
        }


    }
}
