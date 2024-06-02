import { useState, useContext, useEffect } from "react";
import { Stack, Container, Image } from "@chakra-ui/react";
import "./student-page.css";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import { CVModifier } from "./cv-modifier";
import { JobOpportunities } from "./job-opportunities";
import { JobPostulations } from "./job-postulations";
// import images from "../../assets/constants/images";
// import { NavbarPage } from "../../components/navbar/navbar";
import { dataUserStudent } from "../../components/user/data/data-user";

export const StudentPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("cvModifier");
  const [postulatedJobs, setPostulatedJobs] = useState([]);
  const [jobOpportunities, setJobOpportunities] = useState([
    { id: 1, title: "Desarrollador Frontend", company: "Empresa A" },
    { id: 2, title: "Desarrollador Backend", company: "Empresa B" },
    { id: 3, title: "Diseñador UI/UX", company: "Empresa C" },
    { id: 4, title: "Diseñador UI/UX", company: "Empresa C" },
  ]);

  const students = dataUserStudent(); 
  useEffect(() => {
    console.log(students); 
  }, []);

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
          {/* <NavbarPage/> */}
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
