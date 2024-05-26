import { HStack, Image, Container, Button } from "@chakra-ui/react";
import images from "../../assets/constants/images";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export const NavHeader = () => {
  const navigate = useNavigate();

  const handlerLogin = () => {
    navigate("/login");
  };
  return (
    <HStack className="navbar" spacing="6rem" p={10} m={0} overflow-y="hidden">
      <Image src={images.logo} alt="Logo" w="12rem" h="6rem" maxW="full" />
      <Container>
        <Button
          onClick={handlerLogin}
          w={140}
          h={30}
          borderRadius={50}
          cursor="pointer"
        >
          Iniciar sesión
        </Button>
      </Container>
    </HStack>
  );
};
