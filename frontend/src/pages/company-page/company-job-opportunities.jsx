import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { postJobOffer } from "../../Axios/axios-company";
import useToaster from "../../hooks/useToaster";
import { NavbarCompany } from "../../components/navbar/navbar";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import "./company-job-opportunities.css";

const CompanyJobOpportunities = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { successToast, errorToast } = useToaster();
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const cancelRef = React.useRef();

  const convertToNumber = (value) => {
    const number = Number(value);
    return isNaN(number) ? 0 : number;
  };

  const handleSubmitU = async (values) => {
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
      console.log(response.data);
      setIsAlertOpen(true); 
    } catch (error) {
      errorToast("Error al agregar la oferta laboral");
    }
    setIsLoading(false);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    navigate("/company"); 
  };

  const validationSchema = Yup.object({
    contractType: Yup.string().required("El tipo de contrato es requerido"),
    employmentType: Yup.string().required("El tipo de empleo es requerido"),
    workLocation: Yup.string().required("La ubicación de trabajo es requerida"),
    description: Yup.string().required("La descripción es requerida"),
    cuitCompany: Yup.string(),
    finallyDate: Yup.date().required("La fecha límite es requerida"),
    workPlace: Yup.string().required("El lugar de trabajo es requerido"),
    minSubjects: Yup.string().required("Las asignaturas mínimas son requeridas"),
    estimatedDate: Yup.date().required("La fecha estimada es requerida"),
    internshipDuration: Yup.string().required("La duración de la pasantía es requerida"),
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
          mt={105}
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
                      <option value="0">Inter</option>
                      <option value="1">Work</option>
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
                    <Field as={Textarea} name="description" className={`custom-input ${isDarkMode ? "custom-select" : ""}`}/>
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>CUIT de la Compañía</FormLabel>
                    <Field as={Input} name="cuitCompany" className={`custom-input ${isDarkMode ? "custom-select" : ""}`}/>
                    <ErrorMessage
                      name="cuitCompany"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Fecha Límite</FormLabel>
                    <Field type="date" as={Input} name="finallyDate" className={`custom-input ${isDarkMode ? "custom-select" : ""}`}/>
                    <ErrorMessage
                      name="finallyDate"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Lugar de Trabajo</FormLabel>
                    <Field type="text" as={Input} name="workPlace" className={`custom-input ${isDarkMode ? "custom-select" : ""}`}/>
                    <ErrorMessage
                      name="workPlace"
                      component="div"
                      className="error"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Asignaturas Mínimas</FormLabel>
                    <Field as={Input} type="number" name="minSubjects" className={`custom-input ${isDarkMode ? "custom-select" : ""}`}/>
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

          <AlertDialog
            isOpen={isAlertOpen}
            leastDestructiveRef={cancelRef}
            onClose={handleAlertClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Oferta Agregada
                </AlertDialogHeader>

                <AlertDialogBody>
                  La oferta laboral ha sido agregada exitosamente.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={handleAlertClose}>
                    OK
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Box>
      </div>
    </>
  );
};

export default CompanyJobOpportunities;
