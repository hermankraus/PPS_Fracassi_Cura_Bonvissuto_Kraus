import { Box, Heading, Button, VStack } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const CompanyProfile = () => {
  const validationSchema = Yup.object().shape({
    numeroCuit: Yup.string().required("El número de CUIT es requerido"),
    nombreEmpresa: Yup.string().required(
      "El nombre de la empresa es requerido"
    ),
    razonSocial: Yup.string().required("La razón social es requerida"),
    domicilioEmpresa: Yup.string().required("El domicilio es requerido"),
    email: Yup.string().required("El correo de contacto es requerido"),
    telefono: Yup.string().required("El número de teléfono es requerido"),
    webPage: Yup.string().required("La página web es requerida"),
    tipoEmpresa: Yup.string().required("El tipo de empresa es requerido"),
    cantidadEmpleados: Yup.string().required(
      "El número de empleados es requerido"
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
          numeroCuit: "",
          nombreEmpresa: "",
          razonSocial: "",
          domicilioEmpresa: "",
          email: "",
          telefono: "",
          webPage: "",
          tipoEmpresa: "",
          cantidadEmpleados: "",
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
              <label htmlFor="numeroCuit" style={{ margin: "10px" }}>
                CUIT
              </label>
              <Field
                type="text"
                id="numeroCuit"
                name="numeroCuit"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="numeroCuit" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="nombreEmpresa" style={{ margin: "10px" }}>
                Nombre
              </label>
              <Field
                type="text"
                id="nombreEmpresa"
                name="nombreEmpresa"
                style={{ margin: "10px" }}
              />
              <ErrorMessage
                name="nombreEmpresa"
                component="div"
                align="center"
              />
            </Box>
            <Box>
              <label htmlFor="razonSocial" style={{ margin: "10px" }}>
                Razón Social
              </label>
              <Field
                type="text"
                id="razonSocial"
                name="razonSocial"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="razonSocial" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="domicilioEmpresa" style={{ margin: "10px" }}>
                Domicilio
              </label>
              <Field
                type="text"
                id="domicilioEmpresa"
                name="domicilioEmpresa"
                style={{ margin: "10px" }}
              />
              <ErrorMessage
                name="domicilioEmpresa"
                component="div"
                align="center"
              />
            </Box>
            <Box>
              <label htmlFor="email" style={{ margin: "10px" }}>
                E-mail
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="email" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="telefono" style={{ margin: "10px" }}>
                Telefono
              </label>
              <Field
                type="number"
                id="telefono"
                name="telefono"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="telefono" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="webPage" style={{ margin: "10px" }}>
                Página Web
              </label>
              <Field
                type="text"
                id="webPage"
                name="webPage"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="webPage" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="tipoEmpresa" style={{ margin: "10px" }}>
                Tipo de empresa
              </label>
              <Field
                type="text"
                id="tipoEmpresa"
                name="tipoEmpresa"
                style={{ margin: "10px" }}
              />
              <ErrorMessage name="tipoEmpresa" component="div" align="center" />
            </Box>
            <Box>
              <label htmlFor="cantidadEmpleados" style={{ margin: "10px" }}>
                Cantidad de empleados
              </label>
              <Field
                type="number"
                id="cantidadEmpleados"
                name="cantidadEmpleados"
                style={{ margin: "10px" }}
              />
              <ErrorMessage
                name="cantidadEmpleados"
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
