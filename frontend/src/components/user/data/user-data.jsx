import { getAllStudents } from "../../../Axios/axios-admin";
import { getAllCompanies } from "../../../Axios/axios-company";

export const StudentsData = async () => {
  try {
    const responseStudentData = await getAllStudents();
    console.log(responseStudentData)
    return responseStudentData;
  } catch (error) {
    throw error;
  }
};

export const CompaniesData = async () => {
  try {
    const responseCompaniesData = await getAllCompanies();
    console.log(responseCompaniesData)
    return responseCompaniesData;
  } catch (error) {
    throw error;
  }
}

