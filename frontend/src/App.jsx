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
import RegisterStudent from "./components/user/register/RegisterStudent";
import { ThemeProvider } from "./components/context/themeContext/themeContext";
import RegisterCompany from "./components/user/register/RegisterCompany";
import AccountAuth from "./components/user/register/AccountAuth";

function App() {
  const [previousPath, setPreviousPath] = useState("/");

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
            onChange={(params) => setPreviousPath(params.location.pathname)}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register-student" element={<RegisterStudent />} />
          <Route path="/register-company" element={<RegisterCompany />} />
          <Route path="/account-auth" element={<AccountAuth />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<Navigate to={previousPath} />} />
        </Routes>
        <FooterPage />
      </Router>
    </ThemeProvider>
  );
}

export default App;
