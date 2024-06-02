import { HStack, Image, Container, Link } from "@chakra-ui/react";
import images from "../../assets/constants/images";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export const NavbarPage = ({ isAdmin, isCompany }) => {
  const navigate = useNavigate();

  const navbarHandler = () => {
    isAdmin ? navigate("/admin-page") :
    isCompany ? navigate("/company") :
    navigate("/student");
  };
  
  return (
    <HStack className="navbar" spacing="6rem" p={10} m={0} overflowY="hidden">
      <Image 
        onClick={navbarHandler}
        src={images.logo}
        alt="Logo"
        w="12rem"
        h="6rem"
        maxW="full"
      />
      <Container>
        {isAdmin && <Link href="/admin-page">Admin Page</Link>}
        {(isStudent || isCompany) && (
          <>
            <Link
              href="#"
              onClick={() => setSelectedTab("cvModifier")}
              className={selectedTab === "cvModifier" ? "active" : ""}
            >
              Mi perfil
            </Link>
            <Link
              href="#"
              onClick={() => setSelectedTab("jobOpportunities")}
              className={selectedTab === "jobOpportunities" ? "active" : ""}
            >
              Oportunidades Laborales
            </Link>
          </>
         )}
         {isStudent && ( 
          <Link
            href="#"
            onClick={() => setSelectedTab("jobPostulations")}
            className={selectedTab === "jobPostulations" ? "active" : ""}
          >
            Mis postulaciones
          </Link>
    )} 
      </Container>
    </HStack>
  );
};
