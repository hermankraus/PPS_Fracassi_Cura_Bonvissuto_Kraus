using System;
using System.Collections.Generic;

namespace WorkRepAPI.Entities
{
    public partial class User
    {
        public User()
        {
            Companies = new HashSet<Company>();
            Students = new HashSet<Student>();
        }

        public int Idusers { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;

        public virtual ICollection<Company> Companies { get; set; }
        public virtual ICollection<Student> Students { get; set; }
    }
}
