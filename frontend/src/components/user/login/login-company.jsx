import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context/theme-context";
import { useContext } from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import LoginApi from "../../../Axios/login-service";
import Cookies from "js-cookie";
import useToaster from "../../../hooks/useToaster";
import AnimatedButton from "../../../shared/button";

const LoginCompany = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const { successToast, errorToast } = useToaster();

  const loginHandler = async (values) => {
    const userData = {
      Legajo: values.companyEmail,
      password: values.companyPassword,
    };

    try {
      const response = await LoginApi(userData);
      console.log(response);
      const token = response.data.token;

      const Role = response.data.role;
      const State = response.data.state;
      const cuit = response.data.cuit;

      Cookies.set("token", token, { expires: 100 });
      Cookies.set("cuit", cuit);

      if (Role === "Company" && State === "Pending") {
        navigate("/AccountAuth");
      }
      if (State == "Accepted") {
        successToast("Inicio Exitoso");
        navigate("/company/my-profile");
      }
    } catch (error) {
      errorToast("Error al iniciar sesión: " + error.message);
      console.log("Error al iniciar sesion", error);
    }
  };
  const validationSchema = Yup.object({
    companyEmail: Yup.string().required("El email es requerido"),
    companyPassword: Yup.string()
      .required("La contraseña es requerida")
      .matches(
        /^(?=.*[A-Z])(?=.*\d).{6,}$/,
        "La contraseña debe tener al menos 6 caracteres, una mayúscula y un número"
      ),
  });

  return (
    <Container className="login-container-company">
      <Box className="login-container-card-company ">
        <VStack spacing={4}>
          <Formik
            initialValues={{
              companyEmail: "",
              companyPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={loginHandler}
          >
            <Form>
              <VStack
                spacing={1}
                align="flex-start"
                maxW="19rem"
                minH="2rem"
                justifyContent="center"
                textAlign={{ base: "center" }}
                className={isDarkMode ? "dark" : "light"}
              >
                <Text mb="1rem" fontSize={{ base: "15px", lg: "20px" }}>
                  Iniciar sesión con email y contraseña
                </Text>
                <FormControl>
                  <FormLabel textAlign={{ base: "center", lg: "left" }}>
                    Email
                  </FormLabel>
                  <Field
                    className="custom-input"
                    as={Input}
                    variant="filled"
                    name="companyEmail"
                    autoComplete = "username"
                  />
                  <ErrorMessage
                    name="companyEmail"
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
                    name="companyPassword"
                    mb="1rem"
                    autoComplete = "current-password"
                  />
                  <ErrorMessage
                    name="companyPassword"
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
                  ml="1rem"
                  mb="1rem"
                  mt="0.5rem"
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
                  mt="0.5rem"
                  onClick={() => navigate("/register")}
                  mr={{ base: "-1rem", lg: "1rem" }}
                  mb="1rem"
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
  );
};

export default LoginCompany;
