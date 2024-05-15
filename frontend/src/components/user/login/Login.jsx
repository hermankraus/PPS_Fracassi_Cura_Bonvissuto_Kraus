import LoginCompany from "./login-company";
import LoginStudent from "./login-student";
import { Flex, Box, Image, VStack, HStack } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themeContext/themeContext";
import { useContext } from "react";
import images from "../../../assets/constants/images";

export default function Login() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <VStack>
        <Image src={images.logo} alt="Logo" w="14rem" h="8.5rem" />
      </VStack>
      <Flex p="1rem" position="relative" mb="4rem">
        <Image
          src={images.HomeImg2}
          position="absolute"
          width="100%"
          height="100%"
          zIndex="-1"
          style={{ objectFit: "cover" }}
          borderRadius="2rem"
          opacity="0.8"
        />
        <Box
          minHeight="100vh"
          opacity="1"
          position="relative"
          zIndex="1"
          backgroundColor="transparent"
        >
          <HStack mt="2rem">
            <Box
              className={isDarkMode ? "dark-mode" : "light-mode"}
              borderRadius="1rem"
              border="3px solid #71aef0"
              mr="2rem"
              zIndex="1"
            >
              <LoginStudent />
            </Box>
            <Box
              className={isDarkMode ? "dark-mode" : "light-mode"}
              borderRadius="1rem"
              border="3px solid #71aef0"
              zIndex="1"
            >
              <LoginCompany />
            </Box>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}
