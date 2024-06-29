import { useEffect, useState, useContext } from "react";
import {
  Box,
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
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import { myPostulationByLegajo } from "../../components/user/data/user-data";
import Cookies from "js-cookie";

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
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchPostulations = async () => {
      const legajo = Cookies.get("legajo");
      try {
        if (!legajo) {
          throw new Error("No se encontró el legajo del usuario en las cookies.");
        }
        console.log(legajo);
        const response = await myPostulationByLegajo(legajo);
        console.log(response);
        setPostulatedOffers(response.data);
      } catch (error) {
        console.error("Error fetching postulations:", error);
      }
    };

    fetchPostulations();
  }, []);

  return (
    <>
      <NavbarUser />
      <Container mt={{ base: "1rem", lg: "6rem" }} p={10} className={`${isDarkMode ? "dark" : "light"}`}>
        <Heading as="h1" overflow="hidden" size="xl" mb={4} textAlign="center">
          Mis Postulaciones
        </Heading>
        <Accordion allowMultiple textAlign="center">
          {postulatedOffers.length === 0 ? (
            <Text>No te has postulado a ninguna oferta laboral</Text>
          ) : (
            postulatedOffers.map((offer, index) => (
              <AccordionItem key={index}>
                <AccordionButton>
                  <Box flex="1" textAlign="left" className={`${isDarkMode ? "accordion-label" : ""}`}>
                    {offer.description} - {contractTypeMap[offer.contractType]}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} className={`${isDarkMode ? "accordion-panel" : ""}`}>
                <Text>
                    <strong>Titulo:</strong> {offer.title}
                  </Text>
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
