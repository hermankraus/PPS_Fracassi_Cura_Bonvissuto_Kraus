import api from "./api";

export default getAdmin = (admin) => {
  return api.get("/Student/GetStudents", JSON.stringify(admin));
};

