using System.ComponentModel.DataAnnotations;

namespace WorkRepAPI;

public class CompleteCompanyProfileDTO
{
        [Required]
        public string? Cuit {get; set;}
        public string? ContactPhone { get; set; }
        public string? Website { get; set; }
        public string? Type { get; set; }
        public int? NumberOfEmployees { get; set; }

}
