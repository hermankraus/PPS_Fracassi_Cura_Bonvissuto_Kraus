import { createContext, useState, useEffect } from "react";
import api from "../../Axios/api";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));
  
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const login = async (Legajo, password) => {
    try {
      const response = await api.post("/Auth/login", {
        Legajo,
        password,
      });
      const token = response.data.token;      
        Cookies.set("token", token);
        setIsLoggedIn(true);
        
        return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
