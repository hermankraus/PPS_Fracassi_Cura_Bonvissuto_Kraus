
import { useState, useEffect, useContext } from "react";
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
  Heading,
} from '@chakra-ui/react';
import AnimatedButton from "../../shared/button";
import { NavbarAdmin } from "../navbar/navbar";
import { ThemeContext } from '../../components/context/theme-context/theme-context';

const stateMap = {
  0: 'En proceso',
  1: 'Habilitado',
  2: 'Deshabilitado',
};

const AdminCompany = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);
  const [reloadAllCompanies, setRealoadAllCompanies] = useState([]);


  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const companiesData = await CompaniesData();
        setCompanies(companiesData.data);
        setRealoadAllCompanies(companiesData.data);
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

      console.log("Empresa habilitada con éxito");
    } catch (error) {
      console.error("Error al habilitar la empresa:", error);
    }
  };

  const declineCompanyHandler = async (companyIndex) => {
    try {
      const updatedCompanies = [...companies];
      const companyToUpdate = { ...updatedCompanies[companyIndex], state: 2 };

      await putCompanyState(companyToUpdate);
      updatedCompanies[companyIndex] = companyToUpdate;
      setCompanies(updatedCompanies);
      console.log("Empresa deshabilitada con éxito");
    } catch (error) {
      console.error("Error al deshabilitar la empresa:", error);
    }
  };

  const searchCompanyHandler = () => {
    const filteredCompanies = companies.filter(company => company.cuit === searchTerm);
    setCompanies(filteredCompanies);
    setSearched(true);
  }

  const searchCompanyAproveHandler = () => {
    const filteredCompanies = companies.filter(company => company.state === 1);
    setCompanies(filteredCompanies);
    setSearched(true);
  };

  const searchCompanyRejectedHandler = () => {
    const filteredCompanies = companies.filter(companies => companies.state === 2 || companies.state === 0);
    setCompanies(filteredCompanies);
    setSearched(true);
  };

  const reloadPage = () => {
    setCompanies(reloadAllCompanies);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <NavbarAdmin />
      <div>
        <HStack p="5rem" mt={5}>
          <Text fontSize="17px">Buscador por CUIT</Text>
          <Input
            placeholder="Inserte un número."
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
            borderRadius={12} onClick={searchCompanyHandler}
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
            onClick={searchCompanyAproveHandler}
          >
            Companias habilitados
          </AnimatedButton>

          <AnimatedButton
            bg="#265171"
            color="white"
            minW="14rem"
            minH="2.5rem"
            ml="1rem"
            borderRadius={12}
            onClick={searchCompanyRejectedHandler}
          >
            Companias deshabilitados
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
      <TableContainer p="1rem" maxWidth="90rem" overflow-x="auto">
        <Heading fontSize="25px" mb="1rem" minH="2rem" textAlign="center">Lista de Empresas</Heading>
        <Table variant='striped' color="primary" className="table">
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
                <Td maxW="6rem">{company.companyName}</Td>
                <Td maxW="6rem">{company.businessName}</Td>
                <Td>{company.contactEmail}</Td>
                <Td>{stateMap[company.state]}</Td>
                <Td>
                  <Button
                    bg="green"
                    color="white"
                    onClick={() => acceptCompanyHandler(index)}
                    isDisabled={company.state === 1}
                  >
                    Habilitar
                  </Button>
                </Td>
                <Td>
                  <Button
                    bg="red"
                    color="white"
                    onClick={() => declineCompanyHandler(index)}
                    isDisabled={company.state === 2}
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
  );
};

export default AdminCompany;
