import React, { useState, useEffect } from "react";
import { StudentsData } from "../user/data/user-data";
import { putStudentState } from "../../Axios/axios-admin";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Heading,
  Input,
  HStack,
  Text
} from '@chakra-ui/react';
import { NavbarAdmin } from "../navbar/navbar";

const AdminStudent = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const studentsData = await StudentsData();
        setStudents(studentsData.data);
      } catch (error) {
        console.error("Error al obtener la información de los estudiantes:", error);
      }
    };

    fetchStudentsData();
  }, []);

  const acceptStudentHandler = async (studentIndex) => {
    try {
      const updatedStudents = [...students];
      const studentToUpdate = { ...updatedStudents[studentIndex], state: 1 };
      await putStudentState(studentToUpdate);
      updatedStudents[studentIndex] = studentToUpdate;
      setStudents(updatedStudents);

      console.log("Estudiante aceptado con éxito");
    } catch (error) {
      console.error("Error al aceptar al estudiante:", error);
    }
  };

  const declineStudentHandler = async (studentIndex) => {
    try {
      const updatedStudents = [...students];
      const studentToUpdate = { ...updatedStudents[studentIndex], state: 2 };

      await putStudentState(studentToUpdate);
      updatedStudents[studentIndex] = studentToUpdate;
      setStudents(updatedStudents);

      console.log("Estudiante rechazado con éxito");
    } catch (error) {
      console.error("Error al rechazar al estudiante:", error);
    }
  };

  const searchStudentHandler = () => {
    const filteredStudents = students.filter(student => student.legajo === parseInt(searchTerm));
    setStudents(filteredStudents);
    setSearched(true);
  }

  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <>
      <div>
        <NavbarAdmin />
        <div>
          <HStack p="2rem" mt={20}>
            <Text fontSize="17px">Buscador por legajo</Text>
            <Input
              placeholder="Inserte un numero."
              maxW="11rem"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="number"
            />
            <Button color="black" onClick={searchStudentHandler}>Buscar</Button>
            {searched && <Button color="black" onClick={reloadPage}>Recargar</Button>}
          </HStack>
        </div>
        <TableContainer p="2rem">
          <Heading fontSize="25px" mb="1rem" minH="2rem" textAlign="center">Lista de Estudiantes</Heading>
          <Table variant='striped' color="primary">
            <Thead>
              <Tr>
                <Th>Legajo</Th>
                <Th>Nombre</Th>
                <Th>Apellido</Th>
                <Th>Email</Th>
                <Th>Estado</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student, index) => (
                <Tr key={index}>
                  <Td>{student.legajo}</Td>
                  <Td>{student.name}</Td>
                  <Td>{student.lastname}</Td>
                  <Td>{student.email}</Td>
                  <Td>{student.state}</Td>
                  <Td>
                    <Button bg="green" color="white" onClick={() => acceptStudentHandler(index)}>Aceptar</Button>
                  </Td>
                  <Td>
                    <Button bg="red" color="white" onClick={() => declineStudentHandler(index)}>Rechazar</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default AdminStudent;
