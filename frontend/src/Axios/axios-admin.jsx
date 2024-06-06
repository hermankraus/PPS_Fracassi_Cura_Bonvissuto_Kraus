import api from "./api";

export const getAllStudents = (students) => {
  return api.get("/Student/GetStudents", JSON.stringify(students));
};

export const putStudentState = (student) => {
  return api.put("/Student/UpdStudentState", JSON.stringify(student));
};