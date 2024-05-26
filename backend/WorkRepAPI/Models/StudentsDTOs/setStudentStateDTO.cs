using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.StudentsDTOs
{
    public class setStudentStateDTO
    {
        public int Legajo { get; set; }
        public State State { get; set; }
    }
}