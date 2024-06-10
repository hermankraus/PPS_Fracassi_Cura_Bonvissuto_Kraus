import { useState, useContext } from "react";
import { Stack, Container, Image } from "@chakra-ui/react";
import "./student-page.css";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import { StudentProfile } from "./student-profile";
import { JobOpportunities } from "./job-opportunities";
import { JobPostulations } from "./job-postulations";
import { useNavigate } from "react-router-dom";
import { NavbarUser } from "../../components/navbar/navbar";

export const StudentPage = () => {
  const navigate = useNavigate();

  const { isDarkMode } = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("StudentProfile");
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
      <NavbarUser />
      <Container maxW="container.lg">
        <Stack spacing={8} align="center">
          <StudentProfile />
          {/* <JobOpportunities />
          <JobPostulations /> */}

        </Stack>
      </Container>
    </div>
  );
};
