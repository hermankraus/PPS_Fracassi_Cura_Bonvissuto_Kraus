import { useState } from "react";
import {
  VStack,
  Container,
  Heading,
  List,
  ListItem,
  Button,
  Box,
  Grid,
  Badge,
} from "@chakra-ui/react";
import "./companyPage.css";

export const CompanyPage = () => {
  const [jobApplications, setJobApplications] = useState([]);

  const jobOpportunities = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      description: "Descripción del trabajo...",
      applicants: [
        { id: 1, name: "Juan Pérez" },
        { id: 2, name: "María García" },
      ],
    },
    {
      id: 2,
      title: "Desarrollador Backend",
      description: "Descripción del trabajo...",
      applicants: [
        { id: 3, name: "Carlos González" },
        { id: 4, name: "Ana Martínez" },
      ],
    },
    {
      id: 3,
      title: "Diseñador UI/UX",
      description: "Descripción del trabajo...",
      applicants: [
        { id: 5, name: "Laura Sánchez" },
        { id: 6, name: "Pablo Rodríguez" },
      ],
    },
  ];

  const handleViewApplicants = (applicants) => {
    setJobApplications(applicants);
  };

  const handleCloseApplicants = () => {
    setJobApplications([]);
  };

  return (
    <Container maxW="container.lg">
      <VStack spacing={8} align="center">
        <Heading as="h1" mb={8}>
          Página de la empresa
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <Box>
            <Box className="JobOpportunitiesContainer">
              <Heading as="h2" size="lg" mb={4}>
                Ofertas laborales publicadas
              </Heading>
              <List className="JobOpportunitiesList">
                {jobOpportunities.map((opportunity) => (
                  <ListItem key={opportunity.id}>
                    <Heading as="h3" size="md" mb={2}>
                      {opportunity.title}
                    </Heading>
                    <p>{opportunity.description}</p>
                    <Button
                      onClick={() =>
                        handleViewApplicants(opportunity.applicants)
                      }
                      colorScheme="blue"
                      mt={2}
                    >
                      Ver candidatos
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box>
            <Box className="ApplicantsContainer">
              {jobApplications.length > 0 ? (
                <>
                  <Button
                    onClick={handleCloseApplicants}
                    colorScheme="red"
                    mb={4}
                  >
                    Cerrar
                  </Button>
                  <Heading as="h2" size="lg" mb={4}>
                    Candidatos para la oferta
                  </Heading>
                  <List className="ApplicantsList">
                    {jobApplications.map((applicant) => (
                      <ListItem key={applicant.id}>
                        <Badge colorScheme="green" mr={2}>
                          Nuevo
                        </Badge>
                        {applicant.name}
                      </ListItem>
                    ))}
                  </List>
                </>
              ) : (
                <p>Selecciona una oferta para ver los candidatos.</p>
              )}
            </Box>
          </Box>
        </Grid>
      </VStack>
    </Container>
  );
};
