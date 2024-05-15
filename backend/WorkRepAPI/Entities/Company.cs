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
        public string ContactPhone { get; set; } = null!;
        public string Website { get; set; } = null!;
        public string Type { get; set; } = null!;
        public int NumberOfEmployees { get; set; }
        public int UserCompId { get; set; }
        public int UserId { get; set; }

        public virtual User UserComp { get; set; } = null!;
    }
}
