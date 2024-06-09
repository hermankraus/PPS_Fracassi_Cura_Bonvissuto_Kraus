import { useState, useContext } from "react";
import { Stack, Container, Image } from "@chakra-ui/react";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import images from "../../assets/constants/images";
import { CompanyProfile } from "./company-profile";
import "./company-page.css";
import { JobOpportunitiesCompany } from "./job-opportunities-company";

export const CompanyPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("jobOpportunitiesCompany");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Container maxW="container.lg">
        <Stack spacing={8} align="center">
          <nav className="Navbar">
            <Image
              src={images.logo}
              alt="Logo"
              w="15rem"
              h="4.5rem"
              p={0}
              mt={0}
            />
            <a
              href="#"
              onClick={() => handleTabChange("jobOpportunitiesCompany")}
              className={
                selectedTab === "jobOpportunitiesCompany" ? "active" : ""
              }
            >
              Oportunidades Laborales
            </a>
            <a
              href="#"
              onClick={() => handleTabChange("companyProfile")}
              className={selectedTab === "companyProfile" ? "active" : ""}
            >
              Mi Perfil
            </a>
          </nav>
          {selectedTab === "companyProfile" && <CompanyProfile />}
          {selectedTab === "jobOpportunitiesCompany" && (
            <JobOpportunitiesCompany />
          )}
        </Stack>
      </Container>
    </div>
  );
};
