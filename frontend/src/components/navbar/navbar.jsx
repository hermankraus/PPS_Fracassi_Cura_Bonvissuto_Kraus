import { HStack, Image, Container, Link } from "@chakra-ui/react";
import images from "../../assets/constants/images";
import "./navbar.css";

export const NavbarPage = ({ isAdmin }) => {
  return (
    <HStack className="navbar" spacing="6rem" p={10} m={0} overflowY="hidden">
      <Image src={images.logo} alt="Logo" w="12rem" h="6rem" maxW="full" />
      <Container>
        <Link href="/student">Student Page</Link>
        <Link href="/company">Company Page</Link>
        {isAdmin && <Link href="/admin-page">Admin Page</Link>}
      </Container>
    </HStack>
  );
};
