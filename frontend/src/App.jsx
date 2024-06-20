import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useState } from "react";
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
import AdminCareer from "./components/admin/admin-career";
import AdminSkill from "./components/admin/admin-skill";

function App() {
  const [previousPath, setPreviousPath] = useState("/");

  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
                onChange={(params) => setPreviousPath(params.location.pathname)}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin-page" element={<AdminPage />} />
              <Route path="/admin/student" element={<AdminStudent />} />
              <Route path="/admin/company" element={<AdminCompany />} />
              <Route path="/admin/career" element={<AdminCareer />} />
              <Route path="/admin/skill" element={<AdminSkill />} />
              <Route
                path="/student/oportunities"
                element={<StudentJobOpportunities />}
              />
              <Route
                path="/student/postulations"
                element={<StudentJobPostulations />}
              />
              <Route path="/student/my-profile" element={<StudentProfile />} />
              <Route
                path="/company/oportunities"
                element={<CompanyJobOpportunities />}
              />
              {/* <Route path="/company/postulations" element={<JobPostulationsCompany />} /> */}
              <Route path="/company/my-profile" element={<CompanyProfile />} />
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
