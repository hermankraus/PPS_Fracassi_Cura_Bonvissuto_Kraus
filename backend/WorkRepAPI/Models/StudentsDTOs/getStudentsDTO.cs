using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.CompanyDTOs
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
