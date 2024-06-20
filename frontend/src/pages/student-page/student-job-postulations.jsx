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
  Container,
} from "@chakra-ui/react";
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

const StudentJobPostulations = () => {
  const [postulatedOffers, setPostulatedOffers] = useState([]);

  useEffect(() => {
    const savedPostulations =
      JSON.parse(localStorage.getItem("postulatedOffers")) || [];
    setPostulatedOffers(savedPostulations);
  }, []);

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
      <Container mt="6rem" p={10}>
        <Heading as="h1" overflow="hidden" size="xl" mb={4} textAlign="center">
          Mis Postulaciones
        </Heading>
        <Accordion allowMultiple>
          {postulatedOffers.length === 0 ? (
            <Text>No te has postulado a ninguna oferta laboral</Text>
          ) : (
            postulatedOffers.map((offer, index) => (
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
                  <Button onClick={() => handleWithdrawPostulation(offer.id)}>
                    Sacar Postulación
                  </Button>
                </AccordionPanel>
              </AccordionItem>
            ))
          )}
        </Accordion>
      </Container>
    </>
  );
};

export default StudentJobPostulations;
