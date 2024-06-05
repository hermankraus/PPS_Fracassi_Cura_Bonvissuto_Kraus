using System;
using System.Collections.Generic;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Entities
{
    public partial class Joboffer
    {
        public Joboffer()
        {
            IdCarreers = new HashSet<Career>();
            IdSkills = new HashSet<Skill>();
            IdStudents = new HashSet<Student>();
        }

        public int IdJobOffer { get; set; }
        public string ContractType { get; set; } = null!;
        public string EmploymentType { get; set; } = null!;
        public string WorkLocation { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Cuitcompany { get; set; } = null!;
        public OfferState State { get; set; }
        public DateTime Finallydate { get; set; }

        public virtual Company CuitcompanyNavigation { get; set; } = null!;

        public virtual ICollection<Career> IdCarreers { get; set; }
        public virtual ICollection<Skill> IdSkills { get; set; }
        public virtual ICollection<Student> IdStudents { get; set; }
    }
}
