import { useState, useContext } from "react";
import { Stack, Container, Image } from "@chakra-ui/react";
import "./student-page.css";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import { CVModifier } from "./cv-modifier";
import { JobOpportunities } from "./job-opportunities";
import { JobPostulations } from "./job-postulations";
import images from "../../assets/constants/images";
import { useNavigate } from "react-router-dom";


export const StudentPage = () => {
  const navigate = useNavigate();

  const { isDarkMode } = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("cvModifier");
  const [postulatedJobs, setPostulatedJobs] = useState([]);
  const [jobOpportunities, setJobOpportunities] = useState([
    { id: 1, title: "Desarrollador Frontend", company: "Empresa A" },
    { id: 2, title: "Desarrollador Backend", company: "Empresa B" },
    { id: 3, title: "Diseñador UI/UX", company: "Empresa C" },
    { id: 4, title: "Diseñador UI/UX", company: "Empresa C" },
  ]);

  const handleApply = (job) => {
    setPostulatedJobs([...postulatedJobs, job]);
    const updatedOpportunities = jobOpportunities.filter(
      (opportunity) => opportunity.id !== job.id
    );
    setJobOpportunities(updatedOpportunities);
  };

  const handleDelete = (job) => {
    setJobOpportunities([...jobOpportunities, job]);
    const updatedPostulatedJobs = postulatedJobs.filter(
      (postulatedJob) => postulatedJob.id !== job.id
    );
    setPostulatedJobs(updatedPostulatedJobs);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Container maxW="container.lg">
        <Stack spacing={8} align="center">

          {/* ESTE NAV ACA NO IRIA, HAY QUE HACER UN SOLO NAVBAR REUTILIZABLE EN TODAS LAS PAGES */}
          <nav className="Navbar">
            <Image
              src={images.logo}
              alt="Logo"
              w="14rem"
              h="4.5rem"
              p={0}
              mt={2}
              cursor="pointer"
              onClick={()=> navigate("/student")}
            />
            <a
              href="#"
              onClick={() => setSelectedTab("jobOpportunities")}
              className={selectedTab === "jobOpportunities" ? "active" : ""}
            >
              Oportunidades Laborales
            </a>
            <a
              href="#"
              onClick={() => setSelectedTab("jobPostulations")}
              className={selectedTab === "jobPostulations" ? "active" : ""}
            >
              Mis postulaciones
            </a>
            <a
              href="#"
              onClick={() => setSelectedTab("cvModifier")}
              className={selectedTab === "cvModifier" ? "active" : ""}
            >
              Mi Perfil
            </a>
          </nav>
          {selectedTab === "cvModifier" && <CVModifier />}
          {selectedTab === "jobOpportunities" && (
            <JobOpportunities
              onApply={handleApply}
              jobOpportunities={jobOpportunities}
            />
          )}
          {selectedTab === "jobPostulations" && (
            <JobPostulations
              postulatedJobs={postulatedJobs}
              onDelete={handleDelete}
            />
          )}
        </Stack>
      </Container>
    </div>
  );
};
