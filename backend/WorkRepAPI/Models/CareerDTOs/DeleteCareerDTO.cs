using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.CareerDTOs
{
    public class DeleteCareerDTO
    {
        [Required]
        public int IdCareers { get; set; }
        
        [JsonConverter(typeof(JsonStringEnumConverter))] //Hace string el enum
        public State State { get; set; } = State.Rejected;
    }
}
