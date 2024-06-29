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
} from "@chakra-ui/react";
import { NavbarUser } from "../../components/navbar/navbar";
import { ThemeContext } from "../../components/context/theme-context/theme-context";
import { getAllJobOffer, studentApplyToJobOffer } from "../../Axios/axios-student";
import useToaster from "../../hooks/useToaster";
import Cookies from "js-cookie";
import AnimatedButton from "../../shared/button";

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
  const { isDarkMode } = useContext(ThemeContext);
  const [jobOffers, setJobOffers] = useState([]);
  const { successToast, errorToast } = useToaster();


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

    fetchJobOffers();
  }, []);

  const handlePostulate = async (offer) => {
    try {
      const legajo = Cookies.get("legajo");
      if (!legajo) {
        throw new Error("No se encontró el legajo del usuario en las cookies.");
      }
      console.log(legajo)
      console.log(offer.idJobOffer)

      const studentPost = {
        jobofferId: offer,
        legajo: legajo,
      }

      const response = await studentApplyToJobOffer(studentPost);
      console.log(response)
      successToast('Postulacion exitosa.');

    } catch (error) {
      errorToast('Postulacion no aceptada.');
    }
  };

  return (
    <>
      <NavbarUser />

      <Box mt={{ base: "1rem", lg: "6rem" }} p={10} className={`${isDarkMode ? 'dark' : 'light'}`}>
        <Heading as="h1" overflow="hidden" size="xl" mb={4} textAlign="center">Ofertas Laborales</Heading>

        <Accordion allowMultiple>
          {jobOffers.length === 0 ? (
            <Text>No hay ofertas laborales disponibles</Text>
          ) : (
            jobOffers.map((offer) => (
              <AccordionItem key={offer.idJobOffer}>
                <AccordionButton>
                  <Box flex="1" textAlign="left" >
                    {offer.description} - {contractTypeMap[offer.contractType]}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text>
                    <strong>Titulo:</strong>
                    {[offer.title]}
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
                  <AnimatedButton
                    onClick={() => handlePostulate(offer.idJobOffer)}
                    mt="0.5rem"
                    minW="6rem"
                    minH="2rem"
                    color="white"
                    bg="#265171"
                    cursor="pointer"
                    borderRadius={6}
                    fontSize={16}
                  >
                    Postularse
                  </AnimatedButton>
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
