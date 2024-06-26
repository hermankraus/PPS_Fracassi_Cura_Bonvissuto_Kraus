﻿namespace WorkRepAPI;

public class CompleteProfileDTO
{
        public int Legajo {get;set;} 
        public string? PhoneNumber { get; set; }
        public string? CellPhoneNumber { get; set; }
        public string? Address { get; set; }
        public int? AddressNumber { get; set; }
        public int? Floor { get; set; }
        public string? Flat { get; set; }
        public string? Country { get; set; }
        public string? Province { get; set; }
        public string? City { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? MaritalStatus { get; set; }
        public string Gender { get; set; } = null!;
        public string? Career { get; set; }
        public int? ApprovedSubjects { get; set; }
        public float? AverageWithFails { get; set; }
        public float? AverageWithoutFails { get; set; }
        public int? YearOfStudy { get; set; }
        public string? Turn { get; set; }
        public string? CurriculumPlan { get; set; }
        public int? YearOfEntry { get; set; }
        public string? Biography { get; set; }
        public string? SecondaryTitle { get; set; }
        public string? GithubUrl { get; set; }
        public string? LinkedUrl { get; set; }

}
