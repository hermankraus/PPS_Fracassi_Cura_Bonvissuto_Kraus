using System.ComponentModel.DataAnnotations;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.StudentsDTOs
{
    public class getStudentsDTO
    {
        
        public int Legajo { get; set; }
        public string? Name { get; set; }
        
        public string? Lastname { get; set; }
        
        public string? email { get; set; }

        public State State { get; set; }
    }
}
