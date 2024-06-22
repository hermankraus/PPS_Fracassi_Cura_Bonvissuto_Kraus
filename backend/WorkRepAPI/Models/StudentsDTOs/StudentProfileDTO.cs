namespace WorkRepAPI.Models.StudentsDTOs
{
    public class StudentProfileDTO
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string? CellPhoneNumber { get; set; }
        public string Email { get; set; }
        public string? Country { get; set; }
        public string? Province { get; set; }
        public string? City { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? MaritalStatus { get; set; }
        public string Gender { get; set; }
        public string? Career { get; set; }
        public int? YearOfStudy { get; set; }
        public string? Biography { get; set; }
        public string? GithubUrl { get; set; }
        public string? LinkedUrl { get; set; }


    }
}
