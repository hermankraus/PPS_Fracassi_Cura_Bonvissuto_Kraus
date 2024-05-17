import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import users from "../../../../base.json";
import { useNavigate } from "react-router-dom";
import "./login-company.css";

const LoginCompany = () => {
  const navigate = useNavigate();

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
        <VStack spacing={4} align="flex-start" w="full">
          <form onSubmit={handleSubmit}>
            <VStack
              spacing={1}
              align="flex-start"
              w="full"
              mb={3}
              justifyContent="center"
              alignItems="center"
            >
              <Heading>Sos empresa?</Heading>
              <Heading>Iniciar sesión</Heading>
              <Text>Ingresar con email y contraseña</Text>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input className="custom-input" variant="filled" name="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  className="custom-input"
                  variant="filled"
                  type="password"
                  name="password"
                />
              </FormControl>
            </VStack>
            <HStack
              className="button-container"
              justify="space-between"
              w="full"
              mt={10}
            >
              <Button
                type="submit"
                bg="#265171"
                color="white"
                w={["full", "auto"]}
                alignSelf="end"
                borderRadius={6}
              >
                Inicia sesión
              </Button>
              <Button
                borderRadius={6}
                bg="#265171"
                color="white"
                w="auto"
                alignSelf="center"
                onClick={() => navigate("/register-company")}
              >
                Registrate
              </Button>
            </HStack>
          </form>
        </VStack>
      </Box>
    </Container>
  );
};

export default LoginCompany;
