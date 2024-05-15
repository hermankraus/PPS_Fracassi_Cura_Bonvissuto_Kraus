using System.ComponentModel.DataAnnotations;

namespace WorkRepAPI.Entities
{
    public class Company_:User_
    {
        public int IdUser { get; set; }
        public string CUIT { get; set; }
        public string CompanyName { get; set; }
        public string BusinessName { get; set; }
        public string Address { get; set; }
        public string ContactEmail { get; set; }
        public string ContactPhone { get; set; }
        public string Website { get; set; }
        public string Type { get; set; }
        public int NumberOfEmployees { get; set; }
        public virtual ICollection<JobOffer> JobOffers { get; set; } = new List<JobOffer>();
    }
}
