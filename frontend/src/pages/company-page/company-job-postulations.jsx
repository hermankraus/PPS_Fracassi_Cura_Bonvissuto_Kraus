import React, { useState, useEffect } from 'react';
import { NavbarCompany } from '../../components/navbar/navbar';
import { PostulationsStudentsCompany } from '../../components/user/data/user-data';
import { Container, Box, Text } from '@chakra-ui/react';
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
        console.log(cuit);

        const responsePostulationStudentCompany = await PostulationsStudentsCompany(cuit);
        setPostulations(responsePostulationStudentCompany.data);
        console.log(postulations)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPostulations();
  }, [cuit]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <NavbarCompany />
      <Box mt={{ lg: "10rem" }}>
        <div>

          {/* ACCORDION DE GET OFFER BY CUIT */}
          {Array.isArray(postulations) && postulations.length === 0 ? (
            <Text>No te has postulado a ninguna oferta laboral</Text>
          ) : (
            Array.isArray(postulations) && postulations.map((postulation) => (
              <div key={postulation.id}>
                <h3>{postulation.studentName}</h3>
                <p>{postulation.position}</p>
                <p>{postulation.status}</p>
              </div>
            ))
          )}
        </div>
      </Box>
    </>
  );
};

export default JobPostulationsCompany;
