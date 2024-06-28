using WorkRepAPI.Enums;

namespace WorkRepAPI.Entities
{
    public partial class Career
    {
        public Career()
        {
            Studentscareers = new HashSet<Studentscareer>();
            IdOffers = new HashSet<Joboffer>();
        }

        public int IdCareers { get; set; }
        public string NameCareers { get; set; } = null!;
        public string InstitutionCareers { get; set; } = null!;
        public CareerType Type { get; set; } 
        public State State { get; set; } 

        public virtual ICollection<Studentscareer> Studentscareers { get; set; }

        public virtual ICollection<Joboffer> IdOffers { get; set; }
    }
}
