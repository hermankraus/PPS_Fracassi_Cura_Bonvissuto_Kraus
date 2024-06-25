import api from "./api";

export const registerNewStudent = (newUser) => {
  return api.post("/Register/RegisterStudent", JSON.stringify(newUser));
};

export const getAllJobOffer = (JobOffer) => {
  return api.get("/JobOffer", JSON.stringify(JobOffer));
};

export const getStudentByLegajo = async (legajo) => {
  return api.get(`/Student/${legajo}`);
};

export const completeprofile = (userData) => {
  return api.put("/Student/completeprofile", JSON.stringify(userData));
};

export const studentApplyToJobOffer = (offer) => {
  return api.post("/Student/apply", JSON.stringify(offer));
};

export const myPostulationsByLegajo = (legajo) => {
  return api.get(`/Student/joboffers/${legajo}`)
}

