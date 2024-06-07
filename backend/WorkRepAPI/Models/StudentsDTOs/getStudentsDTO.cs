using System.ComponentModel.DataAnnotations;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.StudentsDTOs
{
    public class GetStudentsDTO
    {
        
        public int Legajo { get; set; }
        public string? Name { get; set; }
        
        public string? Lastname { get; set; }
        
        public string? Email { get; set; }

        public State State { get; set; }
    }
}
