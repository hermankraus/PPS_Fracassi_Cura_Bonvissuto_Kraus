import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Importa el Router
import { ThemeContext } from "./components/context/theme-context/theme-context"; // Importa el contexto de tema
import { HomePage } from "./pages/home-page/home-page"; // Importa el componente HomePage

// Mock del contexto de tema
const mockThemeContextValue = {
  isDarkMode: false,
  toggleTheme: () => {}, // Incluye todas las funciones o valores necesarios del contexto
};

// Mock del proveedor de contexto de tema
const MockThemeProvider = ({ children }) => (
  <Router>
    <ThemeContext.Provider value={mockThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  </Router>
);

test("renders login button", () => {
  render(
    <MockThemeProvider>
      <HomePage />
    </MockThemeProvider>
  );

  // Verifica que el botón "Iniciar sesión" esté presente en la pantalla
  const loginButton = screen.getByRole("button", { name: /Iniciar sesión/i });
  expect(loginButton).toBeInTheDocument();
});
