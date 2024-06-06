import React from "react";
import AdminStudent from "../../components/admin/admin-student";
import AdminCompany from "../../components/admin/admin-company";
import { NavbarPage } from "../../components/navbar/navbar";
import { Box } from "@chakra-ui/react";

const AdminPage = () => {
  return (
    <Box>
      <NavbarPage />
      <Box mt={20} p={10}>
        <AdminStudent />
        <AdminCompany />
      </Box>
    </Box>
  );
};

export default AdminPage;
