import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { HomePage } from "./pages/home-page/homePage";
import { StudentPage } from "./pages/student-page/studentPage";
import { CompanyPage } from "./pages/company-page/companyPage";
import { AdminPage } from "./pages/admin-page/adminPage";
import FooterPage from "./components/footer/footer";
import Login from "./components/user/login/Login";
import Register from "./components/user/register/Register";
import { ThemeProvider } from "./components/context/themeContext/themeContext";
// import { NavHeader } from "./components/navbar/navbar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [previousPath, setPreviousPath] = useState("/");

  return (
    <ThemeProvider>
      <ChakraProvider>
        <Router>
          {/* <NavHeader /> */}
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
              onChange={(params) => setPreviousPath(params.location.pathname)}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/student" element={<StudentPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/login" element={<Navigate to={previousPath} />} />
          </Routes>
          <FooterPage />
        </Router>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
