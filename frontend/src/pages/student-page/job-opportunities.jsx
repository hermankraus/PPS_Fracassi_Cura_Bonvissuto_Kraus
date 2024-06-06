/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Heading, Text, Button, Select } from "@chakra-ui/react";

export const JobOpportunities = ({ onApply, jobOpportunities }) => {
  const [savedOpportunities, setSavedOpportunities] = useState([]);
  const [filter, setFilter] = useState("all");

  const toggleSaved = (opportunity) => {
    if (savedOpportunities.some((saved) => saved.id === opportunity.id)) {
      setSavedOpportunities(
        savedOpportunities.filter((saved) => saved.id !== opportunity.id)
      );
    } else {
      setSavedOpportunities([...savedOpportunities, opportunity]);
    }
  };

  const isSaved = (opportunity) => {
    return savedOpportunities.some((saved) => saved.id === opportunity.id);
  };

  const filteredOpportunities = () => {
    if (filter === "saved") {
      return jobOpportunities.filter((opportunity) => isSaved(opportunity));
    } else {
      return jobOpportunities;
    }
  };

  return (
    <Box>
      <Heading as="h3" size="lg" mb={6} align="center">
        Oportunidades laborales
      </Heading>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todas</option>
          <option value="saved">Guardadas</option>
        </Select>
      </Box>
      <Box display="flex" maxWidth="800px" flexWrap="wrap">
        {filteredOpportunities().map((opportunity) => (
          <Box
            key={opportunity.id}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={30}
            mr={20}
            mb={20}
          >
            <Heading as="h4" size="md" mb={4}>
              {opportunity.title}
            </Heading>
            <Text>{opportunity.company}</Text>
            <Button
              mt={4}
              onClick={() => onApply(opportunity)}
            >
              Postularme
            </Button>
            <Button
              mt={4}
              ml={4}
              // colorScheme={isSaved(opportunity) ? "yellow" : "gray"}
              onClick={() => toggleSaved(opportunity)}
            >
              {isSaved(opportunity) ? "Quitar de guardados" : "Guardar"}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
