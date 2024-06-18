import { NavbarCompany } from "../../components/navbar/navbar";
import CompanyJobOpportunities from "./company-job-opportunities";
const CompanyPage = () => {
  return (
    <>
      <NavbarCompany />
      <div padding="20rem">
        <CompanyJobOpportunities />
      </div>
    </>
  );
};

export default CompanyPage;
