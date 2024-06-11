import { NavbarUser } from "../../components/navbar/navbar";
import CompanyJobOpportunities from "./company-job-opportunities";
const CompanyPage = () => {
  return (

    // ESTE TRAE EL NAVBARUSER STUDENT PARA VER RUTAS
    <>
      <div><NavbarUser />
      </div>
      <div padding="20rem">
        <CompanyJobOpportunities />

      </div>

    </>
  )
}

export default CompanyPage;
