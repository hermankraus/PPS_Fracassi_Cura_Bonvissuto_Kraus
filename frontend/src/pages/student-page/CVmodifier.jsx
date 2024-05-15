import { Box, Heading, Button, VStack } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const CVModifier = () => {
  const validationSchema = Yup.object().shape({
    nombreApellido: Yup.string().required(
      "El nombre y apellido son requeridos"
    ),
    tipoDocumento: Yup.string().required("El tipo de documento es requerido"),
    numeroDocumento: Yup.string().required(
      "El número de documento es requerido"
    ),
    telefono: Yup.string().required("El número de teléfono es requerido"),
    celular: Yup.string().required("El número de celular es requerido"),
    domicilioFamiliar: Yup.string().required(
      "El domicilio familiar es requerido"
    ),
    domicilioParticular: Yup.string().required(
      "El domicilio particular es requerido"
    ),
    fechaNacimiento: Yup.string().required(
      "La fecha de nacimiento es requerida"
    ),
    estadoCivil: Yup.string().required("El estado civil es requerido"),
    cuitCuil: Yup.string().required("El CUIT o CUIL es requerido"),
    sexo: Yup.string().required("El sexo es requerido"),
    datosCarrera: Yup.string().required(
      "Los datos de la carrera son requeridos"
    ),
  });

  const onSubmit = (values) => {
    console.log("Formulario enviado:", values);
  };

  return (
    <VStack spacing={4}>
      <Heading as="h3" size="lg" mb={6}>
        Modificar Perfil
      </Heading>

      <Formik
        initialValues={{
          nombreApellido: "",
          tipoDocumento: "",
          numeroDocumento: "",
          telefono: "",
          celular: "",
          domicilioFamiliar: "",
          domicilioParticular: "",
          fechaNacimiento: "",
          estadoCivil: "",
          cuitCuil: "",
          sexo: "",
          datosCarrera: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <VStack
            spacing={8}
            align="center"
            border="1px solid rgba(0, 0, 0, 0.4)"
            borderColor="gray.200"
            borderRadius="md"
            p={50}
          >
            <Box>
              <label htmlFor="nombreApellido" style={{ margin: "10px" }}>
                Nombre y Apellido
              </label>
              <Field
                type="text"
                id="nombreApellido"
                name="nombreApellido"
                style={{ margin: "10px" }}
              />
              <ErrorMessage
                name="nombreApellido"
                component="div"
                align="center"
              />
            </Box>
            <Box>
              <label htmlFor="tipoDocumento" style={{ margin: "10px" }}>
                Tipo de Documento
              </label>
              <Field
                as="select"
                id="tipoDocumento"
                name="tipoDocumento"
                style={{ margin: "10px" }}
              >
                <option value="">Selecciona un tipo de documento</option>
                <option value="DNI">DNI</option>
                <option value="LC">LC</option>
                <option value="LE">LE</option>
                <option value="PS">PS</option>
              </Field>
              <ErrorMessage
                name="tipoDocumento"
                component="div"
                align="center"
              />
            </Box>
            <Box>
              <label htmlFor="numeroDocumento" style={{ margin: "10px" }}>
                Número de Documento
              </label>
              <Field
                type="text"
                id="numeroDocumento"
                name="numeroDocumento"
                style={{ margin: "10px" }}
              />
              <ErrorMessage
                name="numeroDocumento"
                component="div"
                align="center"
              />
            </Box>
            <Box>
              <label htmlFor="telefono" style={{ margin: "10px" }}>
                Número de Teléfono
              </label>
              <Field
                type="text"
                id="telefono"
                name="telefono"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="telefono" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="celular" style={{ margin: "10px" }}>
                Número de Celular
              </label>
              <Field
                type="text"
                id="celular"
                name="celular"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="celular" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="domicilioFamiliar" style={{ margin: "10px" }}>
                Domicilio Familiar
              </label>
              <Field
                type="text"
                id="domicilioFamiliar"
                name="domicilioFamiliar"
                style={{ margin: "10px" }}
              />
              <ErrorMessage
                name="domicilioFamiliar"
                component="div"
                align="center"
              />
            </Box>
            <Box>
              <label htmlFor="domicilioParticular" style={{ margin: "10px" }}>
                Domicilio Particular
              </label>
              <Field
                type="text"
                id="domicilioParticular"
                name="domicilioParticular"
                style={{ margin: "10px" }}
              />
              <ErrorMessage
                name="domicilioParticular"
                component="div"
                align="center"
              />
            </Box>
            <Box>
              <label htmlFor="fechaNacimiento" style={{ margin: "10px" }}>
                Fecha de Nacimiento
              </label>
              <Field
                type="text"
                id="fechaNacimiento"
                name="fechaNacimiento"
                style={{ margin: "10px" }}
              />
              <ErrorMessage
                name="fechaNacimiento"
                component="div"
                align="center"
              />
            </Box>
            <Box>
              <label htmlFor="estadoCivil" style={{ margin: "10px" }}>
                Estado Civil
              </label>
              <Field
                type="text"
                id="estadoCivil"
                name="estadoCivil"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="estadoCivil" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="cuitCuil" style={{ margin: "10px" }}>
                CUIT o CUIL
              </label>
              <Field
                type="text"
                id="cuitCuil"
                name="cuitCuil"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="cuitCuil" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="sexo" style={{ margin: "10px" }}>
                Sexo
              </label>
              <Field
                type="text"
                id="sexo"
                name="sexo"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="sexo" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="datosCarrera" style={{ margin: "10px" }}>
                Datos de la Carrera
              </label>
              <Field
                type="text"
                id="datosCarrera"
                name="datosCarrera"
                style={{ margin: "10px" }}
              />
              <ErrorMessage
                name="datosCarrera"
                component="div"
                align="center"
              />
            </Box>
            <Button type="submit" colorScheme="blue" style={{ margin: "10px" }}>
              Guardar cambios
            </Button>
          </VStack>
        </Form>
      </Formik>
    </VStack>
  );
};
