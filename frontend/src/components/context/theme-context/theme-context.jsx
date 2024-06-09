/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// Crea el contexto
export const ThemeContext = createContext();

// Proveedor
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Pasa el estado y la función de cambio al valor del contexto
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
