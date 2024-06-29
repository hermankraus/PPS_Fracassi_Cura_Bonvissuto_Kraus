import React, { useState, useEffect } from 'react';
import { NavbarCompany } from '../../components/navbar/navbar';
import { GetPostulationsByCuit, GetPostulationsStudentToCompany } from '../../Axios/axios-company';
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading } from '@chakra-ui/react';
import Cookies from "js-cookie";

const JobPostulationsCompany = () => {
  const [postulations, setPostulations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cuit = Cookies.get("cuit");
 

  useEffect(() => {
    const fetchPostulations = async () => {
      try {
        if (!cuit) {
          throw new Error("No se encontró el cuit del usuario en las cookies.");
        }

        const response = await GetPostulationsByCuit(cuit);
        const responsePostulationsByCuit = response.result;
        console.log('Respuesta 1:', responsePostulationsByCuit);

        const postulationPromises = responsePostulationsByCuit.map(async (postulation) => {
          const responsePostulationsStudentCompany = await GetPostulationsStudentToCompany(postulation.idJoboffer);
          console.log('Respuesta 2:', responsePostulationsStudentCompany);
          return {
            jobOffer: postulation,
            students: responsePostulationsStudentCompany
          };
        });

        const postulationsData = await Promise.all(postulationPromises);
        setPostulations(postulationsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching postulations:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchPostulations();
  }, [cuit]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <NavbarCompany />
      <Box mt={{ base: "2rem", lg: "20rem" }}>
        <div>
          {loading ? (
            <Text>Loading...</Text>
          ) :
            postulations.length === 0 ? (
              <Text>No tenes personas postuladas a tus ofertas</Text>
            ) : (
              <Accordion allowMultiple textAlign="center">
                {postulations.map(({ jobOffer, students }) => (
                  <AccordionItem key={jobOffer.idJoboffer}>
                   <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {jobOffer.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text>
                        <strong>Descripción:</strong> {jobOffer.description}
                      </Text>
                      <Text>
                        <strong>Postulaciones:</strong>
                      </Text>
                      {students.map((student) => (
                        <Box key={student.id} ml={4}>
                          <Text>
                            <strong>Nombre:</strong> {student.name} {student.lastName}
                          </Text>
                          <Text>
                            <strong>Email:</strong> {student.email}
                          </Text>
                        </Box>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
        </div>
      </Box>
    </>
  );
};

export default JobPostulationsCompany;
