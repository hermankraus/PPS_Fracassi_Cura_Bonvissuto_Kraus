import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/theme-context/theme-context";
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./register.css";
import { registerNewCompany } from "../../../Axios/axios-company";
import useToaster from "../../../hooks/useToaster";

const RegisterCompany = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { successToast, errorToast } = useToaster();

  const loginHandler1 = async (values) => {
    console.log("Form submitted");
    const newUser = {
      Cuit: values.CompanyCuit,
      CompanyName: values.CompanyCompanyName,
      BusinessName: values.CompanyBusinessName,
      Address: values.CompanyAddress,
      ContactEmail: values.CompanyContactEmail,
      password: values.CompanyPassword,
      State: "Pending",
    };
    setIsLoading(true);
    try {
      await registerNewCompany(newUser);
      navigate("/AccountAuth");
      successToast("Registro exitoso, aguarde confirmación");
    } catch (error) {
      errorToast("Registro incorrecto, corrobore datos.");
    }
    setIsLoading(false);
  };

  const validationSchema = Yup.object({
    CompanyCuit: Yup.string()
      .matches(/^\d{11}$/, "El CUIT debe tener exactamente 11 dígitos")
      .required("El CUIT es requerido"),
    CompanyCompanyName: Yup.string().required("El nombre es requerido"),
    CompanyBusinessName: Yup.string().required("La razón social es requerida"),
    CompanyAddress: Yup.string().required("El domicilio es requerido"),
    CompanyContactEmail: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo es requerido"),
    CompanyPassword: Yup.string()
      .required("La contraseña es requerida")
      .matches(
        /^(?=.*[A-Z])(?=.*\d).{6,}$/,
        "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y un número"
      ),
    companyPasswordCheck: Yup.string()
      .oneOf(
        [Yup.ref("CompanyPassword"), null],
        "Las contraseñas deben coincidir"
      )
      .required("Repetir la contraseña es requerido"),
  });

  const formWidth = useBreakpointValue({ base: "100%", md: "80%", lg: "70%" });

  return (
    <Container maxW="container.lg" p={4} className={isDarkMode ? "dark" : "light"}>
      <Formik
        initialValues={{
          CompanyCuit: "",
          CompanyCompanyName: "",
          CompanyBusinessName: "",
          CompanyAddress: "",
          CompanyContactEmail: "",
          CompanyPassword: "",
          companyPasswordCheck: "",
        }}
        validationSchema={validationSchema}
        onSubmit={loginHandler1}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Box width={formWidth} mx="auto">
              <Flex
                direction={{ base: "column", md: "row" }}
                gap={4}
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                mb={4}
                className="register-label-one"
              >
                <FormControl>
                  <FormLabel>Nombre</FormLabel>
                  <Field
                    name="CompanyCompanyName"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="CompanyCompanyName" component="div" />
                </FormControl>

                <FormControl>
                  <FormLabel>Razón Social</FormLabel>
                  <Field
                    name="CompanyBusinessName"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="CompanyBusinessName" component="div" />
                </FormControl>

                <FormControl>
                  <FormLabel>E-mail</FormLabel>
                  <Field
                    name="CompanyContactEmail"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="CompanyContactEmail" component="div" />
                </FormControl>
              </Flex>

              <Flex
                direction={{ base: "column", md: "row" }}
                gap={4}
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                mb={4}
                className="register-label-two"
              >
                <FormControl>
                  <FormLabel>Domicilio Legal</FormLabel>
                  <Field
                    name="CompanyAddress"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="CompanyAddress" component="div" />
                </FormControl>

                <FormControl>
                  <FormLabel>CUIT</FormLabel>
                  <Field
                    name="CompanyCuit"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="CompanyCuit" component="div" />
                </FormControl>
              </Flex>

              <Flex
                direction={{ base: "column", md: "row" }}
                gap={4}
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                className="register-label-four"
              >
                <FormControl>
                  <FormLabel>Contraseña</FormLabel>
                  <Field
                    name="CompanyPassword"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                    type="password"
                  />
                  <ErrorMessage name="CompanyPassword" component="div" />

                  <FormLabel>Repetir contraseña</FormLabel>
                  <Field
                    name="companyPasswordCheck"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                    type="password"
                  />
                  <ErrorMessage name="companyPasswordCheck" component="div" />

                  {isLoading && <Spinner size="md" color="teal" />}
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    loadingText="Registrando..."
                    mt={4}
                    w="full"
                  >
                    Registrar
                  </Button>
                </FormControl>
              </Flex>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterCompany;
