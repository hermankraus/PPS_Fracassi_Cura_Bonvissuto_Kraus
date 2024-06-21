import React, { useContext } from "react";
import AdminStudent from "../../components/admin/admin-student";
import { Box } from "@chakra-ui/react";
import { ThemeContext } from "../../components/context/theme-context/theme-context";

const AdminPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Box className={isDarkMode ? "dark" : "light"}>
      <AdminStudent />
    </Box>
  );
};

export default AdminPage;
