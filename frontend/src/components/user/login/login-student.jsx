import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Text,
  Input,
  VStack,
} from "@chakra-ui/react";
import users from "../../../../base.json";
import { useNavigate } from "react-router-dom";
import useToaster from "../../../hooks/useToaster";
import "./login-student.css";
import { ThemeContext } from "../../context/themeContext/themeContext";
import { useContext } from "react";

const LoginStudent = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const { successToast, errorToast } = useToaster();

  const handleSubmit = (e) => {
    e.preventDefault();
    const legajo = e.target.legajo.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      errorToast(
        "La contraseña debe tener al menos 6 caracteres, una mayúscula y un número."
      );
      return;
    }

    const user = users.find(
      (user) =>
        (legajo === "120120" && user.Role === "Admin") ||
        (legajo !== "120120" &&
          user.Role === "Estudiante" &&
          user.Legajo === legajo)
    );

    if (!user) {
      console.log("pase por aca");
      errorToast("Usuario no encontrado.");
      return;
    }

    try {
      if (user.Role === "Estudiante") {
        console.log("pase por aca");
        successToast("Inicio de sesión exitoso", "Bienvenido");
        navigate("/student");
      } else if (user.Role === "Admin") {
        successToast("Inicio de sesión exitoso", "Bienvenido");
        navigate("/admin");
      }
    } catch (error) {
      errorToast("Error al navegar: " + error.message);
      console.error("Error al navegar:", error);
    }
  };
  ////FIX ME TOASTER -> USAR EN EL OTRO LOGIN TAMBIEN.
  return (
    <div>
      <Container>
        <Box className="login-container-card">
          <VStack spacing={4} align="flex-start" w="full">
            <form onSubmit={handleSubmit}>
              <VStack
                spacing={1}
                align={["flex-start", "center"]}
                minW="19rem"
                minH="2rem"
                justifyContent="center"
                alignItems="center"
                className={isDarkMode ? "dark-ls" : "light-ls"}
              >
                <Text mb="1rem" fontSize={20}>
                  Iniciar sesión con legajo y contraseña
                </Text>
                <FormControl>
                  <FormLabel>Legajo</FormLabel>
                  <Input
                    className="custom-input"
                    variant="filled"
                    name="legajo"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Contraseña</FormLabel>
                  <Input
                    className="custom-input"
                    variant="filled"
                    type="password"
                    name="password"
                    mb="1rem"
                  />
                </FormControl>
              </VStack>

              <HStack
                className="button-container"
                justify="space-between"
                w="full"
              >
                <Button
                  type="submit"
                  bg="#265171"
                  color="white"
                  minW="8rem"
                  minH="2rem"
                  borderRadius={6}
                  fontSize={16}
                  ml="1rem"
                  mb="1rem"
                  cursor="pointer"
                >
                  Iniciar sesión
                </Button>
                <Button
                  fontSize={16}
                  minW="8rem"
                  minH="2rem"
                  borderRadius={6}
                  bg="#265171"
                  color="white"
                  onClick={() => navigate("/register")}
                  mr="1rem"
                  mb="1rem"
                  cursor="pointer"
                >
                  Registrate
                </Button>
              </HStack>
            </form>
          </VStack>
        </Box>
      </Container>
    </div>
  );
};

export default LoginStudent;
