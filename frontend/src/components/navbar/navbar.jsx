import { HStack, Image, Text, Link, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/constants/images";
import "./navbar.css";

export const NavbarAdmin = () => {
  const navigate = useNavigate();

  return (
    <HStack className="navbar" p={2} overflowX="auto" minW="full">
      <Image src={images.logo} alt="Logo" w="8rem" h="4rem" />
      <Link onClick={() => navigate("/admin/student")} ml="2rem">Información de los estudiantes</Link>
      <Link onClick={() => navigate("/admin/company")} ml="2rem">Información de las empresas</Link>
      <Link onClick={() => navigate("/admin/skill")} ml="2rem">Añadir habilidades</Link>
      <Link onClick={() => navigate("/admin/career")} ml="2rem">Añadir carreras universitarias</Link>
      <Box ml="auto">
        <Text>Cerrar Sesion</Text>
      </Box>
    </HStack>
  );
};

export const NavbarUser = () => {
  const navigate = useNavigate();

  return (
    <HStack className="navbar" p={2} overflowX="auto" minW="full">
      <Image src={images.logo} alt="Logo" w="14rem" h="4.5rem" p={0} cursor="pointer" onClick={() => navigate("/student")} />
      <Link onClick={() => navigate("/student/oportunities")} ml="2rem">Oportunidades Laborales</Link>
      <Link onClick={() => navigate("/student/postulations")} ml="2rem">Mis Postulaciones</Link>
      <Link onClick={() => navigate("/student/my-profile")} ml="2rem">Mi Perfil</Link>
      <Box ml="auto">
        <Text>Cerrar Sesion</Text>
      </Box>
    </HStack>
  );
};
