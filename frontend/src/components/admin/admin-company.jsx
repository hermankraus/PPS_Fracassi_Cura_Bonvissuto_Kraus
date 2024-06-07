import React, { useState, useEffect } from "react";
import { CompaniesData } from "../user/data/user-data";
import { putCompanyState } from "../../Axios/axios-admin";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  HStack,
  Input,
  Text,
  Heading
} from '@chakra-ui/react';
import { NavbarPage } from "../navbar/navbar";

const AdminCompany = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const companiesData = await CompaniesData();
        setCompanies(companiesData.data);
      } catch (error) {
        console.error("Error al obtener la información de las empresas:", error);
      }
    };

    fetchCompaniesData();
  }, []);

  const acceptCompanyHandler = async (companyIndex) => {
    try {
      const updatedCompanies = [...companies];
      const companyToUpdate = { ...updatedCompanies[companyIndex], state: 1 };
      await putCompanyState(companyToUpdate);
      updatedCompanies[companyIndex] = companyToUpdate;
      setCompanies(updatedCompanies);

      console.log("Empresa aceptada con éxito");
    } catch (error) {
      console.error("Error al aceptar la empresa:", error);
    }
  };

  const declineCompanyHandler = async (companyIndex) => {
    try {
      const updatedCompanies = [...companies];
      const companyToUpdate = { ...updatedCompanies[companyIndex], state: 2 };

      await putCompanyState(companyToUpdate);
      updatedCompanies[companyIndex] = companyToUpdate;
      setCompanies(updatedCompanies);
      console.log("Empresa rechazada con éxito");
    } catch (error) {
      console.error("Error al rechazar la empresa:", error);
    }
  };

  const searchCompanyHandler = () => {
    const filteredCompanies = companies.filter(company => company.cuit === searchTerm);
    setCompanies(filteredCompanies);
    setSearched(true);
  }
  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <div>
      <NavbarPage />
      <div>
        <HStack p="2rem" mt={20}>
          <Text fontSize="17px">Buscador por CUIT</Text>
          <Input
            placeholder="Inserte un número."
            maxW="11rem"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="number"
          />
          <Button color="black" onClick={searchCompanyHandler}>Buscar</Button>
          {searched && <Button color="black" onClick={reloadPage}>Recargar</Button>}
        </HStack>
      </div>
      <TableContainer p="2rem">
        <Heading fontSize="25px" mb="1rem" minH="2rem" textAlign="center">Lista de Empresas</Heading>
        <Table variant='striped' color="primary">
          <Thead>
            <Tr>
              <Th>CUIT</Th>
              <Th>Nombre</Th>
              <Th>Razón Social</Th>
              <Th>Email</Th>
              <Th>Estado</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {companies.map((company, index) => (
              <Tr key={index}>
                <Td>{company.cuit}</Td>
                <Td>{company.companyName}</Td>
                <Td>{company.businessName}</Td>
                <Td>{company.contactEmail}</Td>
                <Td>{company.state}</Td>
                <Td><Button bg="green" color="white" onClick={() => acceptCompanyHandler(index)}>Aceptar</Button></Td>
                <Td><Button bg="red" color="white" onClick={() => declineCompanyHandler(index)}>Rechazar</Button></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminCompany;
