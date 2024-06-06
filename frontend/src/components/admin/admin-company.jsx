import React, { useState, useEffect } from "react";
import { CompaniesData } from "../user/data/user-data";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button
} from '@chakra-ui/react'

const AdminCompany = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    console.log("pase por aca")
    const fetchCompaniesData = async () => {
      try {
        const companiesData = await CompaniesData();
        console.log("Datos de compañías recibidos:", companiesData);
        setCompanies(companiesData.data);
      } catch (error) {
        console.error("Error al obtener la información de las empresas:", error);
      }
    };

    fetchCompaniesData();
  }, []);
  return (
    <div>
      <TableContainer>
        <Table variant='striped' color="primary">
          <Thead>
            <Tr>
              <Th>Cuit</Th>
              <Th>Nombre</Th>
              <Th>Razon Social</Th>
              <Th>Email</Th>
              <Th>Estado</Th>
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
