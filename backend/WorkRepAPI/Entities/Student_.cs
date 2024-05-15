using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using WorkRepAPI.Entities;
using WorkRepAPI.Enums;

public class Student_ : User_


{
    public string Legajo { get; set; }

    public DocumentType? DocumentType { get; set; }

    public string DocumentNumber { get; set; }

    public string Name { get; set; }

    public string LastName { get; set; }

   
    public string PhoneNumber { get; set; }

    public string CellPhoneNumber { get; set; }

    public string? Address { get; set; }

    public int? AddressNumber { get; set; }

    public int? Floor { get; set; }

    public string? Flat { get; set; }

    public string? Country { get; set; }

    public string? Province { get; set; }

    public string? City { get; set; }

    public DateTime DateOfBirth { get; set; }

    public string MaritalStatus { get; set; }

    public string CUITOrCUIL { get; set; }

    public string Gender { get; set; }

    public string Career { get; set; }


    public int ApprovedSubjects { get; set; }

    public float AverageWithFails { get; set; }

    public float AverageWithoutFails { get; set; }

    public int YearOfStudy { get; set; }

    public string Turn { get; set; }

    public string CurriculumPlan { get; set; }

    public int YearOfEntry { get; set; }

    // Otros atributos
    public string Biography { get; set; }

    /*public string CurriculumVitae { get; set; }*/

    public int IdUser { get; set; }
    public string? GithubUrl { get; set; }

    public string? LinkedUrl { get; set; }
    public string SecondaryTitle { get; set; }

   /* public List<string> OtherTitlesOrCertifications { get; set; }*/

    // Relación con las postulaciones a búsquedas
    public virtual ICollection<JobPositionStudents> JobPositionsStudents { get; set; } = new List<JobPositionStudents>();
}

