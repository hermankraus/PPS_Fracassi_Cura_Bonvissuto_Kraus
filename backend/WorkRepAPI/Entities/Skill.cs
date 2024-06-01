using System;
using System.Collections.Generic;

namespace WorkRepAPI.Entities
{
    public partial class Skill
    {
        public Skill()
        {
            Studentsexperiences = new HashSet<Studentsexperience>();
            IdStudents = new HashSet<Student>();
        }

        public int IdSkills { get; set; }
        public string DescriptionSkills { get; set; } = null!;

        public virtual ICollection<Studentsexperience> Studentsexperiences { get; set; }

        public virtual ICollection<Student> IdStudents { get; set; }
    }
}
