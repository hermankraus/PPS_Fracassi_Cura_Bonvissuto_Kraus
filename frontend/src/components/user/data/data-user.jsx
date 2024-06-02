import { useState, useEffect } from 'react';
import { getStudents } from "../../../Axios/axios-student";
/*FALTAN GETCOMPANY Y GETADMIN*/

export const dataUserStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStudents();
        if (response && response.data) {
          setStudents(response.data);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {students.map(student => (
          <li key={student.Legajo}>
            {student.Legajo}
            {student.DocumentType}
            {student.DocumentNumber}
            {student.Name}
            {student.LastName}
            {student.PhoneNumber}
            {student.CellPhoneNumber}
            {student.Address}
            {student.AddressNumber}
            {student.Floor}
            {student.Flat}
            {student.Country}
            {student.Province}
            {student.City}
            {student.DateOfBirth}
            {student.MaritalStatus}
            {student.Cuil}
            {student.Gender}
            {student.Career}
            {student.ApprovedSubjects}
            {student.AverageWithFails}
            {student.AverageWithoutFails}
            {student.YearOfStudy}
            {student.Turn}
            {student.CurriculumPlan}
            {student.YearOfEntry}
            {student.Biography}
            {student.SecondaryTitle}
            {student.GithubUrl}
            {student.LinkedUrl}
            {student.Email}
            {student.Password}
            {student.State}
          </li>
        ))}
      </ul>
    </div>
  );
};
