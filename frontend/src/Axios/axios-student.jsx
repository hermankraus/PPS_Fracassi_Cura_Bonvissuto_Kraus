import api from "./api";

export const registerNewStudent = (newUser) => {
  return api.post("/Register/RegisterStudent", JSON.stringify(newUser));
};

export const getStudents = (userStudent) => {
  return api.get("/Student/GetStudents", JSON.stringify(userStudent));
};