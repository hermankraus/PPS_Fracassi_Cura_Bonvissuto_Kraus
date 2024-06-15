import api from "./api";

export const getAllStudents = (students) => {
  return api.get("/Student/GetStudents", JSON.stringify(students));
};

export const putStudentState = (student) => {
  return api.put("/Student/UpdStudentState", JSON.stringify(student));
};

export const putCompanyState = (company) => {
  return api.put("/Company/updstate", JSON.stringify(company));
};

export const AddCareer= (NewCareer) => {
  return api.post("/Career/create", JSON.stringify(NewCareer));
}

