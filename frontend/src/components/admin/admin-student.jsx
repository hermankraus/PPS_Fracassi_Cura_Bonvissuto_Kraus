
import { useState, useEffect, useContext } from "react";
import { StudentsData } from "../user/data/user-data";
import { putStudentState } from "../../Axios/axios-admin";
import { ThemeContext } from '../../components/context/theme-context/theme-context';
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
import AnimatedButton from "../../shared/button";

const stateMap = {
  0: 'En proceso',
  1: 'Habilitado',
  2: 'Deshabilitado',
};

const AdminStudent = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);
  const [reloadAllStudents, setRealoadAllStudents] = useState([]);

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const studentsData = await StudentsData();
        setStudents(studentsData.data);
        setRealoadAllStudents(studentsData.data);
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
  };

  const searchStudentAproveHandler = () => {
    setStudents(reloadAllStudents)
    const filteredStudents = students.filter(student => student.state === 1);
    setStudents(filteredStudents);
    setSearched(true);
  };

  const searchStudentRejectedHandler = () => {
    setStudents(reloadAllStudents)
    const filteredStudents = students.filter(student => student.state === 2 || student.state === 0);
    setStudents(filteredStudents);
    setSearched(true);
  };

  const reloadPage = () => {
    setStudents(reloadAllStudents);
  };

  return (
    <>
      <div className={isDarkMode ? "dark" : "light"}>
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
            <AnimatedButton
              bg="#265171"
              color="white"
              minW="5rem"
              minH="2.5rem"
              ml="1rem"
              borderRadius={12}
              onClick={searchStudentHandler}
            >
              Buscar
            </AnimatedButton>
            <AnimatedButton
              bg="#265171"
              color="white"
              minW="12rem"
              minH="2.5rem"
              ml="1rem"
              borderRadius={12}
              onClick={searchStudentAproveHandler}
            >
              Estudiantes habilitados
            </AnimatedButton>

            <AnimatedButton
              bg="#265171"
              color="white"
              minW="14rem"
              minH="2.5rem"
              ml="1rem"
              borderRadius={12}
              onClick={searchStudentRejectedHandler}
            >
              Estudiantes deshabilitados
            </AnimatedButton>

            <AnimatedButton
              bg="#265171"
              color="white"
              minW="8rem"
              minH="2.5rem"
              ml="1rem"
              borderRadius={12} onClick={reloadPage}
            >
              Recargar
            </AnimatedButton>
          </HStack>
        </div>
        <TableContainer p="2rem">
          <Heading fontSize="25px" mb="1rem" minH="2rem" textAlign="center">Lista de Estudiantes</Heading>
          <Table variant='striped' color="primary" className="table">
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
                <Tr key={index} className={`${isDarkMode && index % 2 == 0 ? "dark-gray-row" : ""}`}>
                  <Td>{student.legajo}</Td>
                  <Td>{student.name}</Td>
                  <Td>{student.lastname}</Td>
                  <Td>{student.email}</Td>
                  <Td>{stateMap[student.state]}</Td>
                  <Td>
                    <Button
                      bg="green"
                      color="white"
                      onClick={() => acceptStudentHandler(index)}
                      isDisabled={student.state === 1}
                    >
                      Habilitar
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      bg="red"
                      color="white"
                      onClick={() => declineStudentHandler(index)}
                      isDisabled={student.state === 2}
                    >
                      Deshabilitar
                    </Button>
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
