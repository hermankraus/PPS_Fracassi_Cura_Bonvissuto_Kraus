import api from "./api";

export const registerNewCompany = (newUser) => {
  return api.post("/Register/RegisterCompany", JSON.stringify(newUser));
};

export const getAllCompanies = (companies) => {
  return api.get("/Company/companies", JSON.stringify(companies));
};

export const postJobOffer = (companies) => {
  return api.post("/JobOffer", JSON.stringify(companies));
};

export const GetCompanyByCuit = async (cuit) => {
  const response = await api.get(`/Company/getCompany`, {
    params: {
      Cuit: cuit.toString(),
    },
  });
  return response.data;
};


////
export const GetPostulationsByCuit = async (cuit) => {
  const response = await api.get(`/Company/postulationsbycuit`, {
    params: {
      cuit: cuit.toString(),
    },
  });
  return response.data;
}

export const GetPostulationsStudentToCompany = async (idJobOffer) => {
  const response = await api.get(`/Company/postulatedstudents/${idJobOffer}`);
  return response.data;
}


export const myPostulationsByLegajo = (legajo) => {
  return api.get(`/Student/joboffers/${legajo}`)
}


export const completeprofile = (company) => {
  return api.put("/Company/completeprofile", JSON.stringify(company));
};
