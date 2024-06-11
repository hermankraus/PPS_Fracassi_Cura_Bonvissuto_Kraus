import { HStack, Image, Text, Link, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/constants/images";
import "./navbar.css";

export const NavbarAdmin = () => {
  const navigate = useNavigate();
  return (
    <HStack className="navbar" p={2} overflowY="hidden" minW="full">
      <Image src={images.logo} alt="Logo" w="8rem" h="4rem" maxW="full" ml="20rem" />
      <Link onClick={() => navigate("/admin/student")} ml="2rem" >Student Page</Link>
      <Link onClick={() => navigate("/admin/company")} ml="2rem">Company Page</Link>
      <Box ml="20rem">
        <Text> Cerrar Sesion </Text>
      </Box>
    </HStack>
  );
};

export const NavbarUser = () => {

  // FALTA EL AUTH PARA HACER UN SOLO NAVBAR EN BASE AL USUARIO -> ESTUDIANTE O COMPANIA

  const navigate = useNavigate();
  return (
    <HStack className="navbar" p={2} minW="full">
      <Image
        src={images.logo}
        alt="Logo"
        w="14rem"
        h="4.5rem"
        p={0}
        mt={2}
        cursor="pointer"
        onClick={() => navigate("/student")}
      />
      <Link
        onClick={() => navigate("/student/oportunities")}
        ml="2rem"
      >
        Oportunidades Laborales
      </Link>
      <Link
        ml="2rem"
        onClick={() => navigate("/student/postulations")}
      >
        Mis postulaciones
      </Link>
      <Link
        ml="2rem"
        onClick={() => navigate("/student/my-profile")}
      >
        Mi Perfil
      </Link>
      <Text ml="12rem">Cerrar Sesion</Text>
    </HStack>
  );
}