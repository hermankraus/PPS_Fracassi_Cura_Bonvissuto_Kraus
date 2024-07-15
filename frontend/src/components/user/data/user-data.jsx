import { getAllStudents } from "../../../Axios/axios-admin";
import { getAllCompanies } from "../../../Axios/axios-company";
import { myPostulationsByLegajo } from "../../../Axios/axios-student";

export const StudentsData = async () => {
  const responseStudentData = await getAllStudents();
  console.log(responseStudentData);
  return responseStudentData;
};

export const CompaniesData = async () => {
  const responseCompaniesData = await getAllCompanies();
  console.log(responseCompaniesData);
  return responseCompaniesData;
};

export const myPostulationByLegajo = async (legajo) => {
  const responsePostulationLegajoData = await myPostulationsByLegajo(legajo);
  console.log(responsePostulationLegajoData);
  return responsePostulationLegajoData;
};
