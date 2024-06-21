import { useState, useContext } from "react";
import RegisterCompany from "./register-company";
import RegisterStudent from "./register-student";
import {
  Flex,
  Box,
  Image,
  HStack,
  Switch,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { ThemeContext } from "../../context/theme-context/theme-context";
import images from "../../../assets/constants/images";
import ThemeButton from "../../context/theme-button/theme-button";

export default function Register() {
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
          display="flex"
          flexDirection="column"
        >
          <HStack p={4} justifyContent="center" w="full">
            <Box
              className={isDarkMode ? "dark" : "light"}
              borderRadius="1rem"
              border="3px solid #71aef0"
              zIndex="1"
              p={{ base: "1rem", md: "2rem" }}
              w={{ base: "90%", md: "60rem", lg: "80rem" }}
              minW={{ base: "90%", md: "40rem" }}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                mt="1rem"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Heading
                  mr={{ base: "0", md: "1rem" }}
                  mb={{ base: "1rem", md: "0" }}
                  h="3rem"
                  className="switch"
                >
                  {isCompany ? "Estudiante" : "Estudiante"}
                </Heading>
                <Switch
                  isChecked={isCompany}
                  onChange={handleSwitch}
                  size="lg"
                />
                <Heading
                  ml={{ base: "0", md: 4 }}
                  mt={{ base: "1rem", md: "0" }}
                  h="3rem"
                  className="switch"
                >
                  Empresa
                </Heading>
              </Flex>
              <VStack>
                <h1 style={{ textAlign: "center" }}>
                  Registro de usuario bolsa de trabajo
                </h1>
              </VStack>
              {isCompany ? <RegisterCompany /> : <RegisterStudent />}
            </Box>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}
