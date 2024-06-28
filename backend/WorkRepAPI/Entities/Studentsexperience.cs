namespace WorkRepAPI.Entities
{
    public partial class Studentsexperience
    {
        public int IdStudentsExperience { get; set; }
        public int IdStudents { get; set; }
        public string Description { get; set; } = null!;
        public string Company { get; set; } = null!;
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? IdSkills { get; set; }

        public virtual Skill? IdSkillsNavigation { get; set; }
        public virtual Student IdStudentsNavigation { get; set; } = null!;
    }
}
