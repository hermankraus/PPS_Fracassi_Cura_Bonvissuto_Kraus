using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using WorkRepAPI.Entities;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.JobOfferDTOs
{
    public class JobOfferDTO
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdJobOffer { get; set; }
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


       /* public List<JobOfferCareerDTO> jobOfferCareer { get; set; } = new List<JobOfferCareerDTO>();

        public List<JobOfferSkillDTO> jobOfferSkill { get; set; } = new List<JobOfferSkillDTO>();*/
    }
}
