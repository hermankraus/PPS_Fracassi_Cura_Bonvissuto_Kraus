import React from 'react';
import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { NavbarUser } from '../../components/navbar/navbar';

const StudentJobOpportunities = () => {

  return (
    <>

      {/* HAY QUE HACER UN GETTER JOB OFFER COMPANY */}
      <NavbarUser />
      <Box mt="8rem" p={10}>
        <Heading as="h1" size="md" mb={4} justifyContent="center">Ofertas Laborales</Heading>
        <Accordion allowMultiple>
          <Text>No hay ofertas laborales disponibles</Text>
          <AccordionItem>
            <h2>
              <AccordionButton color="black">
                FALTA HACER EL GET OFFER PARA QUE EL ESTUDIANTE VEA LAS OFERTAS
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>

            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box >
    </>
  );
};

export default StudentJobOpportunities;
