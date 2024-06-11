using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.CareerDTOs
{
    public class CareerDTO
    {

        [Required]
        public string NameCareers { get; set; } 
        [Required]
        public string InstitutionCareers { get; set; }
        [Required]

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public CareerType Type { get; set; }

        [Required]

        [JsonConverter(typeof(JsonStringEnumConverter))] 
        public State State { get; set; } 
    }
}
