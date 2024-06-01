using System;
using System.Collections.Generic;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Entities
{
    public partial class Studentscareer
    {
        public int IdStudents { get; set; }
        public int IdCareers { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public DateTime? GraduationDate { get; set; }
        public IsComplete? IsComplete { get; set; } = null!;

        public virtual Career IdCareersNavigation { get; set; } = null!;
        public virtual Student IdStudentsNavigation { get; set; } = null!;
    }
}
