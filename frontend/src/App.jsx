import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { HomePage } from "./pages/home-page/home-page";
import { StudentPage } from "./pages/student-page/student-page";
import { CompanyPage } from "./pages/company-page/company-page";
import AdminPage from "./pages/admin-page/admin-page";
import AccountAuth from "./components/user/register/account-auth";
import FooterPage from "./components/footer/footer";
import Login from "./components/user/login/Login";
import Register from "./components/user/register/register";
import { ThemeProvider } from "./components/context/theme-context/theme-context";
import { ChakraProvider } from "@chakra-ui/react";
import AdminStudent from "./components/admin/admin-student";
import AdminCompany from "./components/admin/admin-company";
import { AuthProvider } from "./components/context/AuthProvider";

function App() {
  const [previousPath, setPreviousPath] = useState("/");

  return (
    <AuthProvider>
      <ThemeProvider>
        <ChakraProvider>
          <Router>
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
              <Route path="/admin-page" element={<AdminPage />} />
              <Route path="/admin/student" element={<AdminStudent />} />
              <Route path="/admin/company" element={<AdminCompany />} />
              <Route path="/AccountAuth" element={<AccountAuth />} />
              <Route path="/login" element={<Navigate to={previousPath} />} />
            </Routes>
            <FooterPage />
          </Router>
        </ChakraProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
