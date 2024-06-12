using WorkRepAPI.Models.StudentsDTOs;

namespace WorkRepAPI.Services.Interfaces
{
    public interface IStudentService
    {
        void SetStudentState(setStudentStateDTO student);

        public IEnumerable<GetStudentsDTO> GetStudents();

        public GetStudentsDTO GetStudentbyLegajo(int legajo);
    
        public IEnumerable<GetStudentsDTO> GetPendingStudents();
    }


}
