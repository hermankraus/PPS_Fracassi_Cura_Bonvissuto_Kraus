using WorkRepAPI.Entities;
using System.Collections.Generic;
using WorkRepAPI.Enums;
using WorkRepAPI.Models.CareerDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface ICareerService
    {
        bool CreateCareer(CareerDTO careerDTO);
      
    }
}
