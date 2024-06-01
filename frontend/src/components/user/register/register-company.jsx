import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./register.css";
import { registerNewCompany } from "../../../Axios/axios-company";


const RegisterCompany = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
    CompanyCuit: Yup.string()
      .matches(/^\d+$/, "El número de CUIL solo puede contener números")
      .required("El CUIL es requerido"),
    CompanyCompanyName: Yup.string().required("El nombre es requerido"),
    CompanyBusinessName: Yup.string().required("La razon social es requerida"),
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

  return (
    <Container minW="75rem" w="10rem" zIndex={1} p={2}>
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
            <Flex
              gap={4}
              minW="70rem"
              w="74rem"
              className="register-label-one"
              zIndex={5}
              justifyContent="center"
              alignItems="center"
              alignContent="center"
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
                <FormLabel>Razon Social</FormLabel>
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
              gap={4}
              minW="70rem"
              w="74rem"
              className="register-label-two"
              zIndex={5}
              justifyContent="center"
              alignItems="center"
            >
              <FormControl>
                <FormLabel>Domicilio Legal</FormLabel>
                <Field
                  name="CompanyAddress"
                  as={Input}
                  className="custom-input"
                  variant="filled"
                  gap="2rem"
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
              gap={4}
              minW="70rem"
              w="74rem"
              className="register-label-four"
              zIndex={5}
              justifyContent="center"
              alignItems="center"
            >
              <FormControl>
                <FormLabel>Contraseña</FormLabel>
                <Field
                  name="CompanyPassword"
                  as={Input}
                  className="custom-input"
                  variant="filled"
                  type="password"
                  w="30rem"
                />

                <ErrorMessage name="CompanyPassword" component="div" />

                <FormLabel>Repetir contraseña</FormLabel>
                <Field
                  name="companyPasswordCheck"
                  as={Input}
                  className="custom-input"
                  variant="filled"
                  type="password"
                  w="30rem"
                />
                <ErrorMessage name="companyPasswordCheck" component="div" />

                {isLoading && <Spinner size="md" color="teal" />}
                <Button
                  type="submit"
                  colorScheme="teal"
                  isLoading={isLoading}
                  loadingText="Registrando..."
                  bottom={9}
                  ml="12rem"
                  h="4rem"
                  w="15rem"
                >
                  Registrar
                </Button>
              </FormControl>
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterCompany;