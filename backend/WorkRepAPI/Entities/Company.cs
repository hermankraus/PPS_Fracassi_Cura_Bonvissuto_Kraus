using System;
using System.Collections.Generic;

namespace WorkRepAPI.Entities
{
    public partial class Company
    {
        public string Cuit { get; set; } = null!;
        public string CompanyName { get; set; } = null!;
        public string BusinessName { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string ContactEmail { get; set; } = null!;
        public string? ContactPhone { get; set; }
        public string? Website { get; set; }
        public string? Type { get; set; }
        public int? NumberOfEmployees { get; set; }
        public string Password { get; set; } = null!;
    }
}
