import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HStack, Image, VStack, Box, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import images from "../../assets/constants/images";
import "./home-page.css";
import AnimatedButton from "../../shared/button";

export const HomePage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handlerRegister = () => {
    navigate("/register");
  };

  const handlerLogin = () => {
    navigate("/login");
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Box
        overflowY="hidden"
        p={50}
        justifyContent="center"
        alignItems="center"
      >
        <HStack alignItems="center" justifyContent="center">
          <Box p={1}>
            <Image
              src={images.logo}
              alt="Logo"
              minW={{ lg: "20rem" }}
              maxH={{ lg: "20rem" }}
              className="img-logo"
              hideBelow="lg"
            />
          </Box>
          <VStack
            className="text-content"
            maxW={{ base: 400, lg: 500 }}
            position="relative"
            zIndex="50"
            overflow="hidden"
            minHeight="400px"
            height="auto"
          >
            <Image
              src={images.logo}
              alt="Logo"
              minW={{ base: "10rem" }}
              maxH={{ base: "10rem" }}
              className="img-logo"
              hideFrom="lg"
              zIndex={10}
              mt="1rem"
            />
            <Image
              className="img-home"
              src={images.bgImgLogin}
              alt="home-img"
              position="absolute"
              top="0"
              left="0"
              objectFit="cover"
              zIndex="1"
              minH={{ base: "50rem", lg: "30rem" }}
              maxW={{ base: "40rem" }}
            />
            <Box
              position="relative"
              zIndex="2"
              color="white"
              textAlign="center"
              p={10}
              minW="10rem"
              mt="1rem"
              alignContent="center"
              justifyContent="center"
              sx={{
                textShadow: "2px 2px 0 black", // Sombra sólida
              }}
            >
              <Text fontSize={30} mb={10}>
                Bienvenido!
              </Text>
              <Text as="h4" mb={10}>
                Para poder facilitar el vínculo entre estudiantes universitarios
                y el sector empresarial se creó el Sistema Virtual de búsqueda
                de empleo para insertarse en el mundo laboral IT.
              </Text>
              <Text as="h4">
                Si no estás registrado, puedes{" "}
                <a onClick={handlerRegister}>registrarte aquí.</a>
              </Text>

              <AnimatedButton
                mt={30}
                w={140}
                h={10}
                borderRadius={50}
                cursor="pointer"
                bg="white"
                color="#265171"
                onClick={handlerLogin}
              >
                Iniciar sesión
              </AnimatedButton>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </div>
  );
};
