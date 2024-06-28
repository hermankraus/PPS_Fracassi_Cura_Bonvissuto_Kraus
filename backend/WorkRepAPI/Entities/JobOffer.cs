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
        public ContractType ContractType { get; set; } 
        public EmploymentType EmploymentType { get; set; } 
        public WorkLocation WorkLocation { get; set; } 
        public string Description { get; set; } = null!;
        public string Cuitcompany { get; set; } = null!;
        public OfferState State { get; set; }
        public DateTime? Finallydate { get; set; }
        public string WorkPlace { get; set; } = null!;
        public int? MinSubjects { get; set; }
        public DateTime? EstimatedDate { get; set; }
        public string? InternshipDuration { get; set; }

        public string Title { get; set; } = null!;

        public virtual Company CuitcompanyNavigation { get; set; } = null!;

        public virtual ICollection<Career> IdCarreers { get; set; }
        public virtual ICollection<Skill> IdSkills { get; set; }
        public virtual ICollection<Student> IdStudents { get; set; }
        

    }
}
