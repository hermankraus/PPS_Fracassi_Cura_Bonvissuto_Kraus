import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AddSkill } from '../../Axios/axios-admin';
import useToaster from '../../hooks/useToaster';
import { useNavigate } from 'react-router-dom';
import { NavbarAdmin } from '../navbar/navbar';
import { ThemeContext } from '../../components/context/theme-context/theme-context';

const AdminSkill = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { successToast, errorToast } = useToaster();

  const registerSkill = async (values, { resetForm }) => {
    const newSkill = {
      descriptionSkills: values.descriptionSkills,
      State: 1,
    };
    setIsLoading(true);
  
    try {
      const response = await AddSkill(newSkill);
      successToast('Habilidad añadida exitosamente');
      resetForm();
      navigate('/admin/skill');
    } catch (error) {
      errorToast('Error al añadir la habilidad');
    }
  
    setIsLoading(false);
  };
  
  const validationSchema = Yup.object({
    descriptionSkills: Yup.string().required('La descripcion de la habilidad es requerida'),
  });

  return (
    <>
        <div>
        <NavbarAdmin />
        </div>
        <Container maxW="xl" centerContent mt={120} className={isDarkMode ? "dark" : "light"}>
        <Formik
        initialValues={{
            descriptionSkills: '',
        }}
        validationSchema={validationSchema}
        onSubmit={registerSkill}
      >
        <Form>
          <Flex direction="column" alignItems="center" spacing={4}>
            <FormControl>
              <FormLabel>Descripcion de la habilidad</FormLabel>
              <Field name="descriptionSkills" as={Input} variant="filled" className={`custom-input ${isDarkMode ? "dark" : "light"}`}/>
              <ErrorMessage name="descriptionSkills" component="div" className="error-message" />
            </FormControl>
            {isLoading ? (
              <Spinner size="md" color="blue" />
            ) : (
              <Button mt={4} colorScheme="blue" type="submit">
                Añadir habilidad
              </Button>
            )}
          </Flex>
        </Form>
      </Formik>
        </Container>
    </>
  );
};

export default AdminSkill;
