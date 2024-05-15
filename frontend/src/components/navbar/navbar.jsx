import { HStack, Image } from "@chakra-ui/react";
import images from "../../assets/constants/images";
import "./navbar.css";

export const NavHeader = () => {
  return (
    <HStack className="navbar" spacing="6rem">
      <Image src={images.logo} alt="Logo" w="12rem" h="6rem" maxW="full" />
      {/* POR AHORA NO LO UTILIZO*/}
    </HStack>
  );
};
