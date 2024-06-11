import React from 'react';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { NavbarUser } from '../../components/navbar/navbar';
import { useJobContext } from '../../components/context/job-context/job-context';

const StudentJobOpportunities = () => {
  const { jobOffers } = useJobContext();

  return (
    <>
      <NavbarUser />
      <Box p={4}>
        <Heading as="h1" size="lg" mb={4}>Ofertas Laborales</Heading>
        <VStack spacing={4}>
          {jobOffers.length === 0 ? (
            <Text>No hay ofertas laborales disponibles</Text>
          ) : (
            jobOffers.map((offer, index) => (
              <Box key={index} p={4} borderWidth='1px' borderRadius='lg' w='100%'>
                <Heading as="h2" size="md">{offer.idJobOffer}</Heading>
                <Text>Tipo de Contrato: {offer.contractType}</Text>
                <Text>Tipo de Empleo: {offer.employmentType}</Text>
                <Text>Ubicación de Trabajo: {offer.workLocation}</Text>
                <Text>Descripción: {offer.description}</Text>
                <Text>CUIT de la Compañía: {offer.cuitCompany}</Text>
                <Text>Estado: {offer.state}</Text>
                <Text>Fecha Límite: {offer.finallyDate}</Text>
                <Text>Lugar de Trabajo: {offer.workPlace}</Text>
                <Text>Asignaturas Mínimas: {offer.minSubjects}</Text>
                <Text>Fecha Estimada: {offer.estimatedDate}</Text>
                <Text>Duración de la Pasantía: {offer.internshipDuration}</Text>
              </Box>
            ))
          )}
        </VStack>
      </Box>
    </>
  );
};

export default StudentJobOpportunities;