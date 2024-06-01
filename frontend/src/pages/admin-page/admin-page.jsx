import { useState } from "react";
import { NavbarPage } from "../../components/navbar/navbar";

export const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavbarPage isAdmin={isAdmin} />
      <div style={{ paddingTop: "70px", flex: 1, padding: "20px" }}>
        <h1>¡Hola mundo!</h1>
      </div>
    </div>
  );
};