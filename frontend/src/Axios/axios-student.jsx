import api from "./api";

export const registerNewStudent = (newUser) => {
  return api.post("/Register/RegisterStudent", JSON.stringify(newUser));
};

