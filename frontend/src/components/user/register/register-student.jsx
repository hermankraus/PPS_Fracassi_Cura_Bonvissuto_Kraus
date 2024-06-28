import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Spinner,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerNewStudent } from "../../../Axios/axios-student";
import "./register.css";
import useToaster from "../../../hooks/useToaster";
import { ThemeContext } from "../../context/theme-context/theme-context";

const RegisterStudent = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { successToast, errorToast } = useToaster();

  const loginHandler = async (values) => {
    const newUser = {
      Legajo: values.studentFileNumber,
      Name: values.studentName,
      Lastname: values.studentSurname,
      email: values.studentEmail,
      password: values.studentPassword,
      DocumentNumber: values.studentDNI,
      DocumentType: values.studentDocumentType,
      Gender: values.studentGender,
      Cuil: values.studentCuil,
      State: "Pending",
    };
    setIsLoading(true);

    try {
      await registerNewStudent(newUser);
      successToast("Registro exitoso, aguarde confirmacion");
      navigate("/AccountAuth");
    } catch (error) {
      errorToast("Registro incorrecto, corrobore datos.");
    }

    setIsLoading(false);
  };

  const today = new Date();
  const legalAge = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const hundredYearsAgo = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());


  const validationSchema = Yup.object({
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
    studentDocumentType: Yup.string().required(
      "El tipo de documento es requerido"
    ),
    studentDNI: Yup.string()
      .matches(/^\d+$/, "El número de documento solo puede contener números")
      .required("El documento de identidad es requerido"),
    studentFileNumber: Yup.string().required("El legajo es requerido"),
    studentEmail: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo es requerido"),
    studentAddress: Yup.string().required("El domicilio es requerido"),
    studentCuil: Yup.string()
      .matches(/^\d{11}$/, "El CUIL debe tener exactamente 11 dígitos")
      .required("El CUIL es requerido"),
    studentPhone: Yup.string()
      .matches(/^\d+$/, "El número de teléfono solo puede contener números")
      .required("El número de teléfono es requerido"),
    studentBirth: Yup.date()
      .max(legalAge, "Debe ser mayor de edad")
      .min(hundredYearsAgo, "La fecha de nacimiento no puede ser hace más de 100 años")
      .required("La fecha de nacimiento es requerida"),
    studentGender: Yup.string().required("El sexo es requerido"),
    studentPassword: Yup.string()
      .required("La contraseña es requerida")
      .matches(
        /^(?=.*[A-Z])(?=.*\d).{6,}$/,
        "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y un número"
      ),
    studentPasswordCheck: Yup.string()
      .oneOf(
        [Yup.ref("studentPassword"), null],
        "Las contraseñas deben coincidir"
      )
      .required("Repetir la contraseña es requerido"),
  });

  const formWidth = useBreakpointValue({ base: "100%", md: "80%" });

  return (
    <Container maxW="container.lg" p={4} className={isDarkMode ? "dark" : "light"}>
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
          studentPassword: "",
          studentPasswordCheck: "",
        }}
        validationSchema={validationSchema}
        onSubmit={loginHandler}
      >
        <Form>
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
                  className={`custom-input ${isDarkMode ? "custom-select" : ""}`}
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
              direction={{ base: "column", md: "row" }}
              gap={4}
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              mb={4}
              className="register-label-two"
            >
              <FormControl>
                <FormLabel>Legajo</FormLabel>
                <Field
                  name="studentFileNumber"
                  as={Input}
                  className="custom-input"
                  variant="filled"
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
              direction={{ base: "column", md: "row" }}
              gap={4}
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              mb={4}
              className="register-label-three"
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
                  className={`custom-input ${isDarkMode ? "custom-select" : ""}`}
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
                  className={`custom-input ${isDarkMode ? "custom-select" : ""}`}
                  variant="filled"
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otros">Otros</option>
                </Field>
                <ErrorMessage name="studentGender" component="div" />
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
                  name="studentPassword"
                  as={Input}
                  className="custom-input"
                  variant="filled"
                  type="password"
                />
                <ErrorMessage name="studentPassword" component="div" />
                <FormLabel>Repetir contraseña</FormLabel>
                <Field
                  name="studentPasswordCheck"
                  as={Input}
                  className="custom-input"
                  variant="filled"
                  type="password"
                />
                <ErrorMessage name="studentPasswordCheck" component="div" />
                {isLoading && <Spinner size="md" color="blue" />}
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
      </Formik>
    </Container>
  );
};

export default RegisterStudent;
