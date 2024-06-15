import {
  Container,
  Heading,
  Button,
  VStack,
  Flex,
  FormControl,
  Select,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavbarUser } from "../../components/navbar/navbar";

export const StudentProfile = () => {
  const validationSchema = Yup.object().shape({
    studentName: Yup.string()
      .matches(
        /^[a-zA-Z]+$/,
        "El nombre solo puede contener letras y no números"
      )
      .required("El nombre es requerido"),
    studentSurname: Yup.string()
      .matches(
        /^[a-zA-Z]+$/,
        "El apellido solo puede contener letras y no números"
      )
      .required("El apellido es requerido"),
    studentDocumentType: Yup.string().required("Dato requerido"),
    studentDNI: Yup.string()
      .matches(/^\d+$/, "El número de documento solo puede contener números")
      .required("Dato requerido"),
    studentFileNumber: Yup.string().required("El legajo es requerido"),
    studentEmail: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo es requerido"),
    studentAddress: Yup.string().required("El domicilio es requerido"),
    studentCuil: Yup.string()
      .matches(/^\d+$/, "El número de CUIL solo puede contener números")
      .required("El CUIL es requerido"),
    studentPhone: Yup.string()
      .matches(/^\d+$/, "El número de teléfono solo puede contener números")
      .required("El número de teléfono es requerido"),
    studentBirth: Yup.date().required("La fecha de nacimiento es requerida"),
    studentGender: Yup.string().required("El sexo es requerido"),
  });

  const onSubmit = (values) => {
    console.log("Formulario enviado:", values);
  };

  return (
    <>
      <NavbarUser />
      <VStack spacing={0}>
        <Container mt="8rem" textAlign="center" minW="63rem">
          <Heading overflow="hidden" mb="1rem">
            Modificar Perfil
          </Heading>
          <Formik
            initialValues={{
              studentName: "",
              studentSurname: "",
              studentDocumentType: "",
              studentDNI: "",
              studentFileNumber: "",
              studentEmail: "",
              studentAddress: "",
              studentCuil: "",
              studentPhone: "",
              studentBirth: "",
              studentGender: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Flex
                  gap={4}
                  maxW="80rem"
                  className="register-label-one"
                  zIndex={5}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Field
                      name="studentName"
                      as={Input}
                      className="custom-input"
                      variant="filled"
                    />
                    <ErrorMessage name="studentName" component="div" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Apellido</FormLabel>
                    <Field
                      name="studentSurname"
                      as={Input}
                      className="custom-input"
                      variant="filled"
                    />
                    <ErrorMessage name="studentSurname" component="div" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Tipo de documento</FormLabel>
                    <Field
                      name="studentDocumentType"
                      as={Select}
                      placeholder="Seleccione una opción"
                      className="custom-input"
                      variant="filled"
                    >
                      <option value="DNI">DNI</option>
                      <option value="LC">LC</option>
                      <option value="LE">LE</option>
                      <option value="PS">PS</option>
                    </Field>
                    <ErrorMessage name="studentDocumentType" component="div" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Documento de identidad</FormLabel>
                    <Field
                      name="studentDNI"
                      as={Input}
                      className="custom-input"
                      variant="filled"
                    />
                    <ErrorMessage name="studentDNI" component="div" />
                  </FormControl>
                </Flex>
                <Flex
                  gap={4}
                  className="register-label-two"
                  zIndex={5}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FormControl>
                    <FormLabel>Legajo</FormLabel>
                    <Field
                      name="studentFileNumber"
                      as={Input}
                      className="custom-input"
                      variant="filled"
                      gap="2rem"
                    />
                    <ErrorMessage name="studentFileNumber" component="div" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>E-mail</FormLabel>
                    <Field
                      name="studentEmail"
                      as={Input}
                      className="custom-input"
                      variant="filled"
                    />
                    <ErrorMessage name="studentEmail" component="div" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Domicilio en Rosario</FormLabel>
                    <Field
                      name="studentAddress"
                      as={Input}
                      className="custom-input"
                      variant="filled"
                    />
                    <ErrorMessage name="studentAddress" component="div" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>CUIL</FormLabel>
                    <Field
                      name="studentCuil"
                      as={Input}
                      className="custom-input"
                      variant="filled"
                    />
                    <ErrorMessage name="studentCuil" component="div" />
                  </FormControl>
                </Flex>
                <Flex
                  gap={4}
                  className="register-label-three"
                  zIndex={5}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FormControl>
                    <FormLabel>Número de teléfono</FormLabel>
                    <Field
                      name="studentPhone"
                      as={Input}
                      className="custom-input"
                      variant="filled"
                    />
                    <ErrorMessage name="studentPhone" component="div" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Fecha de nacimiento</FormLabel>
                    <Field
                      name="studentBirth"
                      as={Input}
                      className="custom-input"
                      variant="filled"
                      type="date"
                    />
                    <ErrorMessage name="studentBirth" component="div" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Seleccione el sexo</FormLabel>
                    <Field
                      name="studentGender"
                      as={Select}
                      placeholder="Seleccione una opción"
                      className="custom-input"
                      variant="filled"
                    >
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Otros">Otros</option>
                    </Field>
                    <ErrorMessage name="studentGender" component="div" />
                  </FormControl>
                </Flex>
                <Flex justifyContent="center" mt={6}>
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
                    className="login-student"
                    isLoading={isSubmitting}
                  >
                    Cargar mis datos
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Container>
      </VStack>
    </>
  );
};
