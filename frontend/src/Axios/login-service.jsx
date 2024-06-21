import api from "./api";

const LoginApi = (userData) => {
  const response = api.post("/Auth/login", userData);
  return response;
};

export default LoginApi;
