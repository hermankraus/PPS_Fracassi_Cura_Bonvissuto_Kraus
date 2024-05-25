using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.StudentsDTOs
{
    public class CreateNewStudentDTO
    {
        [Required]
        public int Legajo { get; set; }

        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Lastname { get; set; }
        [Required]
        public string? email { get; set; }

        [Required]
        [RegularExpression("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$", ErrorMessage = "May Min y 6 caracteres")]
        public string? password { get; set; }
        [Required]
        public string DocumentNumber { get; set; }

        [Required]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public DocumentType DocumentType { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        public string Cuil { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))] //Hace string el enum
        public State State { get; set; } = State.Pending;
    }
}
