import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./register.css";
import registerNewStudent from "../../../Axios/register-new-student";

const RegisterStudent = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const { showToast, renderToast } = useToast();

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
      const response = await registerNewStudent(newUser);
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
      .matches(/^\d+$/, "El número de CUIL solo puede contener números")
      .required("El CUIL es requerido"),
    studentPhone: Yup.string()
      .matches(/^\d+$/, "El número de teléfono solo puede contener números")
      .required("El número de teléfono es requerido"),
    studentBirth: Yup.date().required("La fecha de nacimiento es requerida"),
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

  return (
    <Container minW="75rem" w="10rem" zIndex={1} p={2}>
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
            minW="70rem"
            w="74rem"
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
            minW="70rem"
            w="74rem"
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
              </Field>
              <ErrorMessage name="studentGender" component="div" />
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
                name="studentPassword"
                as={Input}
                className="custom-input"
                variant="filled"
                type="password"
                w="30rem"
              />
              <ErrorMessage name="studentPassword" component="div" />
              <FormLabel>Repetir contraseña</FormLabel>
              <Field
                name="studentPasswordCheck"
                as={Input}
                className="custom-input"
                variant="filled"
                type="password"
                w="30rem"
              />
              <ErrorMessage name="studentPasswordCheck" component="div" />

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
      </Formik>
    </Container>
  );
};

export default RegisterStudent;
