import { useContext } from "react";
import { Stack, Container, Image } from "@chakra-ui/react";
import "./student-page.css";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import { StudentProfile } from "./student-profile";
import { StudentJobPostulations } from "./student-job-postulations";
import { useNavigate } from "react-router-dom";
import { NavbarUser } from "../../components/navbar/navbar";
import StudentJobOpportunities from "./student-job-opportunities";

export const StudentPage = () => {
  const navigate = useNavigate();

  const { isDarkMode } = useContext(ThemeContext);


  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <NavbarUser />
      <Container maxW="container.lg">
        <Stack spacing={8} align="center" mt="20rem">
          <StudentProfile />
          <StudentJobOpportunities />
          <StudentJobPostulations />

        </Stack>
      </Container>
    </div>
  );
};

