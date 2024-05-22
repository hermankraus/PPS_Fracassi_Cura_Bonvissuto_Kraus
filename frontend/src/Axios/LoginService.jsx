import api from "./api";

export const Login = () => { return api.post("/Auth/Login")}