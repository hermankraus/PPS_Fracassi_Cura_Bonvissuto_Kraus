import api from "./api";

export default getAllStudents = (students) => {
  return api.get("/Student/GetStudents", JSON.stringify(students));
};

