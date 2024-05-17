import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
  // Image,
} from "@chakra-ui/react";
import users from "../../../../base.json";
import { useNavigate } from "react-router-dom";
// import images from "../../../assets/constants/images";
import "./login-student.css";

const LoginStudent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const legajo = e.target.legajo.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
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
      alert("Usuario no encontrado.");
      return;
    }

    try {
      if (user.Role === "Estudiante") {
        navigate("/student");
      } else if (user.Role === "Admin") {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error al navegar:", error);
    }
  };

  return (
    <Container className="login-container">
      <Box className="login-container-card">
        {/* <Image className="login-img" src={images.loginBack} /> */}
        <VStack spacing={4} align="flex-start" w="full">
          <form onSubmit={handleSubmit}>
            <VStack
              spacing={1}
              align={["flex-start", "center"]}
              w="full"
              mb={3}
            >
              <Heading>Sos estudiante?</Heading>
              <Heading>Iniciar sesión</Heading>
              <Text>Ingresar con legajo y contraseña</Text>
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
                Iniciar sesión
              </Button>
              <Button
                borderRadius={6}
                bg="#265171"
                color="white"
                w="auto"
                alignSelf="center"
                onClick={() => navigate("/register")}
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

export default LoginStudent;
