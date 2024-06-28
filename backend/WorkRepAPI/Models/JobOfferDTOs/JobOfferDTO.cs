using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.JobOfferDTOs
{
    public class JobOfferDTO
    {
        
        public ContractType ContractType { get; set; }
        public EmploymentType EmploymentType { get; set; }
        public WorkLocation WorkLocation { get; set; }
        public string Description { get; set; } = null!;
        public string Cuitcompany { get; set; } = null!;

        [Required]

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public OfferState State { get; set; }
        public DateTime? Finallydate { get; set; }
        public string WorkPlace { get; set; } = null!;
        public int? MinSubjects { get; set; }
        public DateTime? EstimatedDate { get; set; }
        public string? InternshipDuration { get; set; }
        public string Title { get; set; } = null!;



    }
}
