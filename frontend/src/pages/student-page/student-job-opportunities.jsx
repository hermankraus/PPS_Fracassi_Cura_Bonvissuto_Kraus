import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { getAllJobOffer } from "../../Axios/axios-student";
import { NavbarUser } from "../../components/navbar/navbar";

const contractTypeMap = {
  0: "Contrato Temporal",
  1: "Contrato Permanente",
};

const employmentTypeMap = {
  0: "Tiempo Completo",
  1: "Medio Tiempo",
};

const workLocationMap = {
  0: "Remoto",
  1: "Presencial",
  2: "Híbrido",
};

const StudentJobOpportunities = () => {
  const [jobOffers, setJobOffers] = useState([]);
  const [postulatedOffers, setPostulatedOffers] = useState([]);

  useEffect(() => {
    const fetchJobOffers = async () => {
      try {
        const response = await getAllJobOffer();
        console.log(response.data);
        setJobOffers(response.data);
      } catch (error) {
        console.error("Error fetching job offers:", error);
      }
    };

    const savedPostulations =
      JSON.parse(localStorage.getItem("postulatedOffers")) || [];
    setPostulatedOffers(savedPostulations);

    fetchJobOffers();
  }, []);

  const handlePostulate = (offer) => {
    const updatedPostulations = [...postulatedOffers, offer];
    setPostulatedOffers(updatedPostulations);
    localStorage.setItem(
      "postulatedOffers",
      JSON.stringify(updatedPostulations)
    );
  };

  const handleWithdrawPostulation = (offerId) => {
    const updatedPostulations = postulatedOffers.filter(
      (offer) => offer.id !== offerId
    );
    setPostulatedOffers(updatedPostulations);
    localStorage.setItem(
      "postulatedOffers",
      JSON.stringify(updatedPostulations)
    );
  };

  return (
    <>
      <NavbarUser />
      <Box mt="6rem" p={10}>
        <Heading as="h1" overflow="hidden" size="xl" mb={4} textAlign="center">
          Ofertas Laborales
        </Heading>
        <Accordion allowMultiple>
          {jobOffers.length === 0 ? (
            <Text>No hay ofertas laborales disponibles</Text>
          ) : (
            jobOffers.map((offer, index) => (
              <AccordionItem key={index}>
                <AccordionButton>
                  <Box flex="1" textAlign="left" color="black">
                    {offer.description} - {contractTypeMap[offer.contractType]}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text>
                    <strong>Tipo de Contrato:</strong>{" "}
                    {contractTypeMap[offer.contractType]}
                  </Text>
                  <Text>
                    <strong>Tipo de Empleo:</strong>{" "}
                    {employmentTypeMap[offer.employmentType]}
                  </Text>
                  <Text>
                    <strong>Ubicación del Trabajo:</strong>{" "}
                    {workLocationMap[offer.workLocation]}
                  </Text>
                  <Text>
                    <strong>Descripción:</strong> {offer.description}
                  </Text>
                  <Text>
                    <strong>Estado:</strong> {offer.state}
                  </Text>
                  <Text>
                    <strong>Fecha de Finalización:</strong> {offer.finallydate}
                  </Text>
                  <Text>
                    <strong>Lugar de Trabajo:</strong> {offer.workPlace}
                  </Text>
                  <Text>
                    <strong>Asignaturas Mínimas:</strong> {offer.minSubjects}
                  </Text>
                  <Text>
                    <strong>Fecha Estimada:</strong> {offer.estimatedDate}
                  </Text>
                  <Text>
                    <strong>Duración de la Pasantía:</strong>{" "}
                    {offer.internshipDuration}
                  </Text>
                  {postulatedOffers.some(
                    (postulatedOffer) => postulatedOffer.id === offer.id
                  ) ? (
                    <Button onClick={() => handleWithdrawPostulation(offer.id)}>
                      Sacar Postulación
                    </Button>
                  ) : (
                    <Button onClick={() => handlePostulate(offer)}>
                      Postularse
                    </Button>
                  )}
                </AccordionPanel>
              </AccordionItem>
            ))
          )}
        </Accordion>
      </Box>
    </>
  );
};

export default StudentJobOpportunities;
