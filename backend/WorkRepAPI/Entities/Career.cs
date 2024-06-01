using System;
using System.Collections.Generic;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Entities
{
    public partial class Career
    {
        public Career()
        {
            Studentscareers = new HashSet<Studentscareer>();
        }

        public int IdCareers { get; set; }
        public string NameCareers { get; set; } = null!;
        public string InstitutionCareers { get; set; } = null!;
        public CareerType? Type { get; set; }

        public virtual ICollection<Studentscareer> Studentscareers { get; set; }
    }
}
