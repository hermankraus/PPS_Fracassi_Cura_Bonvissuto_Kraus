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
  Button
} from '@chakra-ui/react';

const AdminStudent = () => {
  const [students, setStudents] = useState([]);

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

  return (
    <div>
      <TableContainer>
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
  );
};

export default AdminStudent;
