import { useState, useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postJobOffer } from "../../Axios/axios-company";
import useToaster from "../../hooks/useToaster";
import { NavbarCompany } from "../../components/navbar/navbar";
import { ThemeContext } from "../../components/context/theme-context/theme-context";

const CompanyJobOpportunities = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { successToast, errorToast } = useToaster();
  const [isLoading, setIsLoading] = useState(false);

  const convertToNumber = (value) => {
    const number = Number(value);
    return isNaN(number) ? 0 : number;
  };

  const handleSubmitU = async (values, { resetForm }) => {
    const Values = {
      ContractType: convertToNumber(values.contractType),
      EmploymentType: convertToNumber(values.employmentType),
      WorkLocation: convertToNumber(values.workLocation),
      Description: values.description,
      Cuitcompany: values.cuitCompany,
      State: 0,
      Finallydate: values.finallyDate,
      WorkPlace: values.workPlace,
      MinSubjects: values.minSubjects,
      EstimatedDate: values.estimatedDate,
      InternshipDuration: values.internshipDuration,
    };
    setIsLoading(true);

    try {
      const response = await postJobOffer(Values);
      successToast(response.data);
      resetForm();
    } catch (error) {
      errorToast("Error al agregar la oferta laboral");
    }
    setIsLoading(false);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const validationSchema = Yup.object({
    contractType: Yup.string().required("El tipo de contrato es requerido"),
    employmentType: Yup.string().required("El tipo de empleo es requerido"),
    workLocation: Yup.string().required("La ubicación de trabajo es requerida"),
    description: Yup.string().required("La descripción es requerida"),
    cuitCompany: Yup.string().required('El CUIT de la compañía es requerido').matches(/^\d{11}$/, 'El CUIT debe tener 11 dígitos'),
    finallyDate: Yup.date()
      .min(today, "La fecha debe ser posterior a la de hoy")
      .required("La fecha límite es requerida"),
    workPlace: Yup.string().required("El lugar de trabajo es requerido"),
    minSubjects: Yup.string().required(
      "Las asignaturas mínimas son requeridas"
    ),
    estimatedDate: Yup.date().required("La fecha estimada es requerida")
      .min(today, "La fecha debe ser posterior a la de hoy")
    ,
    internshipDuration: Yup.string().required(
      "La duración de la pasantía es requerida"
    ),
  });

  return (
    <>
      <NavbarCompany />
      <div className={isDarkMode ? "dark" : "light"}>
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          maxWidth="600px"
          mx="auto"
          mt="12rem"
        >
          <Formik
            initialValues={{
              contractType: "",
              employmentType: "",
              workLocation: "",
              description: "",
              cuitCompany: "",
              finallyDate: "",
              workPlace: "",
              minSubjects: "",
              estimatedDate: "",
              internshipDuration: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmitU}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel>Tipo de Contrato</FormLabel>
                    <Field as={Select} name="contractType" className={`custom-input ${isDarkMode ? "custom-select" : ""}`}>
                      <option value="">Seleccione...</option>
                      <option value="0">Pasantía</option>
                      <option value="1">Full Time</option>
                    </Field>
                    <ErrorMessage
                      name="contractType"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Tipo de Empleo</FormLabel>
                    <Field as={Select} name="employmentType" className={`custom-input ${isDarkMode ? "custom-select" : ""}`}>
                      <option value="">Seleccione...</option>
                      <option value="0">Tiempo Completo</option>
                      <option value="1">Medio Tiempo</option>
                    </Field>
                    <ErrorMessage
                      name="employmentType"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Ubicación de Trabajo</FormLabel>
                    <Field as={Select} name="workLocation" className={`custom-input ${isDarkMode ? "custom-select" : ""}`}>
                      <option value="">Seleccione...</option>
                      <option value="0">Remoto</option>
                      <option value="1">Presencial</option>
                      <option value="2">Híbrido</option>
                    </Field>
                    <ErrorMessage
                      name="workLocation"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Descripción</FormLabel>
                    <Field as={Textarea} name="description" className={`custom-input ${isDarkMode ? "custom-select" : ""}`} />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>CUIT de la Compañía</FormLabel>
                    <Field as={Input} name="cuitCompany" className={`custom-input ${isDarkMode ? "custom-select" : ""}`} />
                    <ErrorMessage
                      name="cuitCompany"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Fecha Límite</FormLabel>
                    <Field type="date" as={Input} name="finallyDate" className={`custom-input ${isDarkMode ? "custom-select" : ""}`} />
                    <ErrorMessage
                      name="finallyDate"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Lugar de Trabajo</FormLabel>
                    <Field type="text" as={Input} name="workPlace" className={`custom-input ${isDarkMode ? "custom-select" : ""}`} />
                    <ErrorMessage
                      name="workPlace"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Asignaturas Mínimas</FormLabel>
                    <Field as={Input} type="number" name="minSubjects" className={`custom-input ${isDarkMode ? "custom-select" : ""}`} />
                    <ErrorMessage
                      name="minSubjects"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Fecha Estimada</FormLabel>
                    <Field type="date" as={Input} name="estimatedDate" className={`custom-input ${isDarkMode ? "custom-select" : ""}`} />
                    <ErrorMessage
                      name="estimatedDate"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Duración de la Pasantía</FormLabel>
                    <Field as={Input} name="internshipDuration" className={`custom-input ${isDarkMode ? "custom-select" : ""}`} />
                    <ErrorMessage
                      name="internshipDuration"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <Button
                    color="teal"
                    type="submit"
                    isLoading={isLoading}
                    loadingText="Registrando..."
                  >
                    Agregar Oferta Laboral
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
    </>
  );
};

export default CompanyJobOpportunities;