import { useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginApi from "../../../Axios/LoginService";
import useToaster from "../../../hooks/useToaster";
import { ThemeContext } from "../../context/themeContext/themeContext";
import "./login-student.css";

const LoginStudent = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const { successToast, errorToast } = useToaster();

  const loginHandler = async (values) => {
    const userData = {
      Legajo: values.studentFileNumber,
      password: values.studentPassword,
    };
    try {
      const response = await LoginApi(userData);

      const Role = response.data.role;
      const State = response.data.state;
      if (Role === "Administrator") {
        successToast("Inicio de sesión exitoso", "Bienvenido");
        navigate("/admin");
      }
      if (Role === "Student") {
        if (State === "Pending") {
          successToast("Inicio Exitoso, Welcome");
          navigate("/AccountAuth");
        } else {
          successToast("Inicio Exitoso, Welcome");
          navigate("/student");
        }
      } else {
        //navigate("/company");
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
          <VStack spacing={4} align="flex-start" w="full">
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
                    <Field
                      className="custom-input"
                      as={Input}
                      variant="filled"
                      name="studentFileNumber"
                    />
                    <ErrorMessage
                      name="studentFileNumber"
                      component="div"
                      className="error"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Contraseña</FormLabel>
                    <Field
                      className="custom-input"
                      as={Input}
                      variant="filled"
                      type="password"
                      name="studentPassword"
                    />
                    <ErrorMessage
                      name="studentPassword"
                      component="div"
                      className="error"
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
                    onClick={() => navigate("/register-student")}
                    mr="1rem"
                    mb="1rem"
                    cursor="pointer"
                  >
                    Registrate
                  </Button>
                </HStack>
              </Form>
            </Formik>
          </VStack>
        </Box>
      </Container>
    </div>
  );
};

export default LoginStudent;
