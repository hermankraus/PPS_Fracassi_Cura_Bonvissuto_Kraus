import { useState, useEffect } from "react";
import {
  Container,
  Heading,
  VStack,
  Flex,
  FormControl,
  Input,
  FormLabel,
  useBreakpointValue,
  Box,
  Select,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from 'react';
import * as Yup from "yup";
import { NavbarUser } from "../../components/navbar/navbar";

import Cookies from "js-cookie";
import { getStudentByLegajo, completeprofile } from "../../Axios/axios-student";
import useToaster from "../../hooks/useToaster";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import AnimatedButton from "../../shared/button";

export const StudentProfile = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { successToast, errorToast } = useToaster();

  const [studentData, setStudentData] = useState({
    Legajo: "",
    name: "",
    lastname: "",
  });

  const today = new Date();
  const legalAge = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const hundredYearsAgo = new Date(
    today.getFullYear() - 100,
    today.getMonth(),
    today.getDate()
  );


  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^\d+$/, "El número de teléfono solo puede contener números"),
    cellPhoneNumber: Yup.string()
      .matches(/^\d+$/, "El número de celular solo puede contener números")
      .required("El número de celular es requerido"),
    address: Yup.string().required("El domicilio es requerido"),
    addressNumber: Yup.string()
      .matches(/^\d+$/, "El número de domicilio solo puede contener números")
      .required("El número de domicilio es requerido"),
    floor: Yup.string()
    .matches(/^\d+$/, "El piso solo puede contener números")
      .required("El piso es requerido"),
    flat: Yup.string()
    .matches(/^\d+$/, "El departamento solo puede contener números")
    .required("El departamento es requerido"),
    country: Yup.string().required("El país es requerido"),
    province: Yup.string().required("La provincia es requerida"),
    city: Yup.string().required("La ciudad es requerida"),
    dateOfBirth: Yup.date()
      .max(legalAge, "Debe ser mayor de edad")
      .min(
        hundredYearsAgo,
        "La fecha de nacimiento no puede ser hace más de 100 años"
      )
      .required("La fecha de nacimiento es requerida"),
    maritalStatus: Yup.string().required("El estado civil es requerido"),
    gender: Yup.string().required("El género es requerido"),
    career: Yup.string().required("La carrera es requerida"),
    approvedSubjects: Yup.string()
      .matches(/^\d+$/, "Debe ser un número")
      .required("Las materias aprobadas son requeridas"),
    averageWithFails: Yup.string()
      .matches(/^\d+$/, "Debe ser un número")
      .required("El promedio con aplazos es requerido"),
    averageWithoutFails: Yup.string()
      .matches(/^\d+$/, "Debe ser un número")
      .required("El promedio con aplazos es requerido"),

    yearOfStudy: Yup.string()
      .matches(/^\d+$/, "Debe ser un número")
      .required("Los años de estudio son requeridos"),

    turn: Yup.string().required("El turno es requerido"),
    curriculumPlan: Yup.string().required("El plan de estudios es requerido"),
    yearOfEntry: Yup.string()
      .matches(/^\d+$/, "Debe ser un número")
      .required("El año de ingreso es requerido"),
    biography: Yup.string().required("La biografía es requerida"),
    secondaryTitle: Yup.string().required("El título secundario es requerido"),
    githubUrl: Yup.string()
      .url("URL de Github inválida"),
    linkedUrl: Yup.string()
      .url("URL de LinkedIn inválida")
  });

  const legajo = Cookies.get("legajo");
  const Role = Cookies.get("role");
  useEffect(() => {
    const fetchStudentData = async () => {
      if (legajo) {
        try {
          const response = await getStudentByLegajo(legajo);
          const student = response.data;

          setStudentData(student);
          console.log(studentData);
        } catch (error) {
          console.error("Error al obtener los datos del estudiante:", error);
        }
      }
    };
    fetchStudentData();
  }, [legajo]);
  console.log(studentData.name);

  const studentProfileFormHandler = async (values, { setSubmitting }) => {
    const userData = {
      Legajo: legajo,
      phoneNumber: values.phoneNumber,
      cellPhoneNumber: values.cellPhoneNumber,
      address: values.address,
      addressNumber: values.addressNumber,
      floor: values.floor,
      flat: values.flat,
      country: values.country,
      province: values.province,
      city: values.city,
      dateOfBirth: values.dateOfBirthto,
      maritalStatus: values.maritalStatus,
      gender: values.gender,
      career: values.career,
      approvedSubjects: values.approvedSubjects,
      averageWithFails: values.averageWithFails,
      averageWithoutFails: values.averageWithoutFails,
      yearOfStudy: values.yearOfStudy,
      turn: values.turn,
      curriculumPlan: values.curriculumPlan,
      yearOfEntry: values.yearOfEntry,
      biography: values.biography,
      secondaryTitle: values.secondaryTitle,
      githubUrl: values.githubUrl,
      linkedUrl: values.linkedUrl,
    };
    //console.log(values);
    try {
      setSubmitting(true);
      const response = await completeprofile(userData);
      console.log("Datos del estudiante actualizados:", response.data);
      successToast("Actualización exitosa");
    } catch (error) {
      console.error("Error al actualizar los datos del estudiante:", error);
      errorToast("Error en la actualización de su perfil");
    } finally {
      setSubmitting(false);
    }
  };
  
  const formWidth = useBreakpointValue({ base: "100%", md: "80%" });
  return (
    <>
      <NavbarUser />
      <VStack spacing={0}>
        <Container mt={{ base: "2rem", lg: "8rem" }} textAlign="center" minW={{ base: "10rem", lg: "63rem" }} className={`${isDarkMode ? 'dark' : 'light'}`}>
          <Heading overflow="hidden" mb="1rem">
            Modificar Perfil
          </Heading>
          <Formik
            initialValues={{
              phoneNumber: "0",
              cellPhoneNumber: "",
              address: "",
              addressNumber: "",
              floor: "0",
              flat: "0",
              country: "Argentina",
              province: "",
              city: "",
              dateOfBirth: "",
              maritalStatus: "",
              gender: "",
              career: "",
              approvedSubjects: "",
              averageWithFails: "",
              averageWithoutFails: "",
              yearOfStudy: "",
              turn: "",
              curriculumPlan: "",
              yearOfEntry: "",
              biography: "",
              secondaryTitle: "",
              githubUrl: "https://github.com/",
              linkedUrl: "https://linkedin.com/",
            }}
            validationSchema={validationSchema}
            onSubmit={studentProfileFormHandler}
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
                    <FormControl>
                      <FormLabel>Legajo: {legajo}</FormLabel>
                      <FormLabel>
                        Nombre y Apellido: {studentData.name}{" "}
                        {studentData.lastname}
                      </FormLabel>
                      <FormLabel>Número de Telefono </FormLabel>
                      <Field
                        name="phoneNumber"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="phoneNumber" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Número de celular</FormLabel>
                      <Field
                        name="cellPhoneNumber"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="cellPhoneNumber" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Domicilio</FormLabel>
                      <Field

                        name="address"
                        as={Input}
                        className={`custom-input ${isDarkMode ? "custom-input" : ""}`}

                        variant="filled"
                      />
                      <ErrorMessage name="address" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Número de domicilio</FormLabel>
                      <Field
                        name="addressNumber"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="addressNumber" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Piso</FormLabel>
                      <Field
                        name="floor"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="floor" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Departamento</FormLabel>
                      <Field
                        name="flat"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="flat" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>País</FormLabel>
                      <Field
                        name="country"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="country" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Provincia</FormLabel>
                      <Field
                        name="province"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="province" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Ciudad</FormLabel>
                      <Field
                        name="city"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="city" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Fecha de nacimiento</FormLabel>
                      <Field
                        name="dateOfBirth"
                        as={Input}
                        className={`custom-input ${isDarkMode ? "custom-select" : ""}`}
                        variant="filled"
                        type="date"
                      />
                      <ErrorMessage name="dateOfBirth" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Estado Civil</FormLabel>
                      <Field
                        name="maritalStatus"
                        as={Select}
                        placeholder="Seleccione una opción"
                        className="custom-input"
                        variant="filled"
                      >
                        <option value="Casado">Casado/a</option>
                        <option value="Soltero">Soltero/a</option>
                        <option value="Divorciado">Divorciado/a</option>
                        <option value="Viudo">Viudo/a</option>
                        <option value="Otros">Otros</option>
                      </Field>
                      <ErrorMessage name="maritalStatus" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Género</FormLabel>
                      <Field
                        name="gender"
                        as={Select}
                        placeholder="Seleccione una opción"
                        className={`custom-input ${isDarkMode ? "custom-select" : ""}`}
                        variant="filled"
                      >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otros">Otros</option>
                      </Field>
                      <ErrorMessage name="gender" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Carrera</FormLabel>
                      <Field
                        name="career"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="career" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Materias Aprobadas</FormLabel>
                      <Field
                        name="approvedSubjects"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="approvedSubjects" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Promedio con Aplazos</FormLabel>
                      <Field
                        name="averageWithFails"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="averageWithFails" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Promedio sin Aplazos</FormLabel>
                      <Field
                        name="averageWithoutFails"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage
                        name="averageWithoutFails"
                        component="div"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Año de Estudio</FormLabel>
                      <Field
                        name="yearOfStudy"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="yearOfStudy" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Turno</FormLabel>
                      <Field
                        name="turn"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="turn" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Plan de Estudio</FormLabel>
                      <Field
                        name="curriculumPlan"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="curriculumPlan" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Año de Ingreso</FormLabel>
                      <Field
                        name="yearOfEntry"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="yearOfEntry" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Biografía</FormLabel>
                      <Field
                        name="biography"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="biography" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Título Secundario</FormLabel>
                      <Field
                        name="secondaryTitle"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="secondaryTitle" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>URL de Github</FormLabel>
                      <Field
                        name="githubUrl"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="githubUrl" component="div" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>URL de LinkedIn</FormLabel>
                      <Field
                        name="linkedUrl"
                        as={Input}
                        className="custom-input"
                        variant="filled"
                      />
                      <ErrorMessage name="linkedUrl" component="div" />
                    </FormControl>
                  </Flex>
                  <Flex justifyContent="center" mt={6}>
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
    </>
  );
};
