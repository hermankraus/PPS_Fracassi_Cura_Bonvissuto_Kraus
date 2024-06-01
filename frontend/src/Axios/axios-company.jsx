import api from "./api";

export const registerNewCompany = (newUser) => {
  return api.post("/Register/RegisterCompany", JSON.stringify(newUser));
};
