using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.CompanyDTOs
{
    public class ReadAllCompaniesDTO
    {
        public string Cuit { get; set; }
        public string CompanyName { get; set; } 
        public string BusinessName { get; set; }
        public string ContactEmail { get; set; }
        public State State { get; set; }
    }
}
