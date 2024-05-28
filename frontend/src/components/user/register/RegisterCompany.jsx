import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  Stack,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Register.css";
import images from "../../../assets/constants/images";
import registerNewCompany from "../../../Axios/registerNewCompany";

const RegisterCompany = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = async (values) => {
    const newUser = {
      // aca cada nombre del objeto tiene que coincidir con la variable del back
      CompanyName: values.CompanyName,
      BusinessName: values.BusinessName,
      ContactEmail: values.ContactEmail,
      Address: values.Address,
      Cuit: values.Cuit,
      password: values.Password,
      State: "Pending",
    };
    setIsLoading(true);

    try {
      const response = await registerNewCompany(newUser);
      navigate("/AccountAuth");

      console.log(response);
      console.log("Register successful: ", response.data);
    } catch (error) {
      console.log("esto devuelve", error);
      // showToast('Error', error.message, 'error');
    }

    setIsLoading(false);
  };

  const validationSchema = Yup.object({
    CompanyName: Yup.string().required("El nombre es requerido"),
    BusinessName: Yup.string().required("La razon social es requerida"),
    ContactEmail: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo es requerido"),
    Address: Yup.string().required("El domicilio es requerido"),
    Cuit: Yup.string()
      .matches(/^\d+$/, "El número de CUIL solo puede contener números")
      .required("El CUIL es requerido"),
    password: Yup.string()
      .required("La contraseña es requerida")
      .matches(
        /^(?=.*[A-Z])(?=.*\d).{6,}$/,
        "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y un número"
      ),
    companyPasswordCheck: Yup.string()
      .oneOf(
        [Yup.ref("companyPassword"), null],
        "Las contraseñas deben coincidir"
      )
      .required("Repetir la contraseña es requerido"),
  });

  return (
    <Container>
      <Box>
        <Stack>
          <Box
            justifyContent="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
            mt="1rem"
          >
            <Image
              src={images.logo}
              alt="Logo"
              w="14rem"
              h="4.5rem"
              p={0}
              mt={0}
            />
            <Heading>Registro de usuario bolsa de trabajo</Heading>
          </Box>
          <Formik
            initialValues={{
              CompanyName: "",
              BusinessName: "",
              ContactEmail: "",
              Address: "",
              Cuit: "",
              password: "",
              companyPasswordCheck: "",
            }}
            validationSchema={validationSchema}
            onSubmit={loginHandler}
          >
            <Form>
              <Container className="register-label-one">
                <FormControl>
                  <FormLabel>Nombre</FormLabel>
                  <Field
                    name="CompanyName"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="CompanyName" component="div" />
                </FormControl>

                <FormControl>
                  <FormLabel>Razon Social</FormLabel>
                  <Field
                    name="BusinessName"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="BusinessName" component="div" />
                </FormControl>

                <FormControl>
                  <FormLabel>E-mail</FormLabel>
                  <Field
                    name="ContactEmail"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="ContactEmail" component="div" />
                </FormControl>
              </Container>
              <Container className="register-label-two">
                <FormControl>
                  <FormLabel>Domicilio Legal</FormLabel>
                  <Field
                    name="Address"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="Address" component="div" />
                </FormControl>
                <FormControl>
                  <FormLabel>CUIT</FormLabel>
                  <Field
                    name="Cuit"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="Cuit" component="div" />
                </FormControl>
                <FormControl>
                  <FormLabel>Contraseña</FormLabel>
                  <Field
                    name="password"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                    type="password"
                  />
                  <ErrorMessage name="password" component="div" />
                  <FormLabel>Repetir contraseña</FormLabel>
                  <Field
                    name="companyPasswordCheck"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                    type="password"
                  />
                  <ErrorMessage name="companyPasswordCheck" component="div" />
                </FormControl>
              </Container>
              <Box display="flex" justifyContent="center" mt="1rem">
                {isLoading && <Spinner size="md" color="teal" />}
                <Button
                  type="submit"
                  colorScheme="teal"
                  isLoading={isLoading}
                  loadingText="Registrando..."
                >
                  Registrar
                </Button>
              </Box>
            </Form>
          </Formik>
        </Stack>
      </Box>
    </Container>
  );
};

export default RegisterCompany;
