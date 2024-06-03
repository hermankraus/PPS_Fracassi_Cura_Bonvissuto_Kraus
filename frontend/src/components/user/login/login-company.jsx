import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import users from "../../../../base.json";
import { useNavigate } from "react-router-dom";
import "./login-company.css";
import { ThemeContext } from "../../context/theme-context/theme-context";
import { useContext } from "react";

const LoginCompany = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "La contraseña debe tener al menos 6 caracteres, una mayúscula y un número."
      );
      return;
    }

    const user = users.find(
      (user) => user.Email === email && user.Role === "Empresa"
    );

    if (!user) {
      alert("No se encontró un usuario con rol de empresa.");
      return;
    }

    // if (user.password !== password) {
    //   alert("Contraseña incorrecta.");
    //   return;
    // }

    // Aquí puedes realizar otras validaciones o acciones específicas para la empresa

    // Navegación exitosa
    navigate("/company");
  };

  return (
    <Container className="login-container-company">
      <Box className="login-container-card-company ">
        <VStack spacing={4}>
          <form onSubmit={handleSubmit}>
            <VStack
              spacing={1}
              align="flex-start"
              maxW="19rem"
              minH="2rem"
              justifyContent="center"
              textAlign={{base: "center"}}
              className={isDarkMode ? "dark-ls" : "light-ls"}
            >
              <Text mb="1rem" fontSize={{base: "15px", lg: "20px"}} >
                Iniciar sesión con email y contraseña
              </Text>
              <FormControl>
              <FormLabel textAlign={{base: "center", lg: "left"}}>
                Email
                </FormLabel>
                <Input className="custom-input" variant="filled" name="email" />
              </FormControl>
              <FormControl>
              <FormLabel textAlign={{base: "center", lg: "left"}}>Contraseña</FormLabel>
                <Input
                  mb="1rem"
                  className="custom-input"
                  variant="filled"
                  type="password"
                  name="password"
                />
              </FormControl>
            </VStack>
            <Stack
              className="button-container"
              justify="space-between"
              direction={{ base: "column", lg: "row" }}
              alignItems="center"
            >
              <Button
                type="submit"
                bg="#265171"
                color="white"
                maxW="8rem"
                minH="2rem"
                borderRadius={6}
                fontSize={16}
                ml="1rem"
                mb="1rem"
                cursor="pointer"
                className="login-company"
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
                mr={{base: "-1rem", lg: "1rem"}}
                mb="1rem"
                cursor="pointer"
                className="login-company"
                display={{base: "row"}}
              >
                Registrate
              </Button>
            </Stack>
          </form>
        </VStack>
      </Box>
    </Container>
  );
};

export default LoginCompany;
