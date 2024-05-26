import { useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Grid,
  Box,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";
import "./adminPage.css";

export const AdminPage = () => {
  const registeredUsers = [
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
    { id: 3, name: "Usuario 3" },
  ];

  const jobVacancies = [
    { id: 1, title: "Desarrollador Frontend", company: "Empresa A" },
    { id: 2, title: "Desarrollador Backend", company: "Empresa B" },
    { id: 3, title: "Diseñador UI/UX", company: "Empresa C" },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [userApplications, setUserApplications] = useState([]);

  const handleUserSelection = (user) => {
    setSelectedUser(user);
    setUserApplications([]);
  };

  return (
    <Container maxW="container.lg">
      <VStack spacing={8} align="center">
        <Heading as="h1" mb={8}>
          Panel de administración
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Usuarios registrados
            </Heading>
            <List>
              {registeredUsers.map((user) => (
                <ListItem key={user.id}>
                  {user.name}
                  <Button
                    size="sm"
                    colorScheme="blue"
                    ml={2}
                    onClick={() => handleUserSelection(user)}
                  >
                    Ver vacantes
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Vacantes por compañía
            </Heading>
            <List>
              {jobVacancies.map((vacancy) => (
                <ListItem key={vacancy.id}>
                  {vacancy.title} - {vacancy.company}
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        {selectedUser && (
          <Box mt={8}>
            <Heading as="h3" size="lg" mb={4}>
              Vacantes para {selectedUser.name}
            </Heading>
            <List>
              {userApplications.map((application) => (
                <ListItem key={application.id}>
                  {application.title} - {application.company}
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </VStack>
    </Container>
  );
};
