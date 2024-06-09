/* eslint-disable react/prop-types */
import { Box, Heading, Button, Text } from "@chakra-ui/react";

export const JobPostulations = ({ postulatedJobs, onDelete }) => {
  return (
    <Box className="JobPostulationsContainer">
      <Heading as="h3" size="lg" mb={6} align="center">
        Postulaciones del estudiante
      </Heading>
      <Box display="flex" maxWidth="800px" flexWrap="wrap">
        {postulatedJobs.map((job) => (
          <Box
            key={job.id}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={30}
            mr={20}
            mb={20}
          >
            <Box>
              <Heading as="h4" size="md" mb={4}>
                {job.title}
              </Heading>
              <Text>{job.company}</Text>
            </Box>
            <Button onClick={() => onDelete(job)}>
              Eliminar
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
