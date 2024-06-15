import { useContext } from "react";
import { Stack, Container, Image } from "@chakra-ui/react";
import "./student-page.css";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import { StudentProfile } from "./student-profile";
import { useNavigate } from "react-router-dom";
import { NavbarUser } from "../../components/navbar/navbar";

export const StudentPage = () => {
  const navigate = useNavigate();

  const { isDarkMode } = useContext(ThemeContext);


  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <NavbarUser />
      <Container maxW="container.lg">
        <Stack spacing={8} align="center" mt="1rem">
          <StudentProfile />

        </Stack>
      </Container>
    </div>
  );
};

