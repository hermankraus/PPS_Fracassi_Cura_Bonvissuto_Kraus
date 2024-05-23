import { useState, useContext } from "react";
import LoginCompany from "./login-company";
import LoginStudent from "./login-student";
import { Flex, Box, Image, HStack, Switch, Heading } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themeContext/themeContext";
import images from "../../../assets/constants/images";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../../context/themeButton/themeButton";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const [isCompany, setIsCompany] = useState(false);

  const handleSwitch = () => {
    setIsCompany(!isCompany);
  };

  return (
    <>
      <Flex position="relative" justifyContent="center">
        <Image
          src={images.bgImgLogin}
          position="absolute"
          width="100%"
          height="100%"
          zIndex="-1"
          objectFit="cover"
          borderBottomRadius="3rem"
        />
        <Box
          minHeight="40vh"
          opacity="1"
          position="relative"
          zIndex="1"
          justifyContent="center"
          alignItems="center"
        >
          <HStack p={4} justifyContent="center">
            <Image
              src={images.logo}
              alt="Logo"
              minW="20rem"
              maxW="20rem"
              onClick={() => navigate("/")}
              cursor="pointer"
              filter="drop-shadow(1px 1px 0px rgb(255, 255, 255))"
              mr="2rem"
            />
            <Box
              className={isDarkMode ? "dark-login" : "light-login"}
              borderRadius="1rem"
              border="3px solid #71aef0"
              zIndex="1"
              p="2rem"
              w="30rem"
            >
              <Flex justifyContent="center" alignItems="center" mt="1rem">
                <Heading mr="1rem" h="3rem" className="switch">
                  {isCompany ? "Estudiante" : "Estudiante"}
                </Heading>
                <Switch
                  isChecked={isCompany}
                  onChange={handleSwitch}
                  size="lg"
                  colorScheme="blue"
                />
                <Heading className="switch" ml={4} h="3rem">
                  Empresa
                </Heading>
              </Flex>
              {isCompany ? <LoginCompany /> : <LoginStudent />}
            </Box>
          </HStack>
          <Box position="relate" mb={2} mr="20rem">
            <ThemeButton />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
