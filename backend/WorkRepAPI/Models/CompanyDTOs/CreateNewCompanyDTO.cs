using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.CompanyDTOs
{
    public class CreateNewCompanyDTO
    {
        [Required]
        public string Cuit { get; set; } = null!;

        [Required]
        public string? CompanyName { get; set; } = null!;
        [Required]
        public string? BusinessName { get; set; } = null!;
        [Required]
        public string Address { get; set; } = null!;
        [Required]
        public string ContactEmail { get; set; } = null!;

        [Required]
        [RegularExpression("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$", ErrorMessage = "May Min y 6 caracteres")]
         public string? password { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))] //Hace string el enum
        public State State { get; set; } = State.Pending;
    }
}
