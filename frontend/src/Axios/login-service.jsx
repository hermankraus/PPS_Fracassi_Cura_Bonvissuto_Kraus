import api from "./api";

export const LoginApi = (userData) => {
    console.log("Enviando solicitud al servidor:", userData);
    const response =  api.post("/Auth/login", (userData));
     return response
  };
  
  export default LoginApi; 
