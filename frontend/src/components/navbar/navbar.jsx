import { HStack, Image, Text, Link, Box } from "@chakra-ui/react";
import images from "../../assets/constants/images";
import "./navbar.css";

export const NavbarPage = ({ isAdmin }) => {
  return (

    // ACA HAY QUE HACER EL AUTH LOGIN PARA QUE VEA O NO VEA EL NAVBAR EN BASE AL LOGIN

    <HStack className="navbar" p={2} overflowY="hidden" minW="full">
      <Image src={images.logo} alt="Logo" w="8rem" h="4rem" maxW="full" ml="20rem" />
      <Link href="/admin/student" ml="2rem" >Student Page</Link>
      <Link href="/admin/company" ml="2rem">Company Page</Link>
      <Box ml="20rem">
        <Text> Cerrar Sesion </Text>
      </Box>
    </HStack>
  );
};
