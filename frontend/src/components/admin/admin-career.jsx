import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AddCareer } from '../../Axios/axios-admin';
import useToaster from '../../hooks/useToaster';
import { useNavigate } from 'react-router-dom';
import { NavbarAdmin } from '../navbar/navbar';
import { ThemeContext } from '../../components/context/theme-context/theme-context';

const AdminCareer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { successToast, errorToast } = useToaster();

  const registerCareer = async (values, { resetForm }) => {
    const newCareer = {
      NameCareers: values.careerName,
      InstitutionCareers: values.careerInstitution,
      Type: values.careerType,
      State: 1,
    };
    setIsLoading(true);
  
    try {
      const response = await AddCareer(newCareer);
      successToast('Carrera añadida exitosamente');
      resetForm();
      navigate('/admin/career');
    } catch (error) {
      errorToast('Error al añadir la carrera');
    }
  
    setIsLoading(false);
  };
  
  const validationSchema = Yup.object({
    careerName: Yup.string().required('El nombre de la carrera es requerido'),
    careerInstitution: Yup.string().required('La institución es requerida'),
    careerType: Yup.string().required('El tipo de carrera es requerido'),
  });

  return (
    <>
        <div>
        <NavbarAdmin />
        </div>
        <Container maxW="xl" centerContent mt={120} className={isDarkMode ? "dark" : "light"}>
        <Formik
        initialValues={{
          careerName: '',
          careerInstitution: '',
          careerType: '',
        }}
        validationSchema={validationSchema}
        onSubmit={registerCareer}
      >
        <Form>
          <Flex direction="column" alignItems="center" spacing={4} >
            <FormControl >
              <FormLabel>Nombre de la carrera</FormLabel>
              <Field name="careerName" as={Input} variant="filled" className={`custom-input ${isDarkMode ? "dark" : "light"}`} />
              <ErrorMessage name="careerName" component="div" className="error-message" />
            </FormControl>
            <FormControl>
              <FormLabel>Institución</FormLabel>
              <Field name="careerInstitution" as={Input} variant="filled" className={`custom-input ${isDarkMode ? "dark" : "light"}`} />
              <ErrorMessage name="careerInstitution" component="div" className="error-message" />
            </FormControl>
            <FormControl>
              <FormLabel>Tipo de carrera</FormLabel>
              <Field name="careerType" as={Select} placeholder="Seleccione una opción" variant="filled" className={`custom-input ${isDarkMode ? "dark" : "light"}`}>

                  <option value='0'>Grado</option>
                  <option value='1'>Tecnicatura</option>
              
              </Field>
              <ErrorMessage name="careerType" component="div" className="error-message" />
            </FormControl>
            {isLoading ? (
              <Spinner size="md" color="blue" />
            ) : (
              <Button mt={4} colorScheme="blue" type="submit">
                Añadir Carrera
              </Button>
            )}
          </Flex>
        </Form>
      </Formik>
        </Container>
    </>
  );
};

export default AdminCareer;
