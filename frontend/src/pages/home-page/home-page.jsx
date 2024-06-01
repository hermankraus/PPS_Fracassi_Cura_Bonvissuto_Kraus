import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HStack, Button, Image, VStack, Box, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import images from "../../assets/constants/images";
import "./home-page.css";
import ThemeButton from "../../components/context/theme-button/theme-button";

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
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Box
        overflow-y="hidden"
        p={50}
        justifyContent="center"
        alignItems="center"
      >
        <HStack alignItems="center">
          <Box p={10}>
            <Image
              src={images.logo}
              alt="Logo"
              minW="20rem"
              maxW="20rem"
              ml="14rem"
              className="img-logo"
            />
          </Box>
          <VStack
            className="text-content"
            maxW={500}
            position="relative"
            zIndex="50"
            overflow="hidden"
            minHeight="400px"
            height="auto"
          >
            <Image
              className="img-home"
              src={images.bgImgLogin}
              alt="home-img"
              position="absolute"
              top="0"
              left="0"
              objectFit="cover"
              zIndex="1"
              minH="30rem"
            />
            <Box
              position="relative"
              zIndex="2"
              color="white"
              textAlign="center"
              p={10}
              w="24rem"
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

              <Button
                mt={30}
                onClick={handlerLogin}
                w={140}
                h={10}
                borderRadius={50}
                cursor="pointer"
                bg="white"
                color="#265171"
              >
                Iniciar sesión
              </Button>
            </Box>
          </VStack>
        </HStack>
        <Box mr="50rem">
          <ThemeButton />
        </Box>
      </Box>
    </div>
  );
};
