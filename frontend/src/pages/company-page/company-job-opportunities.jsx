import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useJobContext } from '../../components/context/job-context/job-context';

const CompanyJobOpportunities = () => {
  const [jobDetails, setJobDetails] = useState({
    idJobOffer: '',
    contractType: '',
    employmentType: '',
    workLocation: '',
    description: '',
    cuitCompany: '',
    state: '',
    finallyDate: '',
    workPlace: '',
    minSubjects: '',
    estimatedDate: '',
    internshipDuration: '',
  });

  const { addJobOffer } = useJobContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = () => {
    addJobOffer(jobDetails);
    setJobDetails({
      idJobOffer: '',
      contractType: '',
      employmentType: '',
      workLocation: '',
      description: '',
      cuitCompany: '',
      state: '',
      finallyDate: '',
      workPlace: '',
      minSubjects: '',
      estimatedDate: '',
      internshipDuration: '',
    });
  };

  return (
    <Box p={4} borderWidth='1px' borderRadius='lg' maxWidth='600px' mx='auto' mt={105}>
      <VStack spacing={4} align='stretch'>
        <FormControl>
          <FormLabel>ID de la Oferta</FormLabel>
          <Input
            name='idJobOffer'
            value={jobDetails.idJobOffer}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Tipo de Contrato</FormLabel>
          <Select
            name='contractType'
            value={jobDetails.contractType}
            onChange={handleChange}
          >
            <option value='full-time'>Tiempo Completo</option>
            <option value='part-time'>Medio Tiempo</option>
            <option value='internship'>Pasantía</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Tipo de Empleo</FormLabel>
          <Input
            name='employmentType'
            value={jobDetails.employmentType}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Ubicación de Trabajo</FormLabel>
          <Input
            name='workLocation'
            value={jobDetails.workLocation}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Descripción</FormLabel>
          <Textarea
            name='description'
            value={jobDetails.description}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>CUIT de la Compañía</FormLabel>
          <Input
            name='cuitCompany'
            value={jobDetails.cuitCompany}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Estado</FormLabel>
          <Input
            name='state'
            value={jobDetails.state}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Fecha Límite</FormLabel>
          <Input
            type='date'
            name='finallyDate'
            value={jobDetails.finallyDate}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Lugar de Trabajo</FormLabel>
          <Input
            name='workPlace'
            value={jobDetails.workPlace}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Asignaturas Mínimas</FormLabel>
          <Input
            name='minSubjects'
            value={jobDetails.minSubjects}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Fecha Estimada</FormLabel>
          <Input
            type='date'
            name='estimatedDate'
            value={jobDetails.estimatedDate}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Duración de la Pasantía</FormLabel>
          <Input
            name='internshipDuration'
            value={jobDetails.internshipDuration}
            onChange={handleChange}
          />
        </FormControl>

        <Button colorScheme='teal' onClick={handleSubmit}>
          Agregar Oferta Laboral
        </Button>
      </VStack>
    </Box>
  );
};

export default CompanyJobOpportunities;







