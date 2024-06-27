using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.CompanyDTOs
{
    public class companyOffersbyCuitDTO
    {
        public int IdJoboffer { get; set; }
        public string Description { get; set; } = null!;
        public string Title { get; set; } = null!;
        public OfferState State { get; set; }
        public DateTime? Finallydate { get; set; }

    }
}
