import { useContext, useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Stack,
  Text,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginApi from "../../../Axios/login-service";
import useToaster from "../../../hooks/useToaster";
import { ThemeContext } from "../../context/theme-context/theme-context";
import Cookies from "js-cookie";
import "../../context/theme-context/theme-context.css"
import AnimatedButton from "../../../shared/button";

const LoginStudent = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const { successToast, errorToast } = useToaster();
  const [, setIsAdmin] = useState(false);

  const loginHandler = async (values) => {
    const userData = {
      Legajo: values.studentFileNumber,
      password: values.studentPassword,
    };
    try {
      const response = await LoginApi(userData);
      const token = response.data.token;

      const Role = response.data.role;
      const State = response.data.state;
      const legajo = userData.Legajo;

      Cookies.set("token", token, { expires: 100 });
      Cookies.set("legajo", legajo);


      if (Role === "Administrator") {
        setIsAdmin(true);
        navigate("/admin-page");
      }
      if (Role === "Student") {
        if (State === "Pending") {
          navigate("/AccountAuth");
        } else {
          successToast("Inicio Exitoso");
          navigate("/student/my-profile");
        }
      }
    } catch (error) {
      errorToast("Error al iniciar sesión: " + error.message);
      console.error("Error al iniciar sesión:", error);
    }
  };

  const validationSchema = Yup.object({
    studentFileNumber: Yup.string().required("El legajo es requerido"),
    studentPassword: Yup.string()
      .required("La contraseña es requerida")
      .matches(
        /^(?=.*[A-Z])(?=.*\d).{6,}$/,
        "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y un número"
      ),
  });

  return (
    <div>
      <Container>
        <Box className="login-container-card">
          <VStack spacing={4} w="full">
            <Formik
              initialValues={{
                studentFileNumber: "",
                studentPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={loginHandler}
            >
              <Form>
                <VStack
                  spacing={1}
                  maxW="19rem"
                  minH="2rem"
                  justifyContent="center"
                  textAlign={{ base: "center" }}
                  className={isDarkMode ? "dark" : "light"}
                >
                  <Text mb="1rem" fontSize={{ base: "15px", lg: "20px" }}>
                    Iniciar sesión con legajo y contraseña
                  </Text>
                  <FormControl>
                    <FormLabel textAlign={{ base: "center", lg: "left" }}>
                      Legajo
                    </FormLabel>
                    <Field
                      className="custom-input"
                      as={Input}
                      variant="filled"
                      name="studentFileNumber"
                      autoComplete = "username"
                      
                    />
                    <ErrorMessage
                      name="studentFileNumber"
                      component="div"
                      className="error"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel textAlign={{ base: "center", lg: "left" }}>
                      Contraseña
                    </FormLabel>
                    <Field
                      className="custom-input"
                      as={Input}
                      variant="filled"
                      type="password"
                      name="studentPassword"
                      mb="1rem"
                      autoComplete = "current-password"
                    />
                    <ErrorMessage
                      name="studentPassword"
                      component="div"
                      className="error"
                    />
                  </FormControl>
                </VStack>
                <Stack
                  className="button-container"
                  justify="space-between"
                  direction={{ base: "column", lg: "row" }}
                  alignItems="center"
                >
                  <AnimatedButton
                    type="submit"
                    bg="#265171"
                    color="white"
                    minW="8rem"
                    minH="2.5rem"
                    borderRadius={6}
                    fontSize={16}
                    mt="0.5rem"
                    ml="1rem"
                    mb="1rem"
                    cursor="pointer"
                    className="login"
                  >
                    Iniciar sesión
                  </AnimatedButton>
                  <AnimatedButton
                    fontSize={16}
                    minW="8rem"
                    minH="2.5rem"
                    borderRadius={6}
                    bg="#265171"
                    color="white"
                    onClick={() => navigate("/register")}
                    mr={{ base: "-1rem", lg: "1rem" }}
                    mb="1rem"
                    mt="0.5rem"

                    cursor="pointer"
                    className="login"
                    display={{ base: "row" }}
                  >
                    Registrate
                  </AnimatedButton>
                </Stack>
              </Form>
            </Formik>
          </VStack>
        </Box>
      </Container>
    </div>
  );
};

export default LoginStudent;
