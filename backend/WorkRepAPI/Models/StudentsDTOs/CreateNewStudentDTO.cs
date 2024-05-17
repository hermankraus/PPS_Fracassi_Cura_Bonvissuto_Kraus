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
        public string? password { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))] //Hace string el enum
        public State State { get; set; } = State.Pending;
    }
}
