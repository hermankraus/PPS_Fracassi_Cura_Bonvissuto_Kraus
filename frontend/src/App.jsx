import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useState, useContext } from "react";
import { HomePage } from "./pages/home-page/home-page";
import AdminPage from "./pages/admin-page/admin-page";
import AccountAuth from "./components/user/register/account-auth";
import FooterPage from "./components/footer/footer";
import Login from "./components/user/login/Login";
import Register from "./components/user/register/register";
import AdminStudent from "./components/admin/admin-student";
import AdminCompany from "./components/admin/admin-company";
import { CompanyProfile } from "./pages/company-page/company-profile";
import { StudentProfile } from "./pages/student-page/student-profile";
import { AuthProvider } from "./components/context/AuthProvider";
import StudentJobOpportunities from "./pages/student-page/student-job-opportunities";
import StudentJobPostulations from "./pages/student-page/student-job-postulations";
import CompanyJobOpportunities from "./pages/company-page/company-job-opportunities";
import JobPostulationsCompany from "./pages/company-page/company-job-postulations";
import AdminCareer from "./components/admin/admin-career";
import AdminSkill from "./components/admin/admin-skill";
import { ThemeContext } from "./components/context/theme-context/theme-context";
import ProtectedRoute from "./components/context/protected-route";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const [previousPath, setPreviousPath] = useState("/");

  return (
    <AuthProvider>
      <Router>
        <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} onChange={(params) => setPreviousPath(params.location.pathname)}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/company/postulations" element={<ProtectedRoute><JobPostulationsCompany /></ProtectedRoute>} />
              <Route path="/admin-page" element={ <ProtectedRoute><AdminPage /></ProtectedRoute>}/>
              <Route path="/admin/student" element={<ProtectedRoute><AdminStudent /></ProtectedRoute>}/>
              <Route path="/admin/company" element={<ProtectedRoute><AdminCompany /></ProtectedRoute>}/>
              <Route path="/admin/career" element={<ProtectedRoute><AdminCareer /></ProtectedRoute>}/>
              <Route path="/admin/skill" element={ <ProtectedRoute><AdminSkill /></ProtectedRoute>}/>
              <Route path="/student/oportunities" element={<ProtectedRoute><StudentJobOpportunities /></ProtectedRoute>}/>
              <Route path="/student/postulations" element={<ProtectedRoute><StudentJobPostulations /></ProtectedRoute>}/>
              <Route path="/student/my-profile" element={<ProtectedRoute><StudentProfile /></ProtectedRoute>}/>
              <Route path="/company/oportunities" element={<ProtectedRoute><CompanyJobOpportunities /> </ProtectedRoute>}/>
              <Route path="/company/my-profile" element={<ProtectedRoute><CompanyProfile /></ProtectedRoute>}/>

              <Route path="/AccountAuth" element={<AccountAuth />} />
              <Route path="/login" element={<Navigate to={previousPath} />} />
            </Routes>
          </div>
          <div className="spacer"></div>
          <FooterPage className="footer-container" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
