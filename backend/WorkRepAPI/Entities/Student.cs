using System;
using System.Collections.Generic;

namespace WorkRepAPI.Entities
{
    public partial class Student
    {
        public int Legajo { get; set; }
        public string DocumentType { get; set; } = null!;
        public string DocumentNumber { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? PhoneNumber { get; set; }
        public string CellPhoneNumber { get; set; } = null!;
        public string Address { get; set; } = null!;
        public int AddressNumber { get; set; }
        public int? Floor { get; set; }
        public string? Flat { get; set; }
        public string Country { get; set; } = null!;
        public string Province { get; set; } = null!;
        public string City { get; set; } = null!;
        public DateTime DateOfBirth { get; set; }
        public string MaritalStatus { get; set; } = null!;
        public string Cuit { get; set; } = null!;
        public string Gender { get; set; } = null!;
        public string Career { get; set; } = null!;
        public int ApprovedSubjects { get; set; }
        public float? AverageWithFails { get; set; }
        public float? AverageWithoutFails { get; set; }
        public int YearOfStudy { get; set; }
        public string Turn { get; set; } = null!;
        public string? CurriculumPlan { get; set; }
        public int YearOfEntry { get; set; }
        public string Biography { get; set; } = null!;
        public string SecondaryTitle { get; set; } = null!;
        public string? GithubUrl { get; set; }
        public string? LinkedUrl { get; set; }
        public int UserId { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
