import { useContext, useEffect, useState } from "react";
import {
  Heading,
  Button,
  VStack,
  Container,
  FormLabel,
  Flex,
  FormControl,
  Input,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { NavbarCompany } from "../../components/navbar/navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import { GetCompanyByCuit, completeprofile } from "../../Axios/axios-company";
import useToaster from "../../hooks/useToaster";
import Cookies from "js-cookie";
import AnimatedButton from "../../shared/button";

export const CompanyProfile = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { successToast, errorToast } = useToaster();

  const [companyData, setCompanyData] = useState({
    cuit: "",
    companyName: "",
    contactEmail: "",
  });

  const validationSchema = Yup.object().shape({
    contactPhone: Yup.string()
      .required("El número de teléfono es requerido")
      .matches(/^\d+$/, "El número de teléfono solo puede contener números"),
    website: Yup.string()
      .url("URL inválida")
      .required("La página web es requerida"),
    type: Yup.string().required("El tipo de empresa es requerido"),
    numberOfEmployees: Yup.string()
      .required("El número de empleados es requerido")
      .matches(/^\d+$/, "El número de empleados solo puede contener números"),
  });

  const cuit = Cookies.get("cuit");
  useEffect(() => {
    const fetchCompanyData = async () => {
      if (cuit) {
        try {
          const data = await GetCompanyByCuit(cuit);
          setCompanyData(data);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            errorToast("Empresa no encontrada. Verifica el CUIT.");
          }
        }
      }
    };
    fetchCompanyData();
  }, []);

  const companyProfileFormHandler = async (values, { setSubmitting }) => {
    const userData = {
      cuit: cuit,
      contactPhone: values.contactPhone,
      website: values.website,
      type: values.type,
      numberOfEmployees: values.numberOfEmployees,
    };

    try {
      setSubmitting(true);
      const response = await completeprofile(userData);
      console.log("Datos del estudiante actualizados:", response.data);
      successToast("Actualización exitosa");
    } catch (error) {
      console.error("Error al actualizar los datos de la empresa:", error);
      errorToast("Error en la actualización de su perfil de empresa");
    } finally {
      setSubmitting(false);
    }
  };

  const formWidth = useBreakpointValue({ base: "100%", md: "80%" });

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <NavbarCompany />
      <VStack spacing={0}>
        <Container
          mt={{ base: "2rem", lg: "8rem" }}
          textAlign="center"
          justifyContent="center"
          minW={{ base: "10rem", lg: "63rem" }} className={`${isDarkMode ? "dark" : "light"}`}
        >
          <Heading overflow="hidden" mb="1rem">
            Modificar Perfil
          </Heading>
          <Formik
            initialValues={{
              contactPhone: companyData.contactPhone,
              website: "",
              type: "",
              numberOfEmployees: "",
            }}
            validationSchema={validationSchema}
            onSubmit={companyProfileFormHandler}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box width={formWidth} mx="auto">
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={4}
                    maxW="80rem"
                    className="register-label-one"
                    zIndex={5}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FormLabel>CUIT: {companyData.cuit}</FormLabel>
                    <FormLabel>Nombre: {companyData.companyName}</FormLabel>
                    <FormControl key="contactPhone">
                      <FormLabel>Teléfono</FormLabel>
                      <Field
                        name="contactPhone"
                        type="text"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                        defaultValue={companyData.contactPhone}
                      />
                      <ErrorMessage name="contactPhone" component="div" />
                    </FormControl>
                    <FormControl key="website">
                      <FormLabel>Sitio web</FormLabel>
                      <Field
                        name="website"
                        type="text"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                        defaultValue={companyData.website}
                      />
                      <ErrorMessage name="website" component="div" />
                    </FormControl>

                    <FormControl key="type">
                      <FormLabel>Tipo de empresa</FormLabel>
                      <Field
                        name="type"
                        type="text"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                        defaultValue={companyData.type}
                      />
                      <ErrorMessage name="type" component="div" />
                    </FormControl>
                    <FormControl key="numberOfEmployees">
                      <FormLabel>Número de empleados</FormLabel>
                      <Field
                        name="numberOfEmployees"
                        type="text"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                        defaultValue={companyData.numberOfEmployees}
                      />
                      <ErrorMessage name="numberOfEmployees" component="div" />
                    </FormControl>
                  </Flex>
                  <Flex
                    gap={4}
                    maxW="80rem"
                    zIndex={5}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <AnimatedButton
                      type="submit"
                      bg="#265171"
                      color="white"
                      mt="0.5rem"
                      minW="10rem"
                      minH="3rem"
                      borderRadius={6}
                      fontSize={16}
                      ml="1rem"
                      mb="1rem"
                      cursor="pointer"
                      className="login"
                      display={{ base: "row" }}
                      isLoading={isSubmitting}
                    >
                      Cargar mis datos
                    </AnimatedButton>
                  </Flex>
                </Box>
              </Form>
            )}
          </Formik>
        </Container>
      </VStack>
    </div>
  );
};
export default CompanyProfile;
