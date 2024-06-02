using System;
using System.Collections.Generic;

namespace WorkRepAPI.Entities
{
    public partial class Joboffer
    {
        public Joboffer()
        {
            IdCarreers = new HashSet<Career>();
            IdSkills = new HashSet<Skill>();
        }

        public int IdJobOffer { get; set; }
        public string Tipocontrato { get; set; } = null!;
        public string TipoJornada { get; set; } = null!;
        public string ModalidadTrabajo { get; set; } = null!;
        public string Descripcion { get; set; } = null!;
        public string Cuitcompania { get; set; } = null!;

        public virtual Company CuitcompaniaNavigation { get; set; } = null!;

        public virtual ICollection<Career> IdCarreers { get; set; }
        public virtual ICollection<Skill> IdSkills { get; set; }
    }
}
