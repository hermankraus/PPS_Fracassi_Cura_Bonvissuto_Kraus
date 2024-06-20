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
import { useNavigate } from "react-router-dom";
import "./login-company.css";
import { ThemeContext } from "../../context/theme-context/theme-context";
import { useContext } from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import LoginApi from "../../../Axios/login-service";
import Cookies from "js-cookie";

const LoginCompany = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

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

      Cookies.set("token", token, { expires: 7 });
      if (Role === "Company" && State === "Pending") {
        navigate("/AccountAuth");
      }
      if (State == "Accepted") {
        navigate("/company/my-profile");
      }
    } catch (error) {
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
                className={isDarkMode ? "dark-ls" : "light-ls"}
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
                  mr={{ base: "-1rem", lg: "1rem" }}
                  mb="1rem"
                  cursor="pointer"
                  className="login-company"
                  display={{ base: "row" }}
                >
                  Registrate
                </Button>
              </Stack>
            </Form>
          </Formik>
        </VStack>
      </Box>
    </Container>
  );
};

export default LoginCompany;
