import React, { useContext } from "react";
import { Heading, Button, VStack, Container, FormLabel, Flex, FormControl, Input } from "@chakra-ui/react";
import { NavbarCompany } from "../../components/navbar/navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ThemeContext } from "../../components/context/theme-context/theme-context";

export const CompanyProfile = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const validationSchema = Yup.object().shape({
    companyCuit: Yup.string().required("El número de CUIT es requerido"),
    companyName: Yup.string().required("El nombre de la empresa es requerido"),
    companyBusinessName: Yup.string().required("La razón social es requerida"),
    companyAddress: Yup.string().required("El domicilio es requerido"),
    companyEmail: Yup.string().email("Correo electrónico inválido").required("El correo de contacto es requerido"),
    companyPhone: Yup.string().required("El número de teléfono es requerido"),
    companySite: Yup.string().required("La página web es requerida"),
    companyType: Yup.string().required("El tipo de empresa es requerido"),
    companyNumberEmployee: Yup.string().required("El número de empleados es requerido"),
  });

  const onSubmit = (values) => {
    console.log("Formulario enviado:", values);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <NavbarCompany />
      <VStack spacing={0}>
        <Container mt="8rem" textAlign="center" minW="63rem">
          <Heading overflow="hidden" mb="1rem">Modificar Perfil</Heading>
          <Formik
            initialValues={{
              companyCuit: "",
              companyName: "",
              companyBusinessName: "",
              companyAddress: "",
              companyEmail: "",
              companyPhone: "",
              companySite: "",
              companyType: "",
              companyNumberEmployee: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form >
              <Flex gap={4} maxW="80rem" className="register-label-one" zIndex={5} justifyContent="center" alignItems="center">
                <FormControl key="companyCuit">
                  <FormLabel>CUIT</FormLabel>

                  <Field name="companyCuit" type="text" variant="filled" as={Input}  className="custom-input" />

                  <ErrorMessage name="companyCuit" component="div" />
                </FormControl>
                <FormControl key="companyName">
                  <FormLabel>Nombre</FormLabel>
                  <Field name="companyName" type="text" as={Input} className="custom-input" variant="filled" />
                  <ErrorMessage name="companyName" component="div" />
                </FormControl>
                <FormControl key="companyBusinessName">
                  <FormLabel>Razón Social</FormLabel>
                  <Field name="companyBusinessName" type="text" as={Input} className="custom-input"variant="filled" />
                  <ErrorMessage name="companyBusinessName" component="div" />
                </FormControl>
                <FormControl key="companyAddress">
                  <FormLabel>Domicilio</FormLabel>
                  <Field name="companyAddress" type="text" as={Input} className="custom-input" variant="filled" />
                  <ErrorMessage name="companyAddress" component="div" />
                </FormControl>
              </Flex>
              <Flex gap={4} maxW="80rem" className="register-label-one" zIndex={5} justifyContent="center" alignItems="center">
                <FormControl key="companyEmail">
                  <FormLabel>Correo electrónico</FormLabel>
                  <Field name="companyEmail" type="email" as={Input} className="custom-input" variant="filled" />
                  <ErrorMessage name="companyEmail" component="div" />
                </FormControl>
                <FormControl key="companyPhone">
                  <FormLabel>Teléfono</FormLabel>
                  <Field name="companyPhone" type="text" as={Input} className="custom-input" variant="filled" />
                  <ErrorMessage name="companyPhone" component="div" />
                </FormControl>
                <FormControl key="companySite">
                  <FormLabel>Sitio web</FormLabel>
                  <Field name="companySite" type="text" as={Input} className="custom-input" variant="filled" />
                  <ErrorMessage name="companySite" component="div" />
                </FormControl>
              </Flex>
              <Flex gap={4} maxW="80rem" className="register-label-one" zIndex={5} justifyContent="center" alignItems="center">
                <FormControl key="companyType">
                  <FormLabel>Tipo de empresa</FormLabel>
                  <Field name="companyType" type="text" as={Input} className="custom-input" variant="filled" />
                  <ErrorMessage name="companyType" component="div" />
                </FormControl>
                <FormControl key="companyNumberEmployee">
                  <FormLabel>Número de empleados</FormLabel>
                  <Field name="companyNumberEmployee" type="text" as={Input} className="custom-input" variant="filled" />
                  <ErrorMessage name="companyNumberEmployee" component="div" />
                </FormControl>
              </Flex>
              <Flex gap={4} maxW="80rem" className="register-label-one" zIndex={5} justifyContent="center" alignItems="center">
                <Button type="submit" mt="1rem">Guardar cambios</Button>
              </Flex>
            </Form>
          </Formik>
        </Container>
      </VStack>

    </div>
  );
};

export default CompanyProfile;
