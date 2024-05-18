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

const RegisterCompany = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    companyName: Yup.string().required("El nombre es requerido"),
    companyBusinessName: Yup.string().required("La razon social es requerida"),

    companyEmail: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo es requerido"),
    companyAddress: Yup.string().required("El domicilio es requerido"),
    companyCuit: Yup.string()
      .matches(/^\d+$/, "El número de CUIL solo puede contener números")
      .required("El CUIL es requerido"),
    companyPassword: Yup.string()
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
              companyName: "",
              companyBusinessName: "",
              companyEmail: "",
              companyAddress: "",
              companyCuit: "",
              companyPassword: "",
              companyPasswordCheck: "",
            }}
            validationSchema={validationSchema}
            onSubmit={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate("/account-auth");
                setIsLoading(false);
              }, 10000);
            }}
          >
            <Form>
              <Container className="register-label-one">
                <FormControl>
                  <FormLabel>Nombre</FormLabel>
                  <Field
                    name="companyName"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="companyName" component="div" />
                </FormControl>

                <FormControl>
                  <FormLabel>Razon Social</FormLabel>
                  <Field
                    name="companyBusinessName"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="companyBusinessName" component="div" />
                </FormControl>

                <FormControl>
                  <FormLabel>E-mail</FormLabel>
                  <Field
                    name="companyEmail"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="companyEmail" component="div" />
                </FormControl>
              </Container>
              <Container className="register-label-two">
                <FormControl>
                  <FormLabel>Domicilio Legal</FormLabel>
                  <Field
                    name="companyAddress"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="companyAddress" component="div" />
                </FormControl>
                <FormControl>
                  <FormLabel>CUIT</FormLabel>
                  <Field
                    name="companyCuit"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                  />
                  <ErrorMessage name="companyCuit" component="div" />
                </FormControl>
                <FormControl>
                  <FormLabel>Contraseña</FormLabel>
                  <Field
                    name="companyPassword"
                    as={Input}
                    className="custom-input"
                    variant="filled"
                    type="password"
                  />
                  <ErrorMessage name="companyPassword" component="div" />
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
