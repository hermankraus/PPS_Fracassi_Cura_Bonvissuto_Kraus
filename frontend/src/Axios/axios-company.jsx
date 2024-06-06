import api from "./api";

export const registerNewCompany = (newUser) => {
  return api.post("/Register/RegisterCompany", JSON.stringify(newUser));
};

export const getAllCompanies = (companies) => {
  return api.get("/Company/companies", JSON.stringify(companies));
};

