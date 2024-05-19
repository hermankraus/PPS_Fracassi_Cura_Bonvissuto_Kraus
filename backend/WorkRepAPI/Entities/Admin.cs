using System.ComponentModel.DataAnnotations;

namespace WorkRepAPI.Entities
{
    public class Admin
    {

        [Required]
        public int Legajo { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }

    }
}
