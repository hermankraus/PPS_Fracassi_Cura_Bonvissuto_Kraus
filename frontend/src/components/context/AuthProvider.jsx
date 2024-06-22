import { createContext, useState, useEffect } from "react";
import api from "../../Axios/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (Legajo, password) => {
    try {
      const response = await api.post("/Auth/login", {
        Legajo,
        password,
      });
      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
      }
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
